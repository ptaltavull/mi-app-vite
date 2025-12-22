import { Card, CardContent } from '@/components/ui/card'
import type { Post } from '@/schemas/post.schema'

export function PostCard({ post }: { post: Post }) {
  return (
    <Card className="w-full max-w-300">
      <CardContent className="p-4">
        <h2 className="font-semibold">{post.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{post.body}</p>
      </CardContent>
    </Card>
  )
}
