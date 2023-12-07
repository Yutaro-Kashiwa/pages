/** @type {import('tailwindcss').Config} */
export default {
  // ビルドサイズ縮小のために、purge の設定
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
}

