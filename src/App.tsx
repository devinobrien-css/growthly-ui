import { ToastContainer } from 'react-toastify';
import { initializeChartConfig } from './util/chart.config';
import { Router } from './util/Router';
import { Navigation } from './components/Navigation';

initializeChartConfig();

const App = (): JSX.Element => {
  return (
    <>
      <Router />
      <ToastContainer
        newestOnTop
        autoClose={3000}
        position='bottom-right'
        toastClassName='rounded-lg'
        closeButton={true}
      />
    </>
  );
};
export default App;
