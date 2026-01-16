<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import {
    Button,
    Card,
    ConnectedButtons,
    LoadingIndicator,
    TextFieldOutlined
  } from "m3-svelte";
  import TopBar from "$lib/components/TopBar.svelte";
  
  let data;
  let category = "words";
  let query = "";
  let filtered;
  $: filtered = data?.[category]?.filter?.(w => w.toLowerCase().includes(query.toLowerCase())) ?? [];
  
  onMount(async () => {
    const searchParams = new URLSearchParams(window.location.search);
    category = searchParams?.get?.("category") || category;
    query = searchParams?.get?.("q") || query;
    const response = await fetch("data.json");
    data = await response.json();
  });
</script>

<Lazy>
  <div style:text-align="center">
    <TopBar/>
    
    <a href="starboard" style:text-decoration="none">
      <Button variant="elevated">⭐ Starboard</Button>
    </a>
    
    <div
      style:text-align="left"
      style:margin="24px 0px 24px 0px"
      style:border-radius="28px"
      style:padding="1px 24px 1px 24px"
      style:background="var(--m3c-surface-container-low)">
      <p>
        • <a href="https://aliernfrog.github.io/ensibot">Add Ensi</a><br>
        • <a href="https://aliernfrog.github.io/discord">Discord server</a><br>
        • <a href="https://github.com/ensipedia/ensipedia.github.io">Ensipedia source code</a>
      </p>
    </div>
    
    <TextFieldOutlined
      bind:value={query}
      label="Search" />
    
    <div style:margin-bottom="8px"></div>
  
    <ConnectedButtons>
      <Button label>
        <input type="radio" name="connectedbuttons" value="words" bind:group={category}/>Words
      </Button>
      <Button label>
        <input type="radio" name="connectedbuttons" value="verbs" bind:group={category}/>Verbs
      </Button>
    </ConnectedButtons>
    {#if data != null}
      <br><p1 style:text-align="left">{
        filtered.length ? `${filtered.length} items shown` : "No matches"
      }</p1>
    {/if}
    
    <div style:margin="8px 0px 8px 0px">
      {#if data == null}
        <LoadingIndicator />
      {:else}
        {#each filtered as word}
          <div style:text-align="left" style:margin="8px 0px 8px 0px">
            <Card type="outlined">{word}</Card>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</Lazy>