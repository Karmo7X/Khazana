import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import global_en from './locales/en.json';
import global_ar from './locales/ar.json';
import global_zh from './locales/zh.json';
import global_id from './locales/id.json';
import { Provider } from 'react-redux';
import Store from './Api/Store.js';
i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        global: global_en,
        // Add more English translations
      },
    },
    ar: {
      translation: {
        global: global_ar,
        // Add more Arabic translations
      },
    },
    zh: {
      translation: {
        global: global_zh,
        // Add more zh translations
      },
    },
    id: {
      translation: {
        global: global_id,
        // Add more id translations
      },
    },
  },
  lng: 'ar', // Default language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <I18nextProvider i18n={i18n}>
      <Provider store={Store}>
       <App />
      </Provider>
    </I18nextProvider>
  </StrictMode>,
)
