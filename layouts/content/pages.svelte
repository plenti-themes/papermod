<script>
  import Archive from '../components/archive.svelte';
  import Search from '../components/search.svelte';
  import TagsList from '../components/tagsList.svelte';

  export let page, allContent;
</script>

<section class="isMarginAutoCentered">
  
  <h1>{ page }</h1>

  {#if page === "archive" }
    <Archive {allContent} />
  {/if}

  {#if page === "search" }
    <Search {allContent} />
  {/if}

  {#if page === "tags" }
    <TagsList {allContent} />
  {/if}

  <p><a href=".">Back home</a></p>

</section>

<style>
  section {
    width: 60vh;
    padding-top: 50px;
  }

  h1 {
    font-weight: 500;
    letter-spacing: 1px;
  }
</style>
