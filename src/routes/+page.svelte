<script lang="ts">
	import { page } from '$app/state';

	// Reactive score derived from the URL search param ?score=123
	let score = $derived<string>(page.url.searchParams.get('score') ?? '100');

	function getGradientColor(): string {
		const score = parseInt(page.url.searchParams.get('score') ?? '100');
		if (typeof document === 'undefined') return '#10b981';

		const getColor = (varName: string, fallback: string) => {
			const val = getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
			return val || fallback;
		};

		const canvas = document.createElement('canvas');
		canvas.width = 100;
		canvas.height = 1;
		const ctx = canvas.getContext('2d')!;

		const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop(0, getColor('--error', '#ef4444')); // red
		gradient.addColorStop(0.5, getColor('--warning', '#f59e0b')); // yellow
		gradient.addColorStop(1, getColor('--success', '#10b981')); // green

		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, canvas.width, 1);

		// Use pixel 0–99
		const x = Math.floor((Math.max(0, Math.min(score, 100)) / 100) * (canvas.width - 1));
		const pixel = ctx.getImageData(x, 0, 1, 1).data;

		return `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;
	}
</script>

<div class="flex flex-col items-center justify-center h-full">
	<span class="text-[12rem] font-semibold h-[14rem]" style="color: {getGradientColor()}"
		>{score}</span
	>
	<img src="Logo-light-lg.png" alt="Logo" class="h-auto" />
</div>
