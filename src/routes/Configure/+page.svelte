<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import * as Tabs from "$lib/components/ui/tabs";
	import * as Select from "$lib/components/ui/select";
	import { Button } from "$lib/components/ui/button";
	import { Textarea } from "$lib/components/ui/textarea";
	import type { EmailData } from '$lib/types.ts';
  
	const tabs = [
		{value: "GitLab", Description:"GitLab Description", label: "Configure conneciton to GitLab"},
		{value: "Application Context", Description:"GitLab Description", label: "Repository Location"},
		{value: "NSG", Description:"GitLab Description", label: "Repository Location"}
	]

	const choice = [
	  { value: "customer", label: "I am already a customer" },
	  { value: "word", label: "Word of Mouth" },
	  { value: "search", label: "Search Engine (Bing, Google, etc)" },
	  { value: "ads", label: "Advertisement" },
	  { value: "other", label: "Other" }
	];
   
	let emailData: EmailData = {
		name: '', email: '', phone: '', company: '', street: '', city: '', state: '', zip: '', subject: '',
		found: "",
		message: ""
	};
  
	interface FormData {
  
	}
  
	// Function to handle button click (submission)
	function handleSubmit() {
		  console.log('Email Data:', emailData);
		  // Process the email data here...
	  }
  </script>
  
  <Tabs.Root value="config" class="w-[1500px] mb-2  bg-slate-700 text-white">
	<Tabs.List class="grid w-full grid-cols-3 bg-slate-700 text-white">
		{#each tabs as tab}
		  <Tabs.Trigger value={tab.value}>{tab.value}</Tabs.Trigger>
		{/each}
	</Tabs.List>
	<Tabs.Content value="config" >
	  <Card.Root class="space-y-2 bg-gray-400">
		<Card.Header class="space-y-2 bg-gray-400">
			{#each tabs as tab}
			  <Card.Title>{tab.value}</Card.Title>
			  <Card.Description>
				{tab.Description}
		  	  </Card.Description>
			{/each}
		</Card.Header>
		<Card.Content class="space-y-2 bg-gray-400">
		  this is my content
		</Card.Content>
		<Card.Footer>
		  <Button>Submit</Button>
		</Card.Footer>
	  </Card.Root>
	</Tabs.Content>
  </Tabs.Root>