<script lang="ts">
	import type { PageData } from './$types'
	export let data: PageData
</script>

<h1>ユーザ一覧</h1>
<ul>
	{#each data.users as user}
		<li>{user.name}</li>
	{/each}
</ul>
