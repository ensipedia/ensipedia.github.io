<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import { CircularProgressIndeterminate, TextFieldOutlined } from "m3-svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  import DMessage from "$lib/components/DMessage.svelte";
  import { getStarboard } from "$lib/starboard.js";
  
  let starboard;
  let query = "";
  let filtered;
  $: filtered = starboard?.filter?.(
    convo => convo.some(msg => msg.content.toLowerCase().includes(query.toLowerCase()))
  ) || [];
  
  onMount(async () => {
    starboard = await getStarboard();
    query = url.searchParams.get("q");
  });
</script>

<Lazy>
  <div style:text-align="center">
    <TopBar title="Starboard" icon="starboard.png" />
    
    <TextFieldOutlined
      bind:value={query}
      name="Search" />
    
    <br>
    {#if starboard != null}
      {#each filtered as data}
        <div style:margin="16px 0px 16px 0px">
          <DMessage message={data[0]} />
        </div>
      {/each}
    {:else}
      <CircularProgressIndeterminate />
    {/if}
  </div>
</Lazy>