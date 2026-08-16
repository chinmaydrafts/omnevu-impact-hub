interface Props {
  size?: number;
  withWordmark?: boolean;
  className?: string;
}

/** Compact geometric OV mark. Uses currentColor with restrained brand accents. */
export function OmneVuLogo({ size = 28, withWordmark = true, className }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        role="img"
        aria-label="OmneVu"
        className="shrink-0"
      >
        <rect x="1.25" y="1.25" width="29.5" height="29.5" rx="8" fill="none" stroke="currentColor" strokeOpacity="0.35" strokeWidth="1.5" />
        <circle cx="12.5" cy="14" r="6.25" fill="none" stroke="currentColor" strokeWidth="2.5" />
        <path d="M17.5 10.5 L22.25 22.5 L27 10.5" fill="none" stroke="var(--color-orange)" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter" />
        <path d="M6 24.5 h9" stroke="var(--color-green)" strokeWidth="2.5" strokeLinecap="square" />
      </svg>
      {withWordmark ? (
        <span className="font-display text-[1.05rem] font-bold leading-none tracking-tight">
          OmneVu
        </span>
      ) : null}
    </span>
  );
}
