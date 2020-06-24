/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from "./src/lib/constants"

const MagicScriptTag = () => {
  const codeToRunOnClient = `
(function() {
  function getInitialColorMode() {
    const persistedColorPreference = window.localStorage.getItem("${COLOR_MODE_KEY}")
    const hasPersistedPreference = typeof persistedColorPreference === "string"
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference
    }
    // If they haven't been explicit, let's check the media query
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const hasMediaQueryPreference = typeof mql.matches === "boolean"
    if (hasMediaQueryPreference) {
      return mql.matches ? "dark" : "light"
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return "light"
  }
  const colorMode = getInitialColorMode();
  const root = document.documentElement;
  root.style.setProperty(
    '--text',
    colorMode === 'light'
      ? '${COLORS.text.light}'
      : '${COLORS.text.dark}'
  );
  root.style.setProperty(
    '--textContrast',
    colorMode === 'light'
      ? '${COLORS.textContrast.light}'
      : '${COLORS.textContrast.dark}'
  );
  root.style.setProperty(
    '--backgroundContrast',
    colorMode === 'light'
      ? '${COLORS.backgroundContrast.light}'
      : '${COLORS.backgroundContrast.dark}'
  );
  root.style.setProperty(
    '--background',
    colorMode === 'light'
      ? '${COLORS.background.light}'
      : '${COLORS.background.dark}'
  );
  root.style.setProperty(
    '--primary',
    colorMode === 'light'
      ? '${COLORS.primary.light}'
      : '${COLORS.primary.dark}'
  );
  root.style.setProperty(
    '--secondary',
    colorMode === 'light'
      ? '${COLORS.secondary.light}'
      : '${COLORS.secondary.dark}'
  );
  root.style.setProperty(
    '--layoutBorder',
    colorMode === 'light'
      ? '${COLORS.layoutBorder.light}'
      : '${COLORS.layoutBorder.dark}'
  );
  root.style.setProperty('${INITIAL_COLOR_MODE_CSS_PROP}', colorMode);
})()
  `
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />
}
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(<MagicScriptTag />)
}
