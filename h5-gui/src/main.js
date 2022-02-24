import { createApp } from "vue";
import {
  Icon,
  Checkbox,
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
  SubmitBar,
  ConfigProvider,
  Image as VanImage,
  Lazyload,
  ActionBar, 
  ActionBarIcon, 
  ActionBarButton,
  NavBar,
  Sidebar, 
  SidebarItem,
  Stepper
} from "vant";

import App from "./App.vue";
import router from "./router";

import "./assets/less/style.less";

const app = createApp(App);

app.use(router);
app.use(ConfigProvider);
app.use(Icon);
app.use(Checkbox);
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
app.use(SubmitBar);
app.use(VanImage);
app.use(Lazyload);
app.use(ActionBar);
app.use(ActionBarIcon);
app.use(ActionBarButton);
app.use(NavBar);
app.use(Sidebar);
app.use(SidebarItem);
app.use(Stepper);
app.mount("#app");
