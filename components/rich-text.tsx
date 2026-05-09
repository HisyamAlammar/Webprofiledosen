"use client";

import { PortableText, type PortableTextComponents } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

/**
 * Custom component map for Sanity Portable Text.
 * Tailored for academic content — clean typography, proper link styling,
 * and support for common block elements a lecturer would use.
 */
const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="font-heading text-2xl font-bold text-primary mt-8 mb-4 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-heading text-xl font-semibold text-primary mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="font-heading text-lg font-semibold text-primary mt-4 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-muted-foreground leading-relaxed mb-4 last:mb-0">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-emerald-500/40 pl-4 py-1 my-4 italic text-muted-foreground/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-outside ml-6 mb-4 space-y-1.5 text-muted-foreground marker:text-emerald-500">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-outside ml-6 mb-4 space-y-1.5 text-muted-foreground marker:text-emerald-600">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => (
      <span className="underline underline-offset-2 decoration-emerald-500/50">
        {children}
      </span>
    ),
    code: ({ children }) => (
      <code className="bg-secondary/60 text-sm px-1.5 py-0.5 rounded font-mono text-foreground">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          className="text-emerald-700 dark:text-emerald-400 underline underline-offset-2 decoration-emerald-500/30 hover:decoration-emerald-500 transition-colors"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    },
  },
};

interface RichTextProps {
  /** Portable Text value from Sanity (array of block objects) */
  value: PortableTextBlock[] | undefined | null;
  /** Additional CSS classes for the wrapper div */
  className?: string;
}

/**
 * RichText — Portable Text renderer for Sanity CMS content.
 *
 * Usage (when Sanity integration is live):
 * ```tsx
 * import { RichText } from "@/components/rich-text";
 * <RichText value={material.description} />
 * ```
 *
 * For now, this component is stand-alone and not yet
 * connected to any page. It will be integrated once
 * the frontend migrates from dummyData to Sanity fetch.
 */
export function RichText({ value, className = "" }: RichTextProps) {
  if (!value || value.length === 0) return null;

  return (
    <div
      className={`prose prose-emerald dark:prose-invert max-w-none
        prose-headings:font-heading
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-a:text-emerald-700 dark:prose-a:text-emerald-400
        prose-strong:text-foreground
        prose-blockquote:border-emerald-500/40
        prose-li:text-muted-foreground
        prose-li:marker:text-emerald-500
        ${className}`}
    >
      <PortableText value={value} components={components} />
    </div>
  );
}
