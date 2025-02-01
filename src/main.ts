import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Reveal from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown.esm.js";
import RevealHighlight from "reveal.js/plugin/highlight/highlight.esm.js";
import RevealNotes from "reveal.js/plugin/notes/notes.esm.js";
import "/node_modules/reveal.js/dist/reveal.css";
import "/node_modules/reveal.js/dist/theme/solarized.css";
import "/node_modules/reveal.js/plugin/highlight/monokai.css";

let deck = new Reveal({
  hash: true,
  navigationMode: "linear",
  plugins: [RevealMarkdown, RevealHighlight, RevealNotes],
});
deck.initialize();
createApp(App).mount("#app");
