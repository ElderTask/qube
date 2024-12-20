import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Waitlist from '../pages/Waitlist';
import Builder from '../pages/Builder';

export const routes = [
  <Route key="home" path="/" element={<Home />} />,
  <Route key="about" path="/about" element={<About />} />,
  <Route key="waitlist" path="/waitlist" element={<Waitlist />} />,
  <Route key="builder" path="/builder" element={<Builder />} />,
];