import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        /** Primary CTA — gold, used sparingly. */
        gold: "bg-gold text-navy shadow-[0_8px_26px_rgba(254,197,57,0.26)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(254,197,57,0.4)]",
        /** Solid navy button. */
        navy: "bg-navy text-paper hover:-translate-y-0.5 hover:bg-navy-deep hover:shadow-[0_16px_40px_rgba(12,30,60,0.28)]",
        /** Outline on light backgrounds. */
        outline:
          "border border-navy/20 bg-transparent text-navy hover:-translate-y-0.5 hover:border-navy/40",
        /** Ghost on dark/photo backgrounds. */
        ghost:
          "border border-paper/30 bg-transparent text-paper hover:-translate-y-0.5 hover:bg-paper/10",
        /** Text link with animated underline (use asChild with an <a>/<Link>). */
        link: "link-underline rounded-none p-0 text-navy",
      },
      size: {
        default: "px-7 py-4 text-base",
        sm: "px-5 py-3 text-sm",
        lg: "px-8 py-[18px] text-[16.5px]",
        icon: "h-11 w-11 rounded-xl p-0",
      },
    },
    defaultVariants: {
      variant: "gold",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
