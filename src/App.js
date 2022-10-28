import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './container/landing-page';
import Worker from './container/worker/Worker';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { gsap } from "gsap";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Worker" element={<Worker />} />
        
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);