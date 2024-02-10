

// Define a type for the pipeline data you expect to receive
type Pipeline = {
    id: number;
    status: string;
    // Add more fields as necessary based on the GitLab API response
  };

  async function fetchPipelineHistory(projectId: string, gitlabToken: string): Promise<Pipeline[]> {
    const endpoint = `https://gitlab.com/api/v4/projects/${projectId}/pipelines`;
    const response = await fetch(endpoint, {
      headers: {
        'PRIVATE-TOKEN': gitlabToken
      }
    });
  
    if (!response.ok) {
      throw new Error(`Error fetching pipeline data: ${response.statusText}`);
    }
  
    const data: Pipeline[] = await response.json();
    return data;
  }
  
export { fetchPipelineHistory };
  export type { Pipeline };
  