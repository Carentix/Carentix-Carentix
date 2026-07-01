import type { CSSProperties, ReactNode } from "react";

/**
 * The approved design used <image-slot> elements whose raster assets are not
 * present in the editor export. This renders a styled, accessible placeholder
 * in their place. Drop a real image in (e.g. next/image) when assets arrive.
 */
export default function ImageSlot({
  label = "Image",
  style,
  className,
  children,
  radius = 16,
}: {
  label?: string;
  style?: CSSProperties;
  className?: string;
  children?: ReactNode;
  radius?: number;
}) {
  return (
    <div
      className={`cx-image-slot ${className ?? ""}`}
      role="img"
      aria-label={label}
      style={{ borderRadius: radius, minHeight: 120, ...style }}
    >
      {children ?? label}
    </div>
  );
}
