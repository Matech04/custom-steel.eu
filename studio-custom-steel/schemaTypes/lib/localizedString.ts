import { defineType } from 'sanity';

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Tłumaczony Tekst',
  type: 'object',
  fields: [
    {
      name: 'pl',
      title: 'Polski (PL)',
      type: 'string',

    },
    {
      name: 'en',
      title: 'Angielski (EN)',
      type: 'string',

    },
    {
      name: 'de',
      title: 'Niemiecki (DE)',
      type: 'string',

    }
  ]
});