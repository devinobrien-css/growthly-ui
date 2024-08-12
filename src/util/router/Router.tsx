import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Landing } from '../../pages/landing/Landing';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Landing />
    ),
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
