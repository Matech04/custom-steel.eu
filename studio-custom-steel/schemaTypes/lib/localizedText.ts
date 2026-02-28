import { defineType } from 'sanity';

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Tłumaczony Tekst',
  type: 'object',
  fields: [
    {
      name: 'pl',
      title: 'Polski (PL)',
      type: 'text',

    },
    {
      name: 'en',
      title: 'Angielski (EN)',
      type: 'text',

    },
    {
      name: 'de',
      title: 'Niemiecki (DE)',
      type: 'text',

    }
  ]
});