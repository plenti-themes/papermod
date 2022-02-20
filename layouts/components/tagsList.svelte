<script>
  export let allContent;
  let tags = allContent.filter(content => content.type == "tags");
</script>

<ul>
  {#each tags as tag}
    <li><a href="{tag.path}">{tag.filename.replace(".json", "")}<sup>3</sup></a></li>  
  {/each}
</ul>


<style>
  ul {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 10px;
    background-color: #cecece;
    padding: 20px 15px 10px 15px;
    border-radius: 8px;
  }

  sup {
    font-size: 1.5rem;
    font-weight: 500;
    padding-left: 5px;
  }

  a {
    text-decoration: none;
    color: black;
  }

</style>
