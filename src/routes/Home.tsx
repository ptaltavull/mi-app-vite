import { getPosts } from '@/services/posts'
import { PostCard } from '@/components/PostCard'
import { PostSkeleton } from '@/components/PostSkeleton'
import { useQuery } from '@tanstack/react-query'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const { t } = useTranslation()

  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  })

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">{t('posts')}</h1>
      </div>

      <div className="w-full space-y-4">
        {isLoading && (
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <PostSkeleton key={i} />
            ))}
          </div>
        )}

        {posts?.length === 0 || (!isLoading && error) ? (
          <p className="py-8 text-center text-muted-foreground">
            {error ? t('errors.unexpected') : t('noData')}
          </p>
        ) : null}

        {!isLoading && !error && posts?.length ? (
          <div className="space-y-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
