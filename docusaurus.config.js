// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Assemblea FP',
  tagline: 'Accions ara, després és tard',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://assembleafp.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/accionsfp/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Assemblea FP', // Usually your GitHub org/user name.
  projectName: 'accionsfp', // Usually your repo name.
  deploymentBranch: 'deployment',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca'],
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
            'https://github.com/assembleafp/accionsfp/tree/main',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/assembleafp/accionsfp/tree/main',
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
      image: 'img/yak-social-card.jpg',
      navbar: {
        title: 'Assemblea FP',
        logo: {
          alt: 'AFP logo',
          src: 'img/afp.svg',
        },
        items: [
          {
            type: 'localeDropdown',
            sidebarId: 'tutorialSidebar',
            position: 'left',
          },
          {to: '/blog', label: 'Assemblees', position: 'left'},
          {to: '/docs/intro', label: 'Manifest', position: 'left'},
          {to: '/testimonis-page', label: 'Testimonis FCT', position: 'left'},
          {
            href: 'https://github.com/yaknostoyok/acciones-politicas',
            label: 'Repositori de Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Accions per la FCT',
            items: [
              {
                label: 'Testimonis FCT',
                to: '/testimonis-page',
              },
              {
                label: 'Publicacions Assemblea FP',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Altres',
            items: [
              {
                label: 'Repositori original',
                href: 'https://github.com/assembleafp/accionsfp',
              },
              {
                label: 'Autoria',
                href: 'https://assembleafp.github.io/accionsfp/blog/authors/yaknostoyok',
              },
            ],
          },
        ],
        copyright: `Pàgina desenvolupada amb Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
