import {
  createRootRoute,
  createRoute,
  createRouter,
  Outlet,
} from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SkipLink } from "@/components/shared/SkipLink";
import { CookieBanner } from "@/components/shared/CookieBanner";

import { HomePage } from "@/pages/HomePage";
import { CompliancePage } from "@/pages/CompliancePage";
import { CareersPage } from "@/pages/CareersPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { BaaPage } from "@/pages/BaaPage";
import { AccessibilityPage } from "@/pages/AccessibilityPage";

/** Root layout — sticky header, routed page, footer. */
const rootRoute = createRootRoute({
  component: () => (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <SkipLink />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <CookieBanner />
    </div>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const complianceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/compliance",
  component: CompliancePage,
});

const careersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/careers",
  component: CareersPage,
});

const privacyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/privacy",
  component: PrivacyPage,
});

const termsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/terms",
  component: TermsPage,
});

const baaRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/baa",
  component: BaaPage,
});

const accessibilityRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/accessibility",
  component: AccessibilityPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  complianceRoute,
  careersRoute,
  privacyRoute,
  termsRoute,
  baaRoute,
  accessibilityRoute,
]);

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

// To enable fully type-safe routes (autocompletion + param checking on <Link to>),
// uncomment the augmentation below. It's left off so data-driven nav/footer link
// arrays compile without casting.
//
// declare module "@tanstack/react-router" {
//   interface Register {
//     router: typeof router;
//   }
// }
