import type { PageLoad } from './$types'

type User = {
  id: number
  name: string
}

export const load: PageLoad = async ({ fetch }) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  if (!response.ok) {
    throw new Error('Failed to fetch users')
  }
  const users: User[] = await response.json()
  return { users }
}
