import { useTranslation } from 'react-i18next'
import ReactCountryFlag from 'react-country-flag'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

const LANGUAGES = [
  { code: 'es', name: 'Español', country: 'ES' },
  { code: 'en', name: 'English', country: 'US' },
]

export function LanguageSwitcher() {
  const { i18n } = useTranslation()

  const currentLanguage =
    LANGUAGES.find((lang) => lang.code === i18n.language) || LANGUAGES[0]

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ReactCountryFlag
          svg
          countryCode={currentLanguage.country}
          style={{ width: '1.25em', height: '1.25em', cursor: 'pointer' }}
          aria-label={currentLanguage.name}
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        {LANGUAGES.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex cursor-pointer items-center gap-2 ${
              currentLanguage.code === lang.code ? 'bg-accent' : ''
            }`}
          >
            <ReactCountryFlag
              svg
              countryCode={lang.country}
              style={{ width: '1.25em', height: '1.25em' }}
              aria-label={lang.name}
            />
            <span>{lang.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
