import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";

function App () {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
