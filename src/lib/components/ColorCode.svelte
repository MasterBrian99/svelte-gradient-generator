<script>
  import { colorArr, pickColor } from "../../store/store";
  const addToArray = () => {
    $colorArr = [...$colorArr, $pickColor];
    console.log($colorArr);
  };
</script>

<div>
  <h1>Hello</h1>
  <button on:click={addToArray}>Click</button>
</div>

<style>
</style>
