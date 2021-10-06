<script lang="ts">
  import { Router, Link, Route } from "svelte-navigator";
  import About from "./lib/About.svelte";
  import Home from "./lib/Home.svelte";
</script>

<main>
  <h1 class="hello">Hello Typescript!</h1>
  <Router>
    <nav>
      <Link to="/">Home</Link>
      <Link to="about">About</Link>
      <Link to="blog">Blog</Link>
    </nav>
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about" >
        <About/>
      </Route>
   
    </div>
  </Router>

</main>

<style scoped>
   main{
     height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
   }

</style>
