import {Route, Routes} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Dashboard/>}/>
        </Routes>
      </>
  );
}

export default App;
