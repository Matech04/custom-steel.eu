import { defineType } from 'sanity';

export const offer = defineType({
  name: 'offer',
  title: 'Oferta',
  type: 'document',
  options: {
    singleton: true
  },
  preview: {
    select: {
      title: 'title.pl', // Pobierze polski tytuł z Twojego obiektu SEO
    },
    prepare({ title }) {
      return {
        title: title || "Brak Nagłówka"
      };
    },
  },
  fields: [
    {
      name: 'title',
      title: 'Nagłówek',
      type: 'localizedString'
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'localizedText'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'localizedString'
    },
    {
      name: 'richText',
      title: 'Dowolna dodatkowa treść strony',
      type: 'object',
      fields: [
        {
          name: 'pl',
          title: 'Polski',
          type: 'array',
          of: [
            { type: 'block' }, { type: 'imageWithAlt' }
          ]
        },
        {
          name: 'en',
          title: 'Angielski',
          type: 'array',
          of: [
            { type: 'block' }, { type: 'imageWithAlt' }
          ]
        },
        {
          name: 'de',
          title: 'Niemiecki',
          type: 'array',
          of: [
            { type: 'block' }, { type: 'imageWithAlt' }
          ]
        }
      ]
    },
    {
      name: "seoMeta",
      title: 'Tekst używany przez wyszukiwarki do pozycjonowania strony',
      type: 'seoMeta',
    },
  ]
})