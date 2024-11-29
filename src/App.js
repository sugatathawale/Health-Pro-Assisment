import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculatorIVF from './component/CalculatorIVF';
import Result from './component/Result';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
       <Router>
        <Header />
      <Routes>
        <Route path="/" element={<CalculatorIVF />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
