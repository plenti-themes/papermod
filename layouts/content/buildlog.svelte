<script>
  export let title, description, created;
</script>

<section class="buildLog container isGrid">
  <div class="title">
    <h1>{ title }</h1>
    <p>{ description }</p>
  </div>
  <ul>
    <li>created attributions... <span class="date">/2021.3.31</span></li>
    <li>created buildLog... <span class="date">/2021.3.31</span></li>
    <li>moved assets... <span class="date">/2021.3.31</span></li>
    <li>head, okay... <span class="date">/2021.3.31</span></li>
    <li>navigation, okay... <span class="date">/2021.3.31</span></li>
    <br>

    <li>footer, okay... <span class="date">/2021.3.31</span></li>
    <li>opening, okay... <span class="date">/2021.3.31</span></li>
    <li>tags-page, okay... <span class="date">/2021.3.31</span></li>
    <li>search-page, okay... <span class="date">/2021.3.31</span></li>
    <li>categories-page, okay... <span class="date">/2021.3.31</span></li>
    <br>

    <li>posts layout moved... okay! <span class="date">/2021.3.31</span></li>
    <li>pager... okay! <span class="date">/2021.3.31</span></li>
    <li>posts collections... okay! <span class="date">/2021.3.31</span></li>
    <li>fixed over-all layout... okay! <span class="date">/2021.3.31</span></li>
    <li>archive... need help.</li>
    <br>

    <li>next... git.</li>
  </ul>
</section>

<style>
  .container {
    width:  50vw;
  }

  .buildLog {
    margin-top:  20vh;

    /*background-color:  beige;*/
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "title list";
  }

  .title {
    grid-area: title;
  }

  ul {
    grid-area: list;
    padding-bottom: 100px;
  }

  li {
    font-size: 1.6rem;
    list-style: none;
  }

  .date {
    color: lightskyblue;
    padding-left:  10px;
  }
</style>
