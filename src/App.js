

import './App.css';

import Content from './components/CardContent/Content';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Modal from './components/modal/Modal';
import NavBar from './components/navBar/NavBar';


function App() {
  return (
    <div>
    <NavBar/>
    <Header/>
    <Content/>
    <Modal/>
    <Footer/>
    </div>
  );
}

export default App;
