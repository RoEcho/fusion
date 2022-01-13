import { createApp } from "vue";
import {
  Icon,
  Tabbar,
  TabbarItem,
  Search,
  Swipe,
  SwipeItem,
  Tab,
  Tabs,
  Col,
  Row,
  Sticky,
  ConfigProvider,
  Image as VanImage
} from "vant";

import App from "./App.vue";
import router from "./router";

import "./assets/less/style.less";

const app = createApp(App);

app.use(router);
app.use(ConfigProvider);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Search);
app.use(Swipe);
app.use(SwipeItem);
app.use(Tab);
app.use(Tabs);
app.use(Col);
app.use(Row);
app.use(Sticky);
app.use(VanImage);
app.mount("#app");
