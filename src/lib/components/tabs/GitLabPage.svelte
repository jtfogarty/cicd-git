<script lang="ts" >
import { onMount } from 'svelte';
import { db } from '$lib/db'; // Ensure the correct path to db.js
    
 import * as Card from "$lib/components/ui/card";
 import { Input } from "$lib/components/ui/input";
 import { Button } from "$lib/components/ui/button";

 let username = '';
  let token = '';

  onMount(async () => {
    const data = await db.gitlab.toArray();
    if (data.length > 0) {
      ({ username, token } = data[0]); // Assuming there's only one entry
    }
  });

  const saveGitLabData = async () => {
    await db.gitlab.put({ username, token });
  };

</script>


<Card.Content class="space-y-2 text-black">
    <Input bind:value={username} type="user" placeholder="preferred id" class="max-w-xs" />
    <Input  bind:value={token} type="token" placeholder="GitLab Token" class="max-w-md" />
 	  <Button on:click={saveGitLabData}>Save</Button>
</Card.Content>
