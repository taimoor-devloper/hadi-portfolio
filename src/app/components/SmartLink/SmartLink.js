import React from "react";
import Link from "next/link";

// Section links ("/#portfolio") are plain anchors: the browser scrolls within the page without a
// client-side router fetch. On Netlify that fetch comes back as HTML and forces a full reload.
export default function SmartLink({ href, children, ...props }) {
  if (href.startsWith("/#")) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
