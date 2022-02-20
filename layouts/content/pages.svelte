<script>
  import Uses from "../components/source.svelte";
  import Archive from '../components/archive.svelte';
  import CategoriesList from '../components/categoriesList.svelte';
  import Search from '../components/search.svelte';
  import TagsList from '../components/tagsList.svelte';

  export let page, title, description, content, allContent;
</script>

<section class="isMarginAutoCentered">
  
  <h1>{ page }</h1>

  {#if page === "archive" }
    <Archive allContent />
  {/if}

  {#if page === "search" }
    <Search />
  {/if}

  {#if page === "tags" }
    <TagsList {allContent} />
  {/if}

  {#if page === "categories" }
    <CategoriesList />
  {/if}

  <p><a href="/">Back home</a></p>

</section>

<style>
  section {
    /*background-color: beige;*/
    width: 60vh;
    padding-top: 50px;
  }

  h1 {
    font-weight: 500;
    letter-spacing: 1px;
  }
</style>





<!-- <h1>{title}</h1>

<div>
  {#each description as paragraph}
    <p>{@html paragraph}</p>
  {/each}
</div>

<Uses {content} />

<p><a href="/">Back home</a></p>
 -->
