import { useEffect } from "react";

interface DocumentMeta {
  title: string;
  description: string;
  noIndex?: boolean;
}

function setMetaTag(name: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

/**
 * Sets a per-route <title>/meta description/canonical. The site is a client-only
 * SPA with a single static index.html, so without this every route would share
 * the same title/description — a duplicate-content SEO issue.
 */
export function useDocumentMeta({ title, description, noIndex }: DocumentMeta) {
  useEffect(() => {
    document.title = title;
    setMetaTag("description", description);
    setCanonical(window.location.origin + window.location.pathname);
    if (noIndex) {
      setMetaTag("robots", "noindex, nofollow");
    }
  }, [title, description, noIndex]);
}
