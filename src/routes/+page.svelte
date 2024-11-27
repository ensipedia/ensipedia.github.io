<script>
  const dataPromise = getData();
  async function getData() {
    const response = await fetch("./data.json");
    return await response.json();
  }
</script>

<h1>Ensipedia</h1>

{#await dataPromise}
  <p>Loading..</p>
{:then data}
  <p style="white-space: pre-line">{data.words.join("\n")}</p>
{:catch error}
  <p style="color: red">Error: {error.message}</p>
{/await}