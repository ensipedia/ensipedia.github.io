<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import { Button, TextFieldOutlined, LoadingIndicator } from "m3-svelte";
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
      <Button variant="elevated">🏠 Homepage</Button>
    </a>
    
    <div
      style:text-align="left"
      style:margin="24px 0px 24px 0px"
      style:border-radius="28px"
      style:padding="1px 24px 1px 24px"
      style:background="var(--m3c-surface-container-low)">
      <p>
        <b>To add a message here,</b> right click (or long press if mobile) a message of Ensi, click Apps and click the "Starboard" command of Ensi. The message may be included after a review.
      </p>
    </div>
    
    <TextFieldOutlined
      bind:value={query}
      label="Search" />
      
    <div style:margin-bottom="8px"></div>
    
    {#if starboard != null}
      <p1 style:text-align="left">{
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
      <LoadingIndicator />
    {/if}
  </div>
</Lazy>