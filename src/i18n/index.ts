import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import en from './locales/en.json';
import vi from './locales/vi.json';

const resources = {
	en: {
		translation: en,
	},
	vi: {
		translation: vi,
	},
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		supportedLngs: ['en', 'vi'],
		debug: false,

		detection: {
			// A crawlable query parameter takes priority. First-time visits still use
			// English, while an explicit choice is remembered locally.
			order: ['querystring', 'localStorage'],
			caches: ['localStorage'],
			lookupQuerystring: 'lang',
			lookupLocalStorage: 'i18nextLng',
		},

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
