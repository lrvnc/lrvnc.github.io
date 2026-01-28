import React from "react";
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default function SEO({ title, description, imageUrl }: SEOProps) {
  const origin =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://example.com";
  const canonical =
    origin + (typeof window !== "undefined" ? window.location.pathname : "/");
  const img = imageUrl
    ? imageUrl.startsWith("http")
      ? imageUrl
      : origin + imageUrl
    : undefined;
  const pageTitle = title ? `${title}` : undefined;

  return (
    <Helmet>
      {pageTitle && <title>{pageTitle}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="canonical" href={canonical} />

      {/* OpenGraph */}
      {pageTitle && <meta property="og:title" content={pageTitle} />}
      {description && <meta property="og:description" content={description} />}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      {img && <meta property="og:image" content={img} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {pageTitle && <meta name="twitter:title" content={pageTitle} />}
      {description && <meta name="twitter:description" content={description} />}
      {img && <meta name="twitter:image" content={img} />}
    </Helmet>
  );
}
