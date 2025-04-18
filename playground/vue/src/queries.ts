import { defineQueryBuilder } from '@zorm-ts/core'
import { Image, Post, User } from './entities.js'

export const { user: userQuery, post: postQuery } = defineQueryBuilder([User, Post, Image], ({ one, many }) => ({
  user: {
    posts: many(Post, {
      reference: Post.fields.userId,
      field: User.fields.id,
    }),
  },
  post: {
    user: one(User, {
      reference: User.fields.id,
      field: Post.fields.userId,
    }),
    image: one(Image, {
      reference: Post.fields.imageId,
      field: Image.fields.id,
    }),
  },
}))
