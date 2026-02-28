import { defineType } from 'sanity';

export const imageWithAlt = defineType({
  name: 'imageWithAlt',
  title: 'Zdjęcie z opisem SEO',
  type: 'image',
  fields: [
    {
      name: 'alts',
      title: 'Opisy zdjęcia dla optymalizacji wyszukiwania',
      type: 'localizedText'
    }
  ]

});