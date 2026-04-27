import { ui, defaultLang, type Lang, type UIKey } from "./ui";

export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split("/");
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/**
 * Build the equivalent path in the target locale.
 * "/" + es -> "/" / "/" + en -> "/en/"
 * "/en/" + es -> "/" / "/en/" + en -> "/en/"
 */
export function getLocalizedPath(currentPath: string, targetLang: Lang): string {
  const stripped = currentPath.replace(/^\/(en|es)\/?/, "/");
  if (targetLang === defaultLang) return stripped || "/";
  return `/${targetLang}${stripped === "/" ? "/" : stripped}`;
}

export function getOtherLang(lang: Lang): Lang {
  return lang === "es" ? "en" : "es";
}
