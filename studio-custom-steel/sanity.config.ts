import { defineConfig } from 'sanity'
import { singletonTools } from "sanity-plugin-singleton-management";
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure';
import { languageFilter } from '@sanity/language-filter'
import { iconPicker } from 'sanity-plugin-icon-picker';
import { loadEnv } from "vite";

export default defineConfig({
  name: 'default',
  title: 'Custom-Steel',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',

  plugins: [
    singletonTools(),
    visionTool(),
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
      documentTypes: ['home', 'projects', 'subcategory', 'category', 'navigation'],
      filterField: (enclosingType, member, selectedLanguageIds, parentValue) =>
        !enclosingType.name.startsWith('localized') || selectedLanguageIds.includes(member.name),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})