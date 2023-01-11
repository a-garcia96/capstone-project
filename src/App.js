import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Card from './components/Card';
import greekSalad from './assets/greek salad.jpg'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main>
        <div className="container">
          <section className='specials'>
            <div className="row">
              <div className="specials__col-1">
                <h2 className='specials__heading'>This weeks specials!</h2>
              </div>
              <div className="specials__col-2">
                <button className='btn specials__btn'><a>Online Menu</a></button>
              </div>
            </div>
            <div className="row">
              <Card recipeTitle="Greek Salad"
                recipePrice="12.99"
                recipeDesc="The famouse greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese style feta cheese, garnished with crunchy garlic and rosemary croutons."
                recipeImg={greekSalad}
              />
            </div>
          </section>
        </div>
      </Main>
      <Footer />
    </>
  );
}

export default App;