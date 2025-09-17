// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://subesh.netlify.app',
  integrations: [
    react(),
    sitemap(),
    icon({
      include: {
        "material-symbols": ['translate', 'layers', 'widgets', 'biotech', 'database', 'build', 'cloud-sync', 'devices', 'more-horiz', 'trophy-outline-rounded', 'award-star-outline-rounded', 'call', 'lab-profile-rounded'],
        "devicon": ['html5', 'css3', 'azuresqldatabase', 'microsoftsqlserver', 'mysql', 'sqlite', 'postgresql', 'react-wordmark', 'reactnative-wordmark', 'astro', 'redux', 'tailwindcss', 'nextjs', 'nodejs', 'express', 'nestjs', 'angular', 'playwright', 'k6', 'influxdb', 'redis', 'git', 'github', 'githubactions', 'grafana', 'figma', 'postman', 'tauri', 'nats', 'sass', 'linkedin'],
        "logos": ['javascript', 'typescript-icon', 'rust', 'mongodb-icon', 'storybook-icon', 'nx', 'docker-icon', 'python', 'kubernetes', 'jest', 'google-gmail', 'dribbble-icon', 'x'],
        "skill-icons": ['devto-dark', 'gmail-light', 'github-light', 'linkedin']
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});