import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider, HelmetServerState } from 'react-helmet-async';
import { AppRoutes } from './App';
import './i18n';

export interface RenderResult {
  appHtml: string;
  head: string;
}

/**
 * Render a single route to static HTML for build-time pre-rendering.
 * Returns the app markup plus the <head> tags collected by react-helmet-async.
 */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const appHtml = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join('\n    ')
    : '';

  return { appHtml, head };
}
