import "./styles/reset.css";
import "./styles/grid.css";
import "./styles/main.css";

import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

export default app;
