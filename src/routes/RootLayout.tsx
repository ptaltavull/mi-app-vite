import { useTranslation } from 'react-i18next'
import { Link, Outlet } from 'react-router-dom'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'

export default function RootLayout() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      <div className="w-full max-w-[100vw] px-6 py-4">
        <nav className="flex w-full items-center gap-6">
          {/* Navegación */}
          <Link to="/" className="underline">
            {t('home')}
          </Link>
          <Link to="/about" className="underline">
            {t('about')}
          </Link>

          {/* Selector de idioma */}
          <div className="ml-auto">
            <LanguageSwitcher />
          </div>
        </nav>

        <div className="mt-6 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
