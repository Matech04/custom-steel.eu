import { defineType } from "sanity";

export const project_categories = defineType({
  name: 'project_categories',
  title: 'Kategorie Projektów',
  type: 'document',

  fields: [
    {
      name: 'title',
      title: 'Nazwa kategori',
      type: 'localizedString'
    },
    { name: 'slug', type: 'localizedString', title: 'Slug', description: 'Fragment adresu pod którym będzie można to wyszukać' },

  ],
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
})