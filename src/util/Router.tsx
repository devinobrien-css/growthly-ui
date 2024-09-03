import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Components } from '../components/Components';
import { Typography } from '../components/docs/Typography';
import { Buttons } from '../components/docs/Buttons';
import { Inputs } from '../components/docs/Inputs';
import { Pricing } from '../pages/Pricing/Pricing';
import { Root } from '../pages/Root';
import { Landing } from '../pages/Landing/Landing';
import { Thanks } from '../pages/Thanks/Thanks';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Root />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/pricing',
        element: <Pricing />,
      },
      {
        path: '/thanks',
        element: <Thanks />,
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
    ],
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
