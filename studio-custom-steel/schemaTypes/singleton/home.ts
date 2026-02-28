// schema/singletonType.js/ts
import { defineType } from 'sanity';

export const home = defineType({
  name: 'home',
  title: 'Strona Główna',
  type: 'document',

  preview: {
    select: {
      title: 'seo.title.pl', // Pobierze polski tytuł z Twojego obiektu SEO
    },
    prepare({ title }) {
      return {
        title: title || 'Strona Główna',
        subtitle: 'Ustawienia treści dla custom-steel.eu',
      };
    },
  },

  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'baner', title: 'Baner' },
    { name: 'cards', title: "Karty" },
    { name: 'about', title: 'O nas' },
    { name: 'projects', title: 'Projekty' },



  ],
  options: {
    singleton: true,
  },
  fields: [
    //Meta
    {
      name: "seoMeta",
      title: 'Tekst używany przez wyszukiwarki do pozycjonowania strony',
      type: 'seoMeta',
      group: "seo"
    },
    //Baner
    {
      name: 'baner',
      title: 'Baner',
      type: 'object',
      group: 'baner',

      fields: [
        {
          name: 'heroImageMobile',
          title: 'Zdjęcie Główne na Telefony',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'heroImageTablet',
          title: 'Zdjęcie Główne na Tablety',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'heroImageDesktop',
          title: 'Zdjęcie Główne na Komputery',
          type: 'image',
          options: {
            hotspot: true,
          },
        },

        {
          name: 'title_1',
          title: 'Część pierwsza nagłówka',
          type: 'localizedString'
        },
        {
          name: 'title_2',
          title: 'Część druga nagłówka',
          type: 'localizedString'
        },

        {
          name: 'description_1',
          title: 'Część pierwsza opisu',
          type: 'localizedText'
        },
        {
          name: 'description_2',
          title: 'Część druga opisu',
          type: 'localizedText'
        },

        {
          name: 'button',
          title: 'Przycisk',
          type: 'localizedString'
        },
        {
          name: 'button_icon',
          title: 'Ikona przycisku',
          type: 'iconPicker',
          options: {
            providers: ["f7"],

          }
        }
      ]
    },
    //Karty
    {
      name: 'cards',
      title: 'Karty',
      group: 'cards',
      type: 'object',
      fields: [
        {
          name: 'card_1',
          title: "Karta Pierwsza",
          type: 'localizedText'
        },
        {
          name: 'card_1_icon',
          title: 'Ikona',
          type: 'iconPicker',
          options: {
            providers: ["f7"],

          }
        },
        {
          name: 'card_2',
          title: "Karta Druga",
          type: 'localizedText'
        },
        {
          name: 'card_2_icon',
          title: 'Ikona',
          type: 'iconPicker',
          options: {
            providers: ["f7"],

          }
        },
        {
          name: 'card_3',
          title: "Karta Trzecia",
          type: 'localizedText'
        },
        {
          name: 'card_3_icon',
          title: 'Ikona',
          type: 'iconPicker',
          options: {
            providers: ["f7"],


          }
        },
      ]
    },
    //O nas
    {
      name: 'about',
      title: 'O nas',
      type: 'object',
      group: 'about',
      fields: [
        {
          name: 'title',
          title: 'Nagłówek',
          type: 'localizedString'
        },
        {
          name: 'text',
          title: 'Opis',
          type: 'localizedText'
        },
      ]
    },
    //Projekty
    {
      name: 'projects',
      title: 'Projekty',
      type: 'object',
      group: 'projects',
      fields: [
        {
          name: 'title',
          title: 'Nagłówek',
          type: 'localizedString'
        },
        {
          name: 'images',
          title: 'Zdjęcia Pokazowe',
          description: 'Muszą być dokładnie 4 zdjęcia',
          type: 'array',
          validation: (Rule) => Rule.length(4).error('Musisz wgrać dokładnie 4 zdjęcia pokazowe'),
          options: {
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
          name: 'button',
          title: 'Przycisk',
          type: 'localizedString'
        },
        {
          name: 'button_icon',
          title: 'Ikona Przycisku',
          type: 'iconPicker',
          options: {
            providers: ["f7"],


          }
        },

      ]
    },
  ],
});