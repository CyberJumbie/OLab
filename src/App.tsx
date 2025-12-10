import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/templates/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Moonshots from './pages/Moonshots';
import Resources from './pages/Resources';

import InsightsHub from './pages/InsightsHub';
import InsightPost from './pages/InsightPost';
import TestDeck from './pages/TestDeck';
import IntroDeck from './pages/IntroDeck';
import OpportunityLabDeck from './pages/OpportunityLabDeck';
import OpportunityWorkshopsDeck from './pages/OpportunityWorkshopsDeck';
import WomensHealthHackathonDeck from './pages/WomensHealthHackathonDeck';
import Decks from './pages/Decks';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="moonshots" element={<Moonshots />} />
            <Route path="resources" element={<Resources />} />
            <Route path="insights" element={<InsightsHub />} />
            <Route path="insights/:slug" element={<InsightPost />} />
            <Route path="decks" element={<Decks />} />
            <Route path="decks/test" element={<TestDeck />} />
            <Route path="decks/intro" element={<IntroDeck />} />
            <Route path="decks/opportunity-lab" element={<OpportunityLabDeck />} />
            <Route path="decks/opportunity-workshops" element={<OpportunityWorkshopsDeck />} />
            <Route path="decks/womens-health-hackathon" element={<WomensHealthHackathonDeck />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
