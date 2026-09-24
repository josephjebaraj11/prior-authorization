import { redirect } from "react-router";

/**
 * `/solutions` was renamed to `/prior-authorization-software`, which is what
 * people actually search for. A permanent redirect preserves any links and
 * ranking signals the old path picked up.
 */
export function loader() {
  throw redirect("/prior-authorization-software", 301);
}

// A redirect route renders nothing; the loader always throws first.
export default function SolutionsRedirect() {
  return null;
}
