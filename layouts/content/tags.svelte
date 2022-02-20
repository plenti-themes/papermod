<script>
    export let content, allContent;
    let tagName = content.filename.replace(".json", "");
</script>

<section>
    <h1>{tagName}</h1>

    <ul>
    {#each allContent as content}
        {#if content.fields.tags && content.fields.tags.includes(tagName)}
            <li><a href="{content.path}">{content.fields.title}</a></li>
        {/if}
    {/each}
    </ul>
    <p><a href="tags">Back to Tags</a></p>
</section>