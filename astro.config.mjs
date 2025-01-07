// @ts-check
import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

import { remarkWidont } from './remark-plugins/remark-widont.mjs'

// https://astro.build/config
export default defineConfig({
  site: 'https://starterguide.dev',
  integrations: [
    starlight({
      title: 'StarterGuide.dev',
      description: 'A guide to getting started with Astro',
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
      social: {
        discord: 'https://discord.gg/Kke2BsapYu',
        codePen: 'https://codepen.io/macx',
        github: 'https://github.com/macx/starterguide.dev'
      },
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
            { label: 'Entwicklungsumgebung', slug: 'guides/setup' },
            { label: 'Kommandozeile', slug: 'guides/command-line' },
            {
              label: 'Homebrew und Chocolatey',
              slug: 'guides/homebrew-chocolatey'
            },
            { label: 'Installation überprüfen', slug: 'guides/checks' }
          ]
        },
        {
          label: 'Starterkit',
          collapsed: false,
          items: [
            { label: 'Einführung', slug: 'starterkit/intro' },
            {
              label: 'Bilder',
              slug: 'starterkit/images'
            },
            {
              label: 'Schriften',
              slug: 'starterkit/fonts'
            },
            {
              label: 'Snippets',
              slug: 'starterkit/snippets'
            }
          ]
        }
      ]
    })
  ],
  markdown: {
    remarkPlugins: [remarkWidont]
  },
  experimental: {
    responsiveImages: true,
    svg: true
  }
})
