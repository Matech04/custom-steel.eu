// structure.js
import {
  singletonDocumentListItem,
  singletonDocumentListItems,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-management";
import { HomeIcon, MenuIcon, ProjectsIcon, DocumentIcon, BillIcon, UserIcon } from "@sanity/icons";

export const structure = (S, context) =>
  S.list()
    .title("Panel Zarządzania")
    .items([
      // Create a list item for a specific singleton
      singletonDocumentListItem({
        S,
        context,
        // Schema type
        type: "home",
        // Required for showing multiple singletons of the same schema type
        title: "Strona Główna",
        // Required for showing multiple singletons of the same schema type
        id: "home",
        // Specify a custom icon
        icon: HomeIcon,
      }),
      S.divider(),
      singletonDocumentListItem({
        S,
        context,
        type: 'projects_site',
        title: 'Strona z Projektami',
        id: 'projects_site',
        icon: ProjectsIcon
      }),
      S.divider(),

      singletonDocumentListItem({
        S,
        context,
        type: 'articles_site',
        title: 'Strona z Artykułami',
        id: 'articles_site',
        icon: DocumentIcon
      }),
      S.divider(),
      singletonDocumentListItem({
        S,
        context,
        type: 'offer',
        title: 'Oferta',
        id: 'offer',
        icon: BillIcon
      }),
      S.divider(),
      singletonDocumentListItem({
        S,
        context,
        type: 'contact',
        title: 'Kontakt',
        id: 'contact',
        icon: UserIcon
      }),
      S.divider(),

      singletonDocumentListItem({
        S,
        context,
        type: 'navigation',
        title: 'Menu',
        id: 'navigation',
        icon: MenuIcon
      }),
      S.divider(),
      // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
      ...filteredDocumentListItems({ S, context }),
    ]);