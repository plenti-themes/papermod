<script>
  export let allContent;
</script>

<main>
  <h4>yeah! archive yo!</h4>


  <ul>
  {#each allContent as content}
    {#if content.type === posts}
      <li>
        <a href="">
          {content.path}
        </a>
      </li>
    {/if}
  {/each}
  </ul>
</main>
