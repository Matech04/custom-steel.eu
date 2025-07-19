import { defineConfig, LocalAuthProvider } from "tinacms";


import {
  TinaUserCollection,
  UsernamePasswordAuthJSProvider,
} from 'tinacms-authjs/dist/tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

const env = process.env
const isLocal = env.TINA_PUBLIC_IS_LOCAL === 'true'

export default defineConfig({
  branch,
  contentApiUrlOverride: '/api/tina/gql',
  authProvider: isLocal
    ? new LocalAuthProvider()
    : new UsernamePasswordAuthJSProvider(),

  // Get this from tina.io
  clientId: env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      TinaUserCollection,
      {
        name: "home",
        label: "Strona Główna",
        path: "/src/content/home",
        fields: [
          {
            type: "string",
            name: "title1",
            label: "Tytuł - (część pierwsza)",
          },
          {
            type: "string",
            name: "title2",
            label: "Tytuł - (część druga)",
          },
          {
            type: "string",
            name: "description1",
            label: "Opis - (część pierwsza)",
          },
          {
            type: "string",
            name: "description2",
            label: "Opis - (część druga)",
          },
          {
            type: "string",
            name: "button",
            label: "Przycisk - Napisz do nas",
          },
          {
            type: "object",
            name: "cards",
            label: "Karty",
            fields: [
              {
                type: "object",
                name: "card1",
                label: "Karta 1",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Tytuł Karty 1",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Opis Karty 1",
                  },
                ],
              },
              {
                type: "object",
                name: "card2",
                label: "Karta 2",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Tytuł Karty 2",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Opis Karty 2",
                  },
                ],
              },
              {
                type: "object",
                name: "card3",
                label: "Karta 3",
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Tytuł Karty 3",
                  },
                  {
                    type: "string",
                    name: "description",
                    label: "Opis Karty 3",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "about",
            label: "O nas",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Tytuł sekcji O nas",
              },
              {
                type: "string",
                name: "description",
                label: "Opis sekcji O nas",
              },
            ],
          },
          {
            type: "object",
            name: "projects",
            label: "Projekty",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Tytuł sekcji Projekty",
              },
              {
                type: "string",
                name: "button",
                label: "Przycisk - Zobacz więcej",
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Kontakt",
        path: "/src/content/layout/contact",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tytuł - Odezwij się do nas",
          },
          {
            type: "string",
            name: "title2",
            label: "Tytuł - Masz pomysł na realizację?",
          },
          {
            type: "string",
            name: "description",
            label: "Opis",
          },
          {
            type: "object",
            name: "form",
            label: "Formularz",
            fields: [
              {
                type: "string",
                name: "name",
                label: "Pole - Imię",
              },
              {
                type: "string",
                name: "email",
                label: "Pole - Adres e-mail",
              },
              {
                type: "string",
                name: "phone",
                label: "Pole - Numer telefonu",
              },
              {
                type: "string",
                name: "button",
                label: "Przycisk - Wyślij",
              },
            ],
          },
        ],
      },
      {
        name: "footer",
        label: "Stopka",
        path: "/src/content/layout/footer",
        fields: [
          {
            type: "string",
            name: "contact",
            label: "Kontakt",
          },
          {
            type: "string",
            name: "rules",
            label: "Polityka prywatności i warunki",
          },
        ],
      },
      {
        name: "navbar",
        label: "Nawigacja",
        path: "/src/content/layout/navbar",
        fields: [
          {
            type: "string",
            name: "main",
            label: "Strona główna",
          },
          {
            type: "string",
            name: "projects",
            label: "Projekty",
          },
          {
            type: "string",
            name: "contact",
            label: "Kontakt",
          },
        ],
      },
    ],
  },
});