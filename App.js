import React from "react"
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Search from "@mui/icons-material/Search";

function App() {
  return (
    <div className="App">
      <Router>
      
      <Home/>
        <Routes>
          <Route path="/search">
            
          </Route>
          <Route path="/">
          

          </Route>

        </Routes>
     </Router>

    </div>
  );
}

export default App;
