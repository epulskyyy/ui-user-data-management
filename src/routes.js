import React from 'react';

// const Button = React.lazy(() => import('./components/asset/button/Button'));
// const Dashboard = React.lazy(() => import('./components/dashboard/Dashboard'));
// const Form = React.lazy(() => import('./components/asset/form/Form'));
const Login = React.lazy(() => import('./components/auth/login/Login'));
const User = React.lazy(() => import('./components/user/User'));
const Profession = React.lazy(() =>
  import('./components/profession/Profession')
);
const Education = React.lazy(() => import('./components/education/Education'));
const Home = React.lazy(() => import('./components/Home/Home'));
export const protectTedRoute = [
  {
    path: '/',
    exact: true,
    component: <div></div>,
  },
  {
    component: <div></div>,
  },
];
export const routes = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/admin/user',
    component: User,
  },
  {
    path: '/admin/profesi',
    component: Profession,
  },
  {
    path: '/admin/pendidikan',
    component: Education,
  },
];
