import loadable from "@loadable/component";

const ListPage = loadable(() => import("./List"));
const LoginPage = loadable(() => import("./admin/Login"));
const SignUpPage = loadable(() => import("./admin/SignUp"));
const AdminPage = loadable(() => import("./admin/Index"));
const WritePage = loadable(() => import("./admin/Write"));

export default [
  {
    exact: true,
    path: "/",
    component: ListPage
  },
  {
    exact: true,
    path: "/admin/login",
    component: LoginPage
  },
  {
    exact: true,
    path: "/admin/signup",
    component: SignUpPage
  },
  {
    exact: true,
    path: "/admin",
    component: AdminPage
  },
  {
    exact: true,
    page: "/admin/write",
    component: WritePage
  }
];
