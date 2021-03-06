const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Login.vue") },
      { path: "home", component: () => import("pages/Index.vue") },
      { path: "about", component: () => import("pages/About.vue") },
      { path: "cakes", component: () => import("pages/Cakes.vue") },
      { path: "cart", component: () => import("pages/Cart.vue") }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
