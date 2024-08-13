import { ToastContainer } from 'react-toastify';
import { initializeChartConfig } from './util/chart.config';
import { Router } from './util/Router';
import { Navigation } from './components/Navigation';

initializeChartConfig();

const App = (): JSX.Element => {
  return (
    <>
      <Navigation />
      <Router />
      <ToastContainer
        newestOnTop
        autoClose={3000}
        position='bottom-right'
        toastClassName='rounded-lg dark:bg-slate-800 dark:text-white'
        closeButton={true}
      />
    </>
  );
};
export default App;
