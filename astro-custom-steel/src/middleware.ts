export const onRequest = async ({ request, redirect }, next) => {
  const url = new URL(request.url);

  if (url.pathname === "/") {
    const cookieHeader = request.headers.get("cookie") || "";

    // Sprawdzamy czy istnieje ciastko nf_lang
    const match = cookieHeader.match(/nf_lang=([a-z]{2})/);
    const savedLang = match ? match[1] : null;

    // 1. Jeśli jest ciastko - słuchamy go priorytetowo
    if (savedLang) {
      if (savedLang === "pl") return redirect("/pl/", 302);
      if (savedLang === "de") return redirect("/de/", 302);
      return next(); // Dla "en" zostajemy na głównej
    }

    // 2. Jeśli nie ma ciastka - sprawdzamy język przeglądarki
    const acceptLanguage = request.headers.get("accept-language") || "";
    if (acceptLanguage.startsWith("pl")) return redirect("/pl/", 302);
    if (acceptLanguage.startsWith("de")) return redirect("/de/", 302);
  }

  return next();
};