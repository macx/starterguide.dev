// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import { remarkWidont } from './remark-plugins/remark-widont.mjs'
import rehypeMermaid from '@beoe/rehype-mermaid'
import { getCache } from '@beoe/cache'

const cache = await getCache()

// https://astro.build/config
export default defineConfig({
  site: 'https://starterguide.dev',
  redirects: {
    '/guides/command-line': {
      status: 301,
      destination: '/guides/terminal'
    }
  },
  integrations: [
    starlight({
      title: 'StarterGuide.dev',
      description:
        'Leitfaden zur Einrichtung einer modernen Entwick­lungs­umgebung. Plus Starterkit zum direkt loslegen.',
      logo: {
        light: './src/assets/starterguide-light.svg',
        dark: './src/assets/starterguide-dark.svg',
        replacesTitle: true
      },
      locales: {
        root: {
          label: 'Deutsch',
          lang: 'de'
        }
      },
      social: [
        {
          icon: 'discord',
          label: 'Discord',
          href: 'https://discord.gg/Kke2BsapYu'
        },
        {
          icon: 'codePen',
          label: 'CodePen',
          href: 'https://codepen.io/macx'
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/macx/starterguide.dev'
        }
      ],
      customCss: [
        '@fontsource/ibm-plex-sans/400.css',
        '@fontsource/ibm-plex-sans/600.css',
        './src/styles/custom.css'
      ],
      sidebar: [
        {
          label: 'Anleitungen',
          collapsed: false,
          items: [
            { label: 'Entwick­lungs­umgebung', slug: 'guides/setup' },
            {
              label: 'Installation',
              items: [
                { label: 'Node.js und Paketmanager', slug: 'guides/nodejs' },
                { label: 'Corepack', slug: 'guides/corepack' },
                // { label: 'Git', slug: 'guides/git' },
                {
                  label: 'Homebrew und Chocolatey',
                  slug: 'guides/homebrew-chocolatey'
                }
              ]
            },
            { label: 'Einführung ins Terminal', slug: 'guides/terminal' },
            { label: 'Installation überprüfen', slug: 'guides/checks' },
            { label: 'Probleme beheben', slug: 'guides/troubleshooting' }
          ]
        },
        {
          label: 'Starterkit',
          collapsed: false,
          items: [
            { label: 'Einführung', slug: 'starterkit/intro' },
            {
              label: 'Dateistruktur',
              slug: 'starterkit/structure'
            },
            {
              label: 'Schriften',
              slug: 'starterkit/fonts'
            },
            {
              label: 'Bilder',
              slug: 'starterkit/images'
            },
            {
              label: 'HTML-Snippets',
              slug: 'starterkit/snippets'
            }
          ]
        }
      ]
    })
  ],
  markdown: {
    rehypePlugins: [
      [
        rehypeMermaid,
        {
          strategy: 'file',
          fsPath: 'public/beoe',
          webPath: '/beoe',
          darkScheme: 'class',
          cache
        }
      ]
    ],
    remarkPlugins: [remarkWidont]
  },
  experimental: {}
})
