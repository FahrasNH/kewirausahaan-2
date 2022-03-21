import LandingPage from "../pages/LandingPage";

const routeList = [
  {
    name: "Landing Page",
    path: "/",
    exact: true,
    component: <LandingPage />,
    permission: false,
  },
];

export default routeList;
