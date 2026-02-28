import { defineType } from 'sanity';

export const articles_site = defineType({
  name: 'articles_site',
  title: 'Strona Artykułów',
  type: 'document',
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
  options: {
    singleton: true
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
  ]
})