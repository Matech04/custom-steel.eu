

import { home } from "./singleton/home";

import { localizedString } from "./lib/localizedString";
import { imageWithAlt } from "./lib/ImageWithAlt";
import { localizedText } from "./lib/localizedText";
import { seoMeta } from "./lib/seoMeta"

import { articles } from "./documents/articles";
import { project_categories } from "./documents/project_categories";
import { projects } from "./documents/projects";

import { projects_site } from "./singleton/projects_site";
import { articles_site } from "./singleton/articles_site";
import { offer } from "./singleton/offer";
import { contact } from "./singleton/contact";
import { navigation } from "./singleton/navigation";

export const schemaTypes = [

  home,

  localizedString,
  imageWithAlt,
  localizedText,
  seoMeta,

  articles,
  project_categories,
  projects,

  projects_site,
  articles_site,
  offer,
  contact,
  navigation
]
