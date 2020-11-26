import { createApp, defineComponent } from "vue";
import "./index.css";

const App = defineComponent(() => {
  return () => {
    return <div></div>;
  };
});

createApp(App).mount("#app");
