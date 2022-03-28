import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'

import './App.css';
//HelperClasse
import Container from './components/layout/Container';

//LAYOUTS
import Footer from './components/layout/Footer/Footer';
import NavBar from './components/layout/NavBar/NavBar';

//PAGINAS----------
import Contato from './components/pages/Contact/Contato';
import Home from './components/pages/Home/Home';
import NewProject from './components/pages/NewProject/NewProject';
import Sobre from './components/pages/About/Sobre';
import Project from './components/pages/Project/Projects';

//CONTAINER 


function App() {
  return (

    <Router>
      <NavBar />
  
      <Container customClass='min-height'>
        <Routes>

          <Route exact path="/" element={<Home />} ></Route>
          <Route exact path="/project" element={<Project />} ></Route>
          <Route exact path="/contato" element={<Contato />}></Route>
          <Route exact path="/sobre" element={<Sobre />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>

        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
