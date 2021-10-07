<script>
  import { pickColor, colorArr } from "../../store/store";

  import ColorCard from "../components/ColorCard.svelte";
  console.log(pickColor);

  let bgColor = "";
  bgColor = `linear-gradient(300deg,${$colorArr.toString()})`;
  console.log(bgColor);
</script>

<div class="main" style={`background: ${bgColor}`}>
  <ColorCard />
</div>

<style scoped>
  .main {
    min-height: 100vh;
    padding: 10rem 0;
    background-color: rgba(11, 2, 1, 1);
  }
</style>
