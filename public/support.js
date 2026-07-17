(() => {
  'use strict';

  const escapeHtml = (value) => String(value ?? '');
  const getPath = (ctx, path) => {
    const clean = path.trim();
    if (clean === 'true') return true;
    if (clean === 'false') return false;
    if (/^-?\d+(\.\d+)?$/.test(clean)) return Number(clean);
    return clean.split('.').reduce((acc, key) => (acc == null ? undefined : acc[key]), ctx);
  };

  class DCLogic {
    constructor(props = {}) {
      this.props = props;
      this.state = {};
      this.__rerender = null;
    }
    setState(next) {
      const patch = typeof next === 'function' ? next(this.state, this.props) : next;
      this.state = { ...this.state, ...patch };
      if (this.__rerender) this.__rerender();
    }
    icon(value) { return value; }
  }
  window.DCLogic = DCLogic;

  function interpolate(text, ctx) {
    return String(text).replace(/{{\s*([^}]+)\s*}}/g, (_, expr) => {
      const value = getPath(ctx, expr);
      return typeof value === 'function' ? '' : escapeHtml(value);
    });
  }

  function renderNode(node, ctx) {
    if (node.nodeType === Node.TEXT_NODE) {
      return document.createTextNode(interpolate(node.textContent || '', ctx));
    }
    if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      const fragment = document.createDocumentFragment();
      Array.from(node.childNodes).forEach((child) => fragment.appendChild(renderNode(child, ctx)));
      return fragment;
    }
    if (node.nodeType !== Node.ELEMENT_NODE) return node.cloneNode(true);

    const tag = node.tagName.toLowerCase();
    if (tag === 'sc-for') {
      const listExpr = (node.getAttribute('list') || '').replace(/[{}]/g, '').trim();
      const alias = node.getAttribute('as') || 'item';
      const list = getPath(ctx, listExpr) || [];
      const fragment = document.createDocumentFragment();
      Array.from(list).forEach((item, index) => {
        const childCtx = { ...ctx, [alias]: item, $index: index };
        Array.from(node.childNodes).forEach((child) => fragment.appendChild(renderNode(child, childCtx)));
      });
      return fragment;
    }
    if (tag === 'sc-if') {
      const valueExpr = (node.getAttribute('value') || '').replace(/[{}]/g, '').trim();
      const fragment = document.createDocumentFragment();
      if (getPath(ctx, valueExpr)) {
        Array.from(node.childNodes).forEach((child) => fragment.appendChild(renderNode(child, ctx)));
      }
      return fragment;
    }

    const el = document.createElement(node.tagName);
    Array.from(node.attributes).forEach((attr) => {
      const name = attr.name;
      const raw = attr.value;
      if (name === 'dangerouslysetinnerhtml') return;
      if (/^on[A-Z]/.test(name) || /^on[a-z]/.test(name)) {
        const expr = raw.replace(/[{}]/g, '').trim();
        const fn = getPath(ctx, expr);
        if (typeof fn === 'function') el.addEventListener(name.slice(2).toLowerCase(), fn);
        return;
      }
      if (name.startsWith('style-')) return;
      el.setAttribute(name, interpolate(raw, ctx));
    });

    const htmlAttr = node.getAttribute('dangerouslySetInnerHTML') || node.getAttribute('dangerouslysetinnerhtml');
    if (htmlAttr) {
      const expr = htmlAttr.replace(/[{}]/g, '').trim();
      const html = getPath(ctx, expr);
      el.innerHTML = (html && typeof html === 'object' && '__html' in html) ? (html.__html || '') : (html || '');
    } else {
      Array.from(node.childNodes).forEach((child) => el.appendChild(renderNode(child, ctx)));
    }
    return el;
  }

  function moveHelmet() {
    const helmet = document.querySelector('helmet');
    if (!helmet) return;
    Array.from(helmet.childNodes).forEach((child) => document.head.appendChild(child.cloneNode(true)));
    helmet.remove();
  }

  function readProps(script) {
    try {
      const schema = JSON.parse(script.getAttribute('data-props') || '{}');
      const props = {};
      Object.entries(schema).forEach(([key, value]) => {
        if (key !== '$preview' && value && typeof value === 'object' && 'default' in value) props[key] = value.default;
      });
      return props;
    } catch { return {}; }
  }

  function boot() {
    moveHelmet();
    const root = document.querySelector('x-dc');
    const script = document.querySelector('script[data-dc-script]');
    if (!root || !script) return;
    const template = document.createElement('template');
    template.innerHTML = root.innerHTML;
    try {
      const Component = new Function('DCLogic', `${script.textContent}\nreturn Component;`)(DCLogic);
      const instance = new Component(readProps(script));
      const mount = document.createElement('div');
      mount.id = 'carentix-site';
      root.replaceWith(mount);
      let hasRendered = false;
      const render = () => {
        const vals = instance.renderVals ? instance.renderVals() : {};
        const ctx = { ...instance.props, ...vals };
        mount.replaceChildren(renderNode(template.content, ctx));
        // Every setState rebuilds the whole subtree, which detaches the
        // scroll-reveal machinery's captured node references. Freshly built
        // [data-reveal] nodes keep their initial opacity:0 and would never
        // re-reveal, blanking the page after the first setState. On re-renders
        // reveal them synchronously so content can never be lost.
        if (hasRendered) {
          mount.querySelectorAll('[data-reveal]').forEach((el) => {
            el.classList.add('cx-seen');
            el.style.transform = 'none';
          });
        }
        hasRendered = true;
        if (instance.componentDidMount && !instance.__mounted) {
          instance.__mounted = true;
          setTimeout(() => instance.componentDidMount(), 0);
        }
      };
      instance.__rerender = render;
      render();
    } catch (error) {
      console.error('Carentix page runtime error:', error);
      root.innerHTML = '<main style="font-family:system-ui;padding:3rem"><h1>Carentix</h1><p>This page could not be loaded.</p></main>';
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
