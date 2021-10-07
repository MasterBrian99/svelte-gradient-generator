<script>
  import { colorArr, pickColorIndex, visibleRender } from "../../store/store";

  // background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
  let rerender = (event) => {
    const id = event.target.value;
    console.log(event.target.innerText);
    pickColorIndex.set($colorArr.indexOf(id));
    visibleRender.set(false);
    setTimeout(() => {
      visibleRender.set(true);
    }, 100);
    console.log($pickColorIndex);
  };
</script>

<div>
  {#each $colorArr as item}
    <button class="color-card" value={item} on:click={rerender}>
      <div class="changed-color" style={`background-color: ${item}`} />
      <div class="color-code ">{item}</div>
    </button>
  {/each}
</div>

<style scoped>
  .color-card {
    width: 11rem;
    height: 3.8rem;
    display: flex;
    align-items: center;
    border: 0.4px solid rgba(119, 116, 116, 0.466);
    border-radius: 1rem;
    margin: 0.5rem 0;
    cursor: pointer;
  }
  .changed-color {
    height: 2.5rem;
    width: 2.5rem;
    margin-left: 1rem;
    border: 0.4px solid rgba(119, 116, 116, 0.466);
    border-radius: 1rem;
  }
  .color-code {
    height: 2.5rem;
    border: 0.4px solid rgba(119, 116, 116, 0.466);
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 55%;
    margin-left: 0.4rem;
    background-color: #fff;
    color: #000;
    font-weight: bold;
  }
</style>
