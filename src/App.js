import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


// IMPORT PAGES
import Home from './routes/Home';

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </>
  );
}

export default App;