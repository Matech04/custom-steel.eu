import { defineType, defineField } from 'sanity'

export const navigation = defineType({
  name: 'navigation',
  title: 'Nawigacja',
  type: 'document',
  options: {
    singleton: true,
  },

  fields: [
    // Sekcja Logo
    defineField({
      name: 'logo_mobile',
      title: 'Logo Mobile',
      type: 'image',
      group: 'logos'
    }),
    defineField({
      name: 'logo_desktop',
      title: 'Logo Desktop',
      type: 'image',
      group: 'logos'
    }),

    // Sekcja Linków (Dynamiczna lista)
    defineField({
      name: 'navLinks',
      title: 'Linki Menu',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'navLink',
          fields: [
            {
              name: 'text',
              title: 'Tekst wyświetlany',
              type: 'localizedString' // Używamy Twojego typu do tłumaczeń
            },
            {
              name: 'href',
              title: 'Slug / URL',
              description: 'np. o-nas będzie można odwiedzić przez custom-steel.com/o-nas',
              type: 'localizedString'
            },
            {
              name: 'id',
              title: 'Identyfikator',
              type: 'string'
            }
          ],
          preview: {
            select: {
              title: 'text.pl',
              subtitle: 'id'
            }
          }
        }
      ]
    }),

    // Labelki przycisków (dla Screen Readerów)
    defineField({
      name: 'labels',
      title: 'Etykiety interfejsu',
      type: 'object',
      fields: [
        { name: 'nav_open', title: 'Otwórz menu (Alt)', type: 'localizedString' },
        { name: 'nav_close', title: 'Zamknij menu (Alt)', type: 'localizedString' }
      ]
    })
  ],
  groups: [
    { name: 'logos', title: 'Logotypy' },
  ]
})