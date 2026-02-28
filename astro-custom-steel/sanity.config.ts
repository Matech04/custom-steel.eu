import { defineConfig } from 'sanity'
import { singletonTools } from "sanity-plugin-singleton-management";
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '../studio-custom-steel/schemaTypes'
import { structure } from '../studio-custom-steel/structure';
import { languageFilter } from '@sanity/language-filter'
import { iconPicker } from 'sanity-plugin-icon-picker';

// Sanity używa process.env do czytania z plików .env podczas budowania
const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET;

export default defineConfig({
  name: 'default',
  title: 'Custom-Steel',

  projectId: projectId,
  dataset: dataset,

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