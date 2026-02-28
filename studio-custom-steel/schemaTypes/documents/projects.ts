import { defineType } from 'sanity';

export const projects = defineType(
  {
    name: 'projects',
    title: "Projekty",
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
        name: "seoMeta",
        title: 'Tekst używany przez wyszukiwarki do pozycjonowania strony',
        type: 'seoMeta',
      },
      {
        name: 'slug',
        title: 'Adres na stronie (slug)',
        type: "localizedString",
      },
      {
        name: 'category',
        title: 'Kategoria',
        type: "reference",
        to: [{ type: 'project_categories' }], // Pozwala wybrać jedną z utworzonych podkategorii
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
        name: 'gallery',
        title: 'Zdjęcia',
        type: 'array',
        options:
        {
          layout: 'grid'
        },
        of: [
          {
            type: 'imageWithAlt',
            validation: (Rule) => Rule.required().error('Musisz wgrać plik obrazka! Puste kafelki są niedozwolone.'),
          }
        ],
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

    ]
  }
);

