<script lang="ts">
	import Featured from './../lib/components/Featured.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
</script>

<div class="flex max-w-[1700px] mx-auto w-full">
	<SideBar />
	<div class="lg:ml-[80px] flex-1 overflow-clip text-[#f3f5f8]">
		<Featured />
	</div>
</div>