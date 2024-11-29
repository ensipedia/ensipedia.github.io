<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import {
    Button,
    Card,
    CircularProgressIndeterminate,
    SegmentedButtonContainer,
    SegmentedButtonItem,
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
    
    <div
      style:text-align="left"
      style:margin="8px 0px 24px 0px"
      style:border-radius="28px"
      style:padding="1px 24px 1px 24px"
      style:background="rgb(var(--m3-scheme-surface-container-low))">
      <p>
        • <a href="https://aliernfrog.github.io/ensibot">Add Ensi</a><br>
        • <a href="https://aliernfrog.github.io/discord">Discord server</a><br>
        • <a href="https://github.com/aliernfrog/ensipedia">Ensipedia source code</a>
      </p>
    </div>
    
    <a href="starboard" style:text-decoration="none">
      <Button type="elevated">⭐ Starboard</Button>
    </a><br><br>
    
    <TextFieldOutlined
      bind:value={query}
      name="Search" />
  
    <SegmentedButtonContainer>
      <input type="radio" id="words" value="words" bind:group={category} />
      <SegmentedButtonItem input="words">Words</SegmentedButtonItem>
      <input type="radio" id="verbs" value="verbs" bind:group={category} />
      <SegmentedButtonItem input="verbs">Verbs</SegmentedButtonItem>
    </SegmentedButtonContainer>
    {#if data != null}
      <br><p1 style:text-align="left">{
        filtered.length ? `${filtered.length} items shown` : "No matches"
      }</p1>
    {/if}
    
    <div style:margin="8px 0px 8px 0px">
      {#if data == null}
        <CircularProgressIndeterminate />
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