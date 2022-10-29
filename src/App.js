import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './container/landing-page';
import Worker from './container/worker/Worker';

import 'aos/dist/aos.css';
import './App.css';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/Worker" element={<Worker />} />

        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);