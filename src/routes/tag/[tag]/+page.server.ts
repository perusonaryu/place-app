import { getList } from '../../../lib/microcms'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params }) => {
  return await getList({ filters: `tags[contains]${params.tag}` })
}

export const prerender = true
