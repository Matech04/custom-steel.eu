import { defineType } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'Kontakt',
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
  fields:
    [
      {
        name: 'title_1',
        title: 'Tytuł 1',
        type: 'localizedString',
      },
      {
        name: 'title_2',
        title: 'Tytuł 2',
        type: 'localizedString',
      },
      {
        name: 'description',
        title: 'Opis',
        type: 'localizedText',
      },
      {
        name: 'name',
        title: 'Imię / Nazwa',
        type: 'localizedString',
      },
      {
        name: 'email',
        title: 'E-mail',
        type: 'localizedString',
      },
      {
        name: 'phone',
        title: 'Telefon',
        type: 'localizedString',
      },
      {
        name: 'button_text',
        title: 'Tekst przycisku',
        type: 'localizedString',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'localizedString'
      },
      {
        name: 'seoMeta',
        title: 'Dane Seo',
        type: 'seoMeta'
      }
    ],
});

