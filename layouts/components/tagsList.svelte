<script>
  export let allContent;
  let tags = allContent.filter(content => content.type == "tags");
  let posts = allContent.filter(content => content.type == "posts");

  let tagList = [];
  tags.forEach(tag => {
    let count = 0;
    let tagName = tag.filename.replace(".json", "");
    posts.forEach(post => {
      if (post.fields.tags && post.fields.tags.includes(tagName)) {
        count++;
      }
    });
    tagList.push({
      name: tagName,
      path: tag.path,
      count: count  
    });
  });
</script>

<ul>
  {#each tagList as tag}
    <li><a href="{tag.path}">{tag.name}<sup>{tag.count}</sup></a></li>  
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
