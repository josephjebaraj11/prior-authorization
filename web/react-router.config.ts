import type { Config } from "@react-router/dev/config";

export default {
  // Server-rendered: every route returns complete HTML on the first request,
  // and each page is served at exactly the URL its canonical tag and internal
  // links point at — no trailing-slash redirects.
  //
  // To ship these pages as static files instead, add:
  //   prerender: ["/", "/solutions", "/about", "/contact", "/privacy", "/hipaa"]
  // and make sure your host serves them without appending a trailing slash.
  ssr: true,
} satisfies Config;
