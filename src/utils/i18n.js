import path from 'path';
import fs from 'fs/promises';

let translation = null;
const supportedLangs = ["pl", "en", "de"];
const fallbackLang = "pl"; //Fallback language

export async function loadTranslations(lang){
  try{
    const language = supportedLangs.includes(lang) ? lang : fallbackLang; 
    const trans_path = path.join(process.cwd(), 'public' , 'locales', language, 'translation.json');
    translation = JSON.parse(await fs.readFile(trans_path, 'utf-8'));
    if (typeof translation !== 'object' || translation === null){
      throw new Error("Invalid translation file structure")
    }
    return translation;
  }
  catch(error){
    console.log("Error while loading translations: ", error.message);
    const trans_path = path.join(process.cwd(), 'public' , 'locales', fallbackLang , 'translation.json');
    translation = JSON.parse(await fs.readFile(trans_path, 'utf-8'));
    if (typeof translation !== 'object' || translation === null){
      throw new Error("Invalid translation file structure")
    }
    return translation;
  }
}

export function t(key){
  if(!translation){
   throw new Error("Error while loading translations");
  }

  if(typeof key !== 'string' || key === ""){
    console.warn(`Invalid translation key ${key}`)
    return key || "";
  }
  const keys = key.split(".");
  let result = translation;

  for (const k of keys){
    result = result[k]
    if (result === undefined){
      console.warn(`Translation key ${key} not found `)
      return key;
    }
  }
  return result;

}