<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import { Button, CircularProgressIndeterminate, TextFieldOutlined } from "m3-svelte";
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
    const searchParams = new URLSearchParams(window.location.search);
    query = searchParams?.get?.("q") || query;
    starboard = await getStarboard();
  });
</script>

<Lazy>
  <div style:text-align="center">
    <TopBar title="Starboard" icon="starboard.png" />
    
    <a href="." style:text-decoration="none">
      <Button type="elevated">🏠 Homepage</Button>
    </a><br><br>
    
    <TextFieldOutlined
      bind:value={query}
      name="Search" />
    {#if starboard != null}
      <br><p1 style:text-align="left">{
        filtered.length ? `${filtered.length} messages shown` : "No matches"
      }</p1>
    {/if}
    
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