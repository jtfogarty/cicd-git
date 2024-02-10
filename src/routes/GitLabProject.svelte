<script lang="ts">
  //import { onMount } from 'svelte';
  import { Input } from "$lib/components/ui/input";
  import { Label } from "$lib/components/ui/label";

  let projectId: string = '';
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

<div>

  <input class="text-black" type="text" bind:value={projectId} placeholder="Enter Project ID" />
  <button on:click={fetchProjectData}>Submit</button>
</div>

{#if error}
  <pre class="error">{error}</pre>
{:else}
  {#each urls as { name, url }}
    <p><a class="text-red-600 underline hover:text-white" href="{url}" target="_blank">{name}</a></p>
  {/each}
{/if}
