import { BrowserRouter, Route, Routes, Navigate, Link } from 'react-router-dom';
import Chocolate from './Chocolate';
import Chips from './Chips';
import GranolaBar from './GranolaBar';
import VendingMachine from './VendingMachine';

/**
 * No props
 * No state
 *
 * App -> {Chocolate, Chips, GranolaBar, VendingMachine}
 */
function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Link to="/home">Home</Link>
        <Routes>
          <Route path="/chocolate" element={<Chocolate />} />
          <Route path="/chips" element={<Chips />} />
          <Route path="/granola-bar" element={<GranolaBar />} />
          <Route path="/" element={<VendingMachine />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
