import { defineConfig } from 'sanity'
import { singletonTools } from "sanity-plugin-singleton-management";
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure';
import { languageFilter } from '@sanity/language-filter'
import { iconPicker } from 'sanity-plugin-icon-picker';
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";

export default defineConfig({
  name: 'default',
  title: 'Custom-Steel',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    singletonTools(),
    iconPicker(),
    structureTool({
      structure: structure
    }),
    languageFilter({
      supportedLanguages: [
        { id: 'pl', title: 'Polski' },
        { id: 'en', title: 'Angielski' },
        { id: 'de', title: 'Niemiecki' },
      ],
      documentTypes: ['home', 'projects', 'projects_site', 'subcategory', 'category', 'navigation', 'contact', 'offer', 'articles_site', 'articles', 'project_categories'],
      filterField: (enclosingType, member, selectedLanguageIds, parentValue) =>
        !enclosingType.name.startsWith('localized') || selectedLanguageIds.includes(member.name),
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: 'Wdrożenia',
          sites: [
            {
              title: 'Strona Produkcyjna',
              apiId: process.env.SANITY_STUDIO_NETLIFY_API_ID || '', // wklej skopiowany ID API
              buildHookId: process.env.SANITY_STUDIO_NETLIFY_BUILD_HOOK_ID || '', // wklej ID webhooka
              name: 'custom-steel', // nazwa z Netlify
            },
          ]
        })
      ]
    })
  ],

  schema: {
    types: schemaTypes,
  },
})