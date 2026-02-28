import { defineType } from 'sanity';

export const projects_site = defineType({
  name: 'projects_site',
  title: 'Strona projektów',
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
  ]
})