<script>
  import {
    Card,
    CircularProgressIndeterminate,
    SegmentedButtonContainer,
    SegmentedButtonItem,
    TextFieldOutlined
  } from "m3-svelte";
  
  let data;
  let dataPromise = getData();
  async function getData() {
    const response = await fetch("./data.json");
    data = await response.json();
    return data;
  }
  
  let category = "words";
  let query = "";
  let filtered;
  $: filtered = data?.[category]?.filter?.(w => w.toLowerCase().includes(query.toLowerCase())) ?? [];
</script>

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
  {#if filtered != null}
    <br><br><p1>{`${filtered.length} items shown`}</p1>
  {/if}
</div>

<div style:text-align="center">
  {#await dataPromise}
    <br><CircularProgressIndeterminate />
  {:then}
    {#if filtered.length > 0}
      {#each filtered as word}
        <br>
        <Card type="outlined">
          {word}
        </Card>
      {/each}
    {:else}
      <br><b>No matches</b>
    {/if}
  {:catch error}
    <p style="color: red">Error: {error.message}</p>
  {/await}
</div>