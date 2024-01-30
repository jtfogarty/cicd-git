<script lang="ts" >
    import * as Card from "$lib/components/ui/card";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
   </script>
   
   
   <Card.Content class="space-y-2 text-black">

    <div class="flex flex-col w-full max-w-sm gap-1.5">
        <Label for="email">Please enter the URL of the d-conf component repository </Label>
        <Input type="url" id="url" placeholder="URL" />
      </div>
     </Card.Content>
   