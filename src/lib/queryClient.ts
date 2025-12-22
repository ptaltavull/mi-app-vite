import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query'
import { toast } from 'sonner'
import {
  ApiError,
  NetworkError,
  UnauthorizedError,
  ValidationError,
} from '@/lib/errors'
import { t } from 'i18next'

function getNiceMessage(error: unknown): string {
  if (error instanceof UnauthorizedError) return error.message
  if (error instanceof NetworkError) return error.message
  if (error instanceof ValidationError) return error.message
  if (error instanceof ApiError) return error.message
  if (error instanceof Error) return error.message
  return t('errors.unexpected')
}

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      toast.error(getNiceMessage(error))
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      toast.error(getNiceMessage(error))
    },
  }),
  defaultOptions: {
    queries: {
      retry: (failureCount, error) => {
        if (error instanceof UnauthorizedError) return false
        if (error instanceof ValidationError) return false
        return failureCount < 2
      },
    },
  },
})
