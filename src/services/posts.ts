import { api } from '@/lib/axios'
import { PostsSchema, type Post } from '@/schemas/post.schema'
import { ZodError } from 'zod'
import { ValidationError } from '@/lib/errors'

export async function getPosts(): Promise<Post[]> {
  const res = await api.get('/posts')

  try {
    return PostsSchema.parse(res.data)
  } catch (e) {
    if (e instanceof ZodError) {
      throw new ValidationError()
    }
    throw e
  }
}
