import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    es: {
      translation: {
        home: 'Inicio',
        about: 'Acerca de',
        posts: 'Posts',
        noData: 'Sin datos',
        loading: 'Cargando...',
        errors: {
          unexpected: 'Ha ocurrido un error inesperado',
        },
        aboutPage: {
          title: 'Stack Tecnológico',
          techStack: [
            {
              name: 'React + Vite',
              description:
                'Renderizado del lado del cliente y entorno de desarrollo ultra rápido',
              documentation: 'https://es.reactjs.org/',
            },
            {
              name: 'TypeScript',
              description:
                'Tipado estático para un código más seguro y mantenible',
              documentation: 'https://www.typescriptlang.org/es/',
            },
            {
              name: 'React Router',
              description:
                'Enrutamiento del lado del cliente para una navegación fluida',
              documentation: 'https://reactrouter.com/',
            },
            {
              name: 'Tailwind CSS',
              description:
                'Framework de utilidades CSS para un diseño personalizado y responsivo',
              documentation: 'https://tailwindcss.com/',
            },
            {
              name: 'shadcn/ui',
              description:
                'Componentes de interfaz de usuario accesibles y personalizables',
              documentation: 'https://ui.shadcn.com/',
            },
            {
              name: 'Axios',
              description: 'Cliente HTTP para realizar peticiones a APIs',
              documentation: 'https://axios-http.com/',
            },
            {
              name: 'TanStack Query',
              description: 'Manejo de estado del servidor y caché de datos',
              documentation: 'https://tanstack.com/query/latest',
            },
            {
              name: 'Zod',
              description:
                'Validación de esquemas TypeScript de extremo a extremo',
              documentation: 'https://zod.dev/',
            },
            {
              name: 'i18n',
              description: 'Internacionalización para soporte multilingüe',
              documentation: 'https://www.i18next.com/',
            },
            {
              name: 'ESLint',
              description:
                'Análisis estático de código para encontrar y arreglar problemas',
              documentation: 'https://eslint.org/',
            },
            {
              name: 'Prettier',
              description: 'Formateador de código para mantener consistencia',
              documentation: 'https://prettier.io/',
            },
            {
              name: 'Husky',
              description:
                'Git hooks para mejorar los commits y mantener la calidad del código',
              documentation: 'https://typicode.github.io/husky/',
            },
          ],
        },
      },
    },
    en: {
      translation: {
        home: 'Home',
        about: 'About',
        posts: 'Posts',
        noData: 'No data',
        loading: 'Loading...',
        errors: {
          unexpected: 'An unexpected error has occurred',
        },
        aboutPage: {
          title: 'Tech Stack',
          techStack: [
            {
              name: 'React + Vite',
              description:
                'Client-side rendering and ultra-fast development environment',
              documentation: 'https://reactjs.org/',
            },
            {
              name: 'TypeScript',
              description: 'Static typing for safer and more maintainable code',
              documentation: 'https://www.typescriptlang.org/',
            },
            {
              name: 'React Router',
              description: 'Client-side routing for smooth navigation',
              documentation: 'https://reactrouter.com/',
            },
            {
              name: 'Tailwind CSS',
              description:
                'Utility-first CSS framework for custom and responsive design',
              documentation: 'https://tailwindcss.com/',
            },
            {
              name: 'shadcn/ui',
              description: 'Accessible and customizable UI components',
              documentation: 'https://ui.shadcn.com/',
            },
            {
              name: 'Axios',
              description: 'HTTP client for making API requests',
              documentation: 'https://axios-http.com/',
            },
            {
              name: 'TanStack Query',
              description: 'Server state management and data caching',
              documentation: 'https://tanstack.com/query/latest',
            },
            {
              name: 'Zod',
              description: 'TypeScript-first schema validation',
              documentation: 'https://zod.dev/',
            },
            {
              name: 'i18n',
              description: 'Internationalization for multi-language support',
              documentation: 'https://www.i18next.com/',
            },
            {
              name: 'ESLint',
              description: 'Static code analysis to find and fix problems',
              documentation: 'https://eslint.org/',
            },
            {
              name: 'Prettier',
              description: 'Code formatter for consistent style',
              documentation: 'https://prettier.io/',
            },
            {
              name: 'Husky',
              description: 'Git hooks for better commits and code quality',
              documentation: 'https://typicode.github.io/husky/',
            },
          ],
        },
      },
    },
  },
})

export default i18n
