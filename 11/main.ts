function converterParaURL(text: string) {
  const urlLimpa = text.trim().toLowerCase() 
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "").replace(/\s+/g, "-")
    .replace(/-+/g, "-").replace(/^-+|-+$/g, "");

  return `https://${urlLimpa}/`
}

console.log(converterParaURL("Café ?? MelhoR que têm ."))