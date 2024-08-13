import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing } from '../pages/landing/Landing';
import { Components } from '../components/Components';
import { Typography } from '../components/docs/Typography';
import { Buttons } from '../components/docs/Buttons';
import { Inputs } from '../components/docs/Inputs';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
  },
  {
    path: '/docs',
    element: <Components />,
    children: [
      {
        path: 'typography',
        element: <Typography />,
      },
      {
        path: 'buttons',
        element: <Buttons />,
      },
      {
        path: 'inputs',
        element: <Inputs />,
      },
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
