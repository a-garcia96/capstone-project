import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Card from './components/Card';
import greekSalad from './assets/greek salad.jpg'
import bruchetta from './assets/bruchetta.jpg'
import lemondDessert from './assets/lemonDessert.jpg'

import portrait1 from './assets/portrait1.png';
import portrait2 from './assets/portrait2.png';
import portrait3 from './assets/portrait3.png';
import portrait4 from './assets/portrait4.png';
import crew1 from './assets/crew1.jpg'
import crew2 from './assets/crew2.jpg'

function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main>
        <section className='specials'>
          <div className='container'>
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
              <Card recipeTitle="Bruchetta"
                recipePrice="5.99"
                recipeDesc="Our Bruchetta is made from grilled bread that has been smeared with garlic and seasond with salt and olive oil."
                recipeImg={bruchetta}
              />
              <Card recipeTitle="Lemon Dessert"
                recipePrice="5.00"
                recipeDesc="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                recipeImg={lemondDessert}
              />
            </div>
          </div>
        </section>
        <section className='testimonials'>
          <div className="container">
            <h2>Testimonials</h2>
            <div className="testimonials__row">
              <div className="testimonials__col">
                <div className="testimonials__card">
                  <p>"I can't get enough of Little Lemon's zesty flavors! From the cozy atmosphere to the delicious food, it's the perfect spot for any occasion."</p>
                  <div className="testimonials__card--author">
                    <img className='testimonials__card--portrait' src={portrait1} alt="portrait of a client" />
                    <p>Scott</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__col">
                <div className="testimonials__card">
                  <p>"The best brunch I've had in ages! Little Lemon has such a refreshing take on classic dishes, and the service is always impeccable."</p>
                  <div className="testimonials__card--author">
                    <img className='testimonials__card--portrait' src={portrait3} alt="portrait of a client" />
                    <p>Jasmine</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__col">
                <div className="testimonials__card">
                  <p>"Little Lemon's commitment to using fresh, local ingredients is evident in every dish. The menu is diverse, and the prices are incredibly reasonable."</p>
                  <div className="testimonials__card--author">
                    <img className='testimonials__card--portrait' src={portrait2} alt="portrait of a client" />
                    <p>Andrea</p>
                  </div>
                </div>
              </div>
              <div className="testimonials__col">
                <div className="testimonials__card">
                  <p>"If you're looking for a new go-to spot, Little Lemon is it. The cocktails are top-notch, and the staff is incredibly friendly and knowledgeable."</p>
                  <div className="testimonials__card--author">
                    <img className='testimonials__card--portrait' src={portrait4} alt="portrait of a client" />
                    <p>Stefan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="location">
          <div className="container">
            <div className="location__row">
              <div className="location__col">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga temporibus ratione earum quibusdam deleniti dicta quisquam labore iure sequi. Inventore aspernatur corporis doloribus enim dicta rem fugiat id nostrum, ab quasi tempora quibusdam distinctio culpa nulla eligendi ratione iure pariatur corrupti similique! Nihil itaque quidem, incidunt corporis quos veritatis possimus.</p>
              </div>
              <div className="location__col">
                <img className='location__image1' src={crew1} alt="" />
                <img className='location__image2' src={crew2} alt="" />
              </div>
            </div>
          </div>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default App;