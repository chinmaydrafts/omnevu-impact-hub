import { Bookmark, BookmarkCheck } from "lucide-react";
import { useBookmarks } from "@/lib/bookmarks";

export function BookmarkButton({
  id,
  number,
  title,
  context,
  route,
}: {
  id: string;
  number: string;
  title: string;
  context: string;
  route: string;
}) {
  const { has, toggle } = useBookmarks();
  const saved = has(id);

  return (
    <button
      type="button"
      onClick={() => toggle({ id, number, title, context, route })}
      aria-pressed={saved}
      aria-label={saved ? `Remove disclosure ${number} from saved list` : `Save disclosure ${number} for later`}
      title={saved ? "Saved — click to remove" : "Save for later"}
      className={`no-print mt-1 shrink-0 rounded-md border p-2 transition-colors ${
        saved
          ? "border-primary bg-tint-blue text-primary"
          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
      }`}
    >
      {saved ? (
        <BookmarkCheck aria-hidden="true" className="size-4" />
      ) : (
        <Bookmark aria-hidden="true" className="size-4" />
      )}
    </button>
  );
}
