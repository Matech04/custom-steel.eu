import { readdirSync } from "fs";
import { join } from "path";

export async function getTranslations(){
  const localesDir = join(process.cwd(), "src", "content", "home");
  let supportedLanguages:Array<string> = [];
  try {
  supportedLanguages = readdirSync(localesDir, {withFileTypes: true})
  .filter((ent_dir) => ent_dir.isFile() && ent_dir.name.endsWith(".md"))
  .map((ent_dir) => (ent_dir.name.replace('.md', "")));
  } catch (error){
    console.error(`Error while reading translations from:  ${localesDir}`, error);
    return [];
  }
  return supportedLanguages.map((lang) => ({
    params: { lang },
  }));
}