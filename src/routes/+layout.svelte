<script>
	import Header from '$lib/components/Header.svelte';
	import SideBar from '$lib/components/SideBar.svelte';
  import "../app.pcss";
</script>

  <Header/>
  <div class="flex max-w-[1700px] mx-auto w-full">
    <SideBar />
    <div class="lg:ml-[80px] flex-1 overflow-clip text-[#f3f5f8]">
      <slot />
    </div>
  </div>