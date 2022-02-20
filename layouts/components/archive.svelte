<script>
  export let allContent;
  let posts = allContent.filter(content => content.type == "posts");
</script>

<main>
  <h4>yeah! archive yo!</h4>
  <ul>
  {#each posts as post}
    {#if post.fields.archived}
      <li>
        <a href="{post.path}">
          {post.fields.title}
        </a>
      </li>
    {/if}
  {/each}
  </ul>
</main>
