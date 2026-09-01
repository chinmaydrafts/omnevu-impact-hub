import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light reading mode" : "Switch to dark reading mode"}
      title={isDark ? "Light reading mode" : "Dark reading mode"}
      className="no-print grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
    >
      {isDark ? <Sun aria-hidden="true" className="size-4" /> : <Moon aria-hidden="true" className="size-4" />}
    </button>
  );
}
