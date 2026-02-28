import { defineType } from 'sanity';

export const seoMeta = defineType({
  name: 'seoMeta',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Nagłówek strony',
      type: 'localizedString',
    },
    {
      name: 'description',
      title: "Opis strony",
      type: 'localizedText'
    }
  ]
});