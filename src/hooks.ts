import type { Handle } from "@sveltejs/kit";
import { minify } from "html-minifier";
import { prerendering } from "$app/env";

const minification_options = {
  collapseBooleanAttributes: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  decodeEntities: true,
  html5: true,
  ignoreCustomComments: [/^#/],
  minifyCSS: true,
  minifyJS: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  sortAttributes: true,
  sortClassName: true,
};

export const handle: Handle = async ({ request, resolve }) => {
  // TODO https://github.com/sveltejs/kit/issues/1046
  if (request.query.has("_method")) {
    request.method = request.query.get("_method").toUpperCase();
  }

  const response = await resolve(request);

  if (prerendering && response.headers["content-type"] === "text/html") {
    response.body = minify(response.body, minification_options);
  }

  return response;
};
