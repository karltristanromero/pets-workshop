/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          700: 'var(--secondary-bg)',
          100: 'var(--primary-text)',
          300: 'var(--secondary-text)',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}