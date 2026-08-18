import { useState, type CSSProperties } from "react";
import { IMAGE_GRADE, imageRegistry, imageSrcSet, imageUrl, type ImageKey } from "@/data/imageRegistry";

/**
 * Single entry point for every photograph on the site. Guarantees alt text,
 * object-fit/position, a local gradient fallback, a consistent colour grade and
 * an explicit aspect ratio so images never cause layout shift.
 */
export function EditorialImage({
  image,
  className = "",
  imgClassName = "",
  ratio,
  sizes = "100vw",
  priority = false,
  decorative = false,
  overlay,
  children,
}: {
  image: ImageKey;
  className?: string;
  imgClassName?: string;
  /** CSS aspect-ratio, e.g. "16 / 9". Omit when the parent sets a fixed height. */
  ratio?: string;
  sizes?: string;
  /** Hero images only: eager + high priority, everything else lazy-loads. */
  priority?: boolean;
  decorative?: boolean;
  /** Optional overlay element rendered above the photograph. */
  overlay?: React.ReactNode;
  children?: React.ReactNode;
}) {
  const meta = imageRegistry[image];
  const [failed, setFailed] = useState(false);

  const style: CSSProperties = {
    background: meta.fallback,
    ...(ratio ? { aspectRatio: ratio } : null),
  };

  return (
    <div className={`editorial-image relative overflow-hidden ${className}`} style={style}>
      {failed ? null : (
        <img
          src={imageUrl(image, priority ? 1600 : 1200)}
          srcSet={imageSrcSet(image)}
          sizes={sizes}
          alt={decorative ? "" : meta.alt}
          aria-hidden={decorative || undefined}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          onError={() => setFailed(true)}
          className={`absolute inset-0 size-full object-cover ${imgClassName}`}
          style={{ objectPosition: meta.focal, filter: IMAGE_GRADE }}
        />
      )}
      {overlay}
      {children}
    </div>
  );
}
