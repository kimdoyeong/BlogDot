import React from "react";
import ReactDOMServer from "react-dom/server";
import * as path from "path";
import { StaticRouter } from "react-router";
import { ChunkExtractor } from "@loadable/server";
const statsFile = path.resolve("./server/build/loadable-stats.json");
const extractor = new ChunkExtractor({ statsFile });

import App from "./App";

const render = req => {
  const { url } = req;
  const jsx = extractor.collectChunks(<App />);
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={url}>{jsx}</StaticRouter>
  );
  return html;
};

export default render;
