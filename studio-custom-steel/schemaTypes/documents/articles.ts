import { defineType } from 'sanity';

export const articles = defineType(
  {
    name: 'articles',
    title: "Artykuły",
    type: 'document',
    preview: {
      select: {
        plTitle: 'title.pl', // Wybieramy polską wartość z obiektu localizedString
      },
      prepare(selection) {
        const { plTitle } = selection;
        return {
          title: plTitle || 'Brak nazwy PL', // To wyświetli się w wyszukiwarce i na liście
        };
      },
    },
    fields: [

      {
        name: 'slug',
        title: 'Adres na stronie (slug)',
        type: "localizedString",
      },
      {
        name: 'image',
        title: 'Zdjęcie Główne',
        type: 'imageWithAlt'
      },
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
        name: 'richText',
        title: 'Dowolna treść strony',
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
  }
);

