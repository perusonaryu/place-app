import { type MicroCMSImage } from 'microcms-js-sdk'

export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch?: MicroCMSImage
  tags: Tag[]
}

type Tag = {
  id: string
  name: string
}
