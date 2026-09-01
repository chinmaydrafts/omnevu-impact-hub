import { useCallback, useEffect, useState } from "react";

export interface BookmarkRecord {
  id: string;
  number: string;
  title: string;
  context: string;
  route: string;
  savedAt: string;
}

const KEY = "omnevu-brsr-bookmarks";
const EVENT = "omnevu-bookmarks-change";

const read = (): BookmarkRecord[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as BookmarkRecord[]) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const write = (items: BookmarkRecord[]) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(KEY, JSON.stringify(items));
  window.dispatchEvent(new CustomEvent(EVENT));
};

/** Saved-disclosure store backed by localStorage, synced across components and tabs. */
export function useBookmarks() {
  const [items, setItems] = useState<BookmarkRecord[]>([]);

  useEffect(() => {
    const sync = () => setItems(read());
    sync();
    window.addEventListener(EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const toggle = useCallback((record: Omit<BookmarkRecord, "savedAt">) => {
    const current = read();
    const exists = current.some((b) => b.id === record.id);
    write(
      exists
        ? current.filter((b) => b.id !== record.id)
        : [...current, { ...record, savedAt: new Date().toISOString() }],
    );
  }, []);

  const remove = useCallback((id: string) => {
    write(read().filter((b) => b.id !== id));
  }, []);

  const clear = useCallback(() => write([]), []);

  const has = useCallback((id: string) => items.some((b) => b.id === id), [items]);

  return { items, toggle, remove, clear, has };
}
