// @ts-check
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Thomas\'s Docs',
  tagline: 'Documentation is like a toothbrush… Everyone agrees it\'s important, but nobody wants to use someone else\'s.',
  favicon: 'img/favicon.ico',
  organizationName: 'thomas-abraham13',
  projectName: 'thomas-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  url: 'https://thomas-abraham13.github.io',
  baseUrl: '/thomas-docs/',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/thomas-abraham13/thomas-docs/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Docs moved out of folders with spaces in their names; keep old links working.
        redirects: [
          ['/docs/Collated Information/bitrate', '/docs/concepts/adaptive-bitrate'],
          ['/docs/Collated Information/cdn', '/docs/concepts/cdn'],
          ['/docs/Collated Information/drm', '/docs/concepts/drm'],
          ['/docs/Collated Information/explainlike5', '/docs/concepts/explain-like-im-five'],
          ['/docs/Collated Information/framerate', '/docs/concepts/frame-rate'],
          ['/docs/Application Deployment & Collated Information/appletvcharles', '/docs/deployment/apple-tv-charles-proxy'],
          ['/docs/Application Deployment & Collated Information/philips-titan-os', '/docs/deployment/philips-titan-os'],
        ].map(([from, to]) => ({from, to})),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/social-card.png',
      navbar: {
        title: 'Thomas Abraham',
        logo: {
          alt: 'Thomas Abraham documentation logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/thomas-abraham13',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://thomas-abraham13.github.io',
            label: 'Portfolio',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Social Links',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/thomasabraham6813/',
              },
              {
                label: 'Steam',
                href: 'https://steamcommunity.com/id/thomasabraham3/',
              },
              {
                label: 'Twitter',
                href: 'https://x.com/thomasabraham0',
              },
            ],
          },
          {
            title: 'Even More Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/thomas-abraham13',
              },
              {
                label: 'Portfolio',
                href: 'https://thomas-abraham13.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Thomas Abraham. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
