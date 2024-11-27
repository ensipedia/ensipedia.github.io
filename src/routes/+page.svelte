<script>
  import { onMount } from "svelte";
  import Lazy from "svelte-lazy";
  import {
    Card,
    CircularProgressIndeterminate,
    SegmentedButtonContainer,
    SegmentedButtonItem,
    TextFieldOutlined
  } from "m3-svelte";
  
  let data;
  async function getData() {
    const response = await fetch("./data.json");
    data = await response.json();
    return data;
  }
  
  let category = "words";
  let query = "";
  let filtered;
  $: filtered = data?.[category]?.filter?.(w => w.toLowerCase().includes(query.toLowerCase())) ?? [];
  
  onMount(() => getData());
</script>

<Lazy>
  <div style:text-align="center">
    <h1>Ensipedia</h1>
  
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
      <br><br><p1 style:text-align="left">{
        filtered.length ? `${filtered.length} items shown` : "No matches"
      }</p1>
    {/if}
    
    {#if data == null}
      <br><CircularProgressIndeterminate />
    {:else}
      <div style:text-align="left">
        {#each filtered as word}
          <br><Card type="outlined">{word}</Card>
        {/each}
      </div>
    {/if}
  </div>
</Lazy>