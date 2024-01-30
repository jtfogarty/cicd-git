<script lang="ts">
	import { fade } from 'svelte/transition';
	import * as Tabs from "$lib/components/ui/tabs";
	import GitLabPage from "$lib/components/tabs/GitLabPage.svelte"; // Assuming you have a GitLabPage component
	import ApplicationContextPage from "$lib/components/tabs/ApplicationContextPage.svelte"; // Assuming you have an ApplicationContextPage component
	import NSGPage from "$lib/components/tabs/NSGPage.svelte"; // Assuming you have an NSGPage component
	import DCPage from "$lib/components/tabs/DCPage.svelte"; // Assuming you have an NSGPage component

	let activeTab = 'GitLab'; // Default active tab
  
	const tabs = [
	  { id: "GitLab", title: "GitLab", description: "Configure connection to GitLab", component: GitLabPage },
	  { id: "ApplicationContext", title: "Application Context", description: "Repository Location", component: ApplicationContextPage },
	  { id: "NSG", title: "NSG", description: "Network Security Group Configuration", component: NSGPage },
	  { id: "DC", title: "D-Conf", description: "Dee Configuration", component: DCPage}
	  // You can add or remove tabs, and the grid will adjust accordingly
	];
  
	function handleSubmit() {
	  console.log('Email Data:');
	  // Process the email data here...
	}
  
	$: gridColumnsStyle = `grid-template-columns: repeat(${tabs.length}, minmax(0, 1fr));`;
  </script>
  
  <Tabs.Root value={activeTab} class="w-full bg-slate-700 text-white">
	<Tabs.List class="grid w-full bg-slate-700 text-white" style={gridColumnsStyle}>
	  {#each tabs as tab}
		<Tabs.Trigger value={tab.id} on:click={() => activeTab = tab.id}>
		  {tab.title}
		</Tabs.Trigger>
	  {/each}
	</Tabs.List>
  
	{#each tabs as tab}
	  {#if activeTab === tab.id}
		<Tabs.Content value={tab.id} >
		  <div  in:fade={{ duration: 1000 }}  class="space-y-2 bg-gray-400 p-4">
			<h2 class="text-lg font-bold">{tab.title}</h2>
			<p>{tab.description}</p>
			<svelte:component this={tab.component} />
		  </div>
		</Tabs.Content>
	  {/if}
	{/each}
  </Tabs.Root>
  