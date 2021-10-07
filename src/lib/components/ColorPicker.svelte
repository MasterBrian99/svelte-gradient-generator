<script>
  import {
    pickColor,
    colorArr,
    pickColorIndex,
    visibleRender,
  } from "../../store/store";

  let mainIndex;
  $: mainIndex = pickColorIndex;
  console.log(mainIndex);
  let chooseColor;
  console.log($pickColorIndex.toString());
  pickColor.subscribe((value) => {
    chooseColor = value;
  });
  import { HsvPicker } from "svelte-color-picker";

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  let visible = true;

  function colorCallback(rgba) {
    let r = rgba.detail.r;
    let g = rgba.detail.g;
    let b = rgba.detail.b;
    let bw = rgba.detail.a;
    // chooseColor = rgbToHex(`rgba(${r},${g},${b})`);
    chooseColor = rgbToHex(r, g, b);
    pickColor.set(chooseColor);
    // console.log(rgbToHex(r, g, b));
    // console.log($pickColor);
  }
  console.log(visibleRender);
</script>

<div>
  <HsvPicker
    on:colorChange={colorCallback}
    bind:startColor={$colorArr[$mainIndex]}
  />
</div>

<style>
</style>
