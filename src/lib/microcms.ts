import { createClient, type MicroCMSQueries } from 'microcms-js-sdk'
import { MICROCMS_SERVICE_DOMAIN, MICROCMS_API_KEY } from '$env/static/private'
import type { Blog } from '../types'

const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN,
  apiKey: MICROCMS_API_KEY
})

export type BlogResponse = {
  totalCount: number
  offset: number
  limit: number
  contents: Blog[]
}

export const getList = (queries?: MicroCMSQueries) => {
  return client.get<BlogResponse>({ endpoint: 'blogs', queries })
}

export const getDetail = (contentId: string, queries?: MicroCMSQueries) =>
  client.getListDetail<Blog>({ endpoint: 'blogs', contentId, queries })
