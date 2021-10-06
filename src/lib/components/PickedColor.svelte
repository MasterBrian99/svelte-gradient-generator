<script>
  import { colorArr } from "../../store/store";

  const addToArray = () => {
    $colorArr = [
      ...$colorArr,
      {
        name: Math.random(),
      },
    ];
    console.log($colorArr);
  };
</script>

<div>
  {#each $colorArr as item}
    <p>
      {item}
    </p>
  {/each}

  <h1>Hello</h1>
  <button on:click={addToArray}>Click</button>
</div>

<style>
</style>
