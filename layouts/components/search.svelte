<script>
  export let allContent;
  let posts = allContent.filter(content => content.type == "posts");

  let searchText;
  let results = [];
  const search = e => {
    results = [];
    posts.forEach(post => {
      if (post.fields.title.toLowerCase().includes(searchText.toLowerCase()) && searchText.length > 0) {
        results.push({
          title: post.fields.title,
          path: post.path
        });
      }
    });
  }
</script>

<div id="searchbox">
  <input
    bind:value={searchText}
    on:keyup={search}
    class="searchInput"
    autofocus=""
    placeholder="search posts ↵"
    aria-label="search"
    type="search" />
  <ul id="searchResults" aria-label="search results">
    {#each results as result}
      <li><a href="{result.path}">{result.title}</a></li>
    {/each}
  </ul>
</div>

<style>
  .searchInput {
    padding: 4px 10px;
    width: 100%;
    color: var(--primary);
    font-weight: 700;
    border: 2px solid #d5d5d5;
    border-radius: 10px;
  }

  .searchInput:focus {
    border: 2px solid #888;
  }
</style>
