<script>
  import ColorCode from "./ColorCode.svelte";

  import ColorPicker from "./ColorPicker.svelte";
  import PickedColor from "./PickedColor.svelte";
</script>

<div class="main-position">
  <div class="container main ">
    <ColorPicker />
    <ColorCode />
    <PickedColor />
  </div>
</div>

<style scoped>
  .main {
    padding: 2rem 1rem;
    backdrop-filter: blur(9px) saturate(30%);
    -webkit-backdrop-filter: blur(9px) saturate(30%);
    background-color: rgba(255, 255, 255, 0.62);
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    border: 0.4px solid rgba(119, 116, 116, 0.466);
  }

  .main-position {
    margin: 10rem 0;
  }
</style>
