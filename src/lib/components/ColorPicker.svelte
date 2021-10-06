<script>
  import { pickColor } from "../../store/store";

  let chooseColor;

  pickColor.subscribe((value) => {
    chooseColor = value;
  });
  import { HsvPicker } from "svelte-color-picker";

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

  function colorCallback(rgba) {
    let r = rgba.detail.r;
    let g = rgba.detail.g;
    let b = rgba.detail.b;
    let bw = rgba.detail.a;
    chooseColor = `rgba(${r},${g},${b},${bw})`;
    pickColor.set(chooseColor);
    console.log(rgbToHex(r, g, b));
  }
</script>

<div>
  <HsvPicker on:colorChange={colorCallback} startColor={"#FBFBFB"} />
</div>

<style>
</style>
