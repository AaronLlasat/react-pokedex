import './App.css';
import Home from './components/routes/home/home.component';
import Navigation from './components/routes/navigation/navigation.component';
import { Routes, Route } from 'react-router-dom';
import Authentication from './components/routes/authentication/authentication.component';
import Pokedex from './components/routes/pokedex/pokedex.component';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="pokedex" element={<Pokedex />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>

  );
}

export default App;
