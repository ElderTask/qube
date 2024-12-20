import { BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import { routes } from './routes';

export default function App() {
  return (
    <Router>
      <LoadingScreen />
      <Layout>
        <Routes>
          {routes}
        </Routes>
      </Layout>
    </Router>
  );
}