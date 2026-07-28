import frappeUIPreset from 'frappe-ui/tailwind'

export default {
  presets: [frappeUIPreset],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}',
    '../node_modules/frappe-ui/src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}',
    '../node_modules/frappe-ui/frappe/**/*.{vue,js,ts,jsx,tsx}',
    '../../frappe/ui/src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  safelist: [{ pattern: /!(text|bg)-/, variants: ['hover', 'active'] }],
  theme: {
    extend: {
      // Akolade Brand Colors
      colors: {
        akolade: {
          primary: '#0F172A',   // Deep Slate
          accent: '#6366F1',    // Vibrant Indigo
          bg: '#F8FAFC',        // Light Background
          surface: '#FFFFFF',   // White Surface
        }
      },
      // Ensure Vazirmatn font is available for Tailwind classes
      fontFamily: {
        sans: ['Vazirmatn', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      // Optional: Slightly tighter radii for a more technical "CRM" feel
      borderRadius: {
        'akolade': '0.375rem', 
      }
    },
  },
  plugins: [],
  // Enable important mode to override Frappe defaults
  important: true,
}
