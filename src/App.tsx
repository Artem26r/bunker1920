import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import { Main } from "pages/Main";
import { Container } from "components/Container";

function App() {
  return (
    <>
      {/* <div className="overlay"></div>
      <div className="scanline"></div> */}
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
