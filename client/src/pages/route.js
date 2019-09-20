import loadable from "@loadable/component";

const ListPage = loadable(() => import("./List"));

export default [
  {
    exact: true,
    path: "/",
    component: ListPage
  }
];
