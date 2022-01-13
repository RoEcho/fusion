import * as VueRouter from "vue-router";

// 1. 定义路由组件.
// 也可以从其他文件导入
const Tabs = () => import("../views/Tabs.vue");
const Home = () => import("../views/Home.vue");
const Classify = () => import("../views/Classify.vue");
const ShoppingCart = () => import("../views/ShoppingCart.vue");
const My = () => import("../views/My.vue");

const GoodsDetail = () => import("../views/GoodsDetail.vue");

const Login = { template: "<div>Login</div>" };

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  {
    path: "/",
    redirect: "home",
    component: Tabs,
    children: [
      { path: "home", component: Home },
      { path: "classify", component: Classify },
      { path: "shopping-cart", component: ShoppingCart },
      { path: "my", component: My },
    ],
  },
  { path: "/goods-detail", component: GoodsDetail },
  { path: "/login", component: Login },
];

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = VueRouter.createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: VueRouter.createWebHashHistory(), // createWebHistory createWebHashHistory
  routes, // `routes: routes` 的缩写
});

export default router;
