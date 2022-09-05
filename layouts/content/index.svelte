<script>
	import Pager from "../components/pager.svelte";
	import Opening from '../components/opening.svelte';
	import PostCardCollection from '../components/postCardCollection.svelte';

	export let content, allContent, siteName;

	$: currentPage = content.pager ? content.pager : 1;
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
