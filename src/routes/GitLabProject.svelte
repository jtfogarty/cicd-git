<script lang="ts">
  //import { onMount } from 'svelte';
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";
  import { Button } from "$lib/components/ui/button";
    
  let projectId: string = '';
  let groupId: string = '';
  let urls: Array<{ name: string; url: string }> = [];
  let error: string | null = null;

  async function fetchProjectData(): Promise<void> {
    try {
      const response: Response = await fetch(`https://gitlab.com/api/v4/projects/${encodeURIComponent(projectId)}`, {
        headers: {
          // Include headers if needed, e.g., for authentication
          // 'Authorization': `Bearer YOUR_ACCESS_TOKEN_HERE`
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const projectData: any = await response.json();
      extractUrls(projectData);
      error = null;
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = 'An unknown error occurred';
      }
      urls = [];
    }
  }

  async function fetchGroupData(): Promise<void> {
    
    try {
      const response: Response = await fetch(`https://gitlab.com/api/v4/groups/${encodeURIComponent(groupId)}`, {
        headers: {
          // Include headers if needed, e.g., for authentication
          // 'Authorization': `Bearer YOUR_ACCESS_TOKEN_HERE`
        }
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const GroupData: any = await response.json();
      extractGroupUrls(GroupData);
      error = null;
    } catch (err) {
      if (err instanceof Error) {
        error = err.message;
      } else {
        error = 'An unknown error occurred';
      }
      urls = [];
    }
  }



  function extractGroupUrls(projectData: any): void {
    urls = [];
    // Define a list of known URL fields
    const urlFields: string[] = ['web_url', 'avatar_url'];

    for (const field of urlFields) {
      if (projectData[field]) {
        urls.push({ name: field.replace(/_/g, ' '), url: projectData[field] });
      }
    }

    // Include namespace web_url if available
    if (projectData.namespace && projectData.namespace.web_url) {
      urls.push({ name: 'namespace web url', url: projectData.namespace.web_url });
    }
  }

  function extractUrls(projectData: any): void {
    urls = [];
    // Define a list of known URL fields
    const urlFields: string[] = ['http_url_to_repo', 'web_url', 'readme_url'];

    for (const field of urlFields) {
      if (projectData[field]) {
        urls.push({ name: field.replace(/_/g, ' '), url: projectData[field] });
      }
    }

    // Include namespace web_url if available
    if (projectData.namespace && projectData.namespace.web_url) {
      urls.push({ name: 'namespace web url', url: projectData.namespace.web_url });
    }
  }
</script>

<div class="flex flex-col space-y-4 m-4">
  <div>
    <label for="projectid" class="block text-sm font-medium ">Please enter the project ID</label>
    <input bind:value={projectId} type="text" placeholder="Enter Project ID" class="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    <button on:click={fetchProjectData} class="border border-gray-600 mt-2 px-4 py-2 bg-[#061726] text-white font-semibold rounded-lg shadow-md hover:ring-2 hover:ring-blue-500 hover:ring-opacity-45 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">Get Project Info</button>

  </div>
  <div>
    <label for="groupid" class="block text-sm font-medium ">Please enter the group ID</label>
    <input bind:value={groupId} type="text" placeholder="Enter Group ID" class="text-black mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
    <button on:click={fetchGroupData} class="border border-gray-600 mt-2 px-4 py-2 bg-[#061726] text-white font-semibold rounded-lg shadow-md hover:ring-2 hover:ring-blue-500 hover:ring-opacity-45 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">Get Group Info</button>
  </div>
</div>

{#if error}
  <pre class="p-4 m-4 bg-red-100 text-red-700">{error}</pre>
{:else}
  {#each urls as { name, url }}
    <p class="m-4"><a class="text-blue-600 underline hover:text-blue-800" href="{url}" target="_blank">{name}</a></p>
  {/each}
{/if}

