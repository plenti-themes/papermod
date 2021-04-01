<script>
	import Grid from '../components/grid.svelte';
	import Uses from "../components/source.svelte";
	import Pager from "../components/pager.svelte";

  import Opening from '../components/opening.svelte';
  import PostCardCollection from '../components/postCardCollection.svelte';

  export let title, intro, components, content, allContent, siteName;

	$: currentPage = content.pager;
	let postsPerPage = 5;
	let allPosts = allContent.filter(content => content.type == "posts");
	let totalPosts = allPosts.length;
	let totalPages = Math.ceil(totalPosts / postsPerPage);
	$: postRangeHigh = currentPage * postsPerPage;
	$: postRangeLow = postRangeHigh - postsPerPage;
</script>

<div class="isFlexColumn">
  <Opening {siteName}/>

  <div class="posts-collection">
    <PostCardCollection items={allPosts} {postRangeLow} {postRangeHigh} />
  </div>

  <Pager {currentPage} {totalPages} />
</div>



<style>
  .posts-collection {
    margin-top: 60px;
    margin-bottom: 50px;
  }
</style>


<!-- <h1>{title}</h1>

<section id="intro">
	{#each intro as paragraph}
		<p>{@html paragraph}</p>
	{/each}
</section>

<div>
	<h3>Recent blog posts:</h3>
	<Grid items={allPosts} {postRangeLow} {postRangeHigh} />
	<br />
</div>
<Pager {currentPage} {totalPages} />

<Uses {content} /> -->
