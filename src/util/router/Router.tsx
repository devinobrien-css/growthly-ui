import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Landing } from '../../pages/landing/Landing';
import { Components } from '../../components/components';
import { Typography } from '../../components/docs/typography';
import { Buttons } from '../../components/docs/buttons';
import { Inputs } from '../../components/docs/inputs';

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
