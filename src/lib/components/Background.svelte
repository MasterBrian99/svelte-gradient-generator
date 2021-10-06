<script>
  import { pickColor } from "../../store/store";

  import ColorCard from "../components/ColorCard.svelte";
  console.log(pickColor);
</script>

<div class="main" style={`background-color: ${$pickColor}`}>
  <ColorCard />
</div>

<style scoped>
  .main {
    min-height: 100vh;
    padding: 10rem 0;
    background-color: rgba(11, 2, 1, 1);
  }
</style>
