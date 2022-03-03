import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

export const publicRoutes = [
  {
    path: "/",
    Component: <Home />,
  },
];

export const privateRoutes = [
  {
    path: "/",
    Component: <Home />,
  },
  {
    path: "/profile",
    Component: <Profile />,
  },
];
