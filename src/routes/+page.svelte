<script lang="ts">
	import { page } from '$app/state';

	// Reactive score derived from the URL search param ?score=123
	let score = $derived<string>(page.url.searchParams.get('score') ?? '100');
</script>

<div class="flex flex-col items-center justify-center">
	<div>{score}</div>
	<img src="Logo-light-lg.png" alt="Logo" class="h-auto" />
</div>
