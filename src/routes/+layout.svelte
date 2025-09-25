<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="fixed inset-0 -z-10 bg-[url('/i-like-food-gr.png')] bg-repeat bg-center"></div>
{@render children()}
