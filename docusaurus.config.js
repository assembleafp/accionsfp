// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Acciones políticas',
  tagline: 'Página para educar, recordar y luchar por un futuro mejor',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://yaknostoyok.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/acciones-politicas/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'yaknostoyok', // Usually your GitHub org/user name.
  projectName: 'acciones-politicas', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es','ca','eu','gl','en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yaknostoyok/acciones-politicas/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/yaknostoyok/acciones-politicas/tree/main',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Acciones políticas',
        logo: {
          alt: 'Yak logo',
          src: 'img/yak-logo.png',
        },
        items: [
          {
            type: 'localeDropdown',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Idiomas',
          },
          {to: '/docs/intro', label: 'Muro', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/yaknostoyok/acciones-politicas',
            label: 'Repositorio de Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Muro de la vergüenza',
            items: [
              {
                label: 'Contempla el muro',
                to: '/docs/intro',
              },
              {
                label: 'Bienvenida',
                to: '/blog/blog-bienvenida',
              },
              {
                label: '¿Cómo colaborar?',
                to: '/blog/como-colaborar',
              },
            ],
          },
          {
            title: 'Otros',
            items: [
              {
                label: 'Repositorio original',
                href: 'https://github.com/yaknostoyok/acciones-politicas/tree/main',
              },
              {
                label: 'Autoría',
                href: 'https://yaknostoyok.github.io/acciones-politicas/blog/authors/yaknostoyok',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Acciones políticas, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
