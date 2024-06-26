import { createClient, type MicroCMSQueries, type MicroCMSImage } from 'microcms-js-sdk'
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private'

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY
})

// 型定義
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

export type BlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}

// APIの呼び出し
export const getList = (queries?: MicroCMSQueries) => client.get<BlogResponse>({ endpoint: 'blogs', queries })

export const getDetail = (contentId: string, queries?: MicroCMSQueries) =>
  client.getListDetail<Blog>({ endpoint: 'blogs', contentId, queries })
