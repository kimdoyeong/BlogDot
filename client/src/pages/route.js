import loadable from "@loadable/component";

const ListPage = loadable(() => import("./List"));
const AdminPage = loadable(() => import("./admin/Login"));
const SignUpPage = loadable(() => import("./admin/SignUp"));

export default [
  {
    exact: true,
    path: "/",
    component: ListPage
  },
  {
    exact: true,
    path: "/admin/login",
    component: AdminPage
  },
  {
    exact: true,
    path: "/admin/signup",
    component: SignUpPage
  }
];
