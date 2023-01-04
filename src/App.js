import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Nav/>
      <Header />
      <Main>
        <h1>This is the main content!</h1>
      </Main>
      <Footer />
    </>
  );
}

export default App;