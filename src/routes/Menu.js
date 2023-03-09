import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../menu.css'
import { NavLink } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <Nav />
            <header className='menu__header'>
                <div className="container">
                    <div className="col">
                        <h1>Ready to Order?</h1>
                        <button className='btn'><NavLink to={"/order"}>Order Online</NavLink></button>
                    </div>
                    <img src="https://images.pexels.com/photos/6613042/pexels-photo-6613042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                </div>
            </header>
            <main>
                <div className="container">
                    <h2 style={{ textAlign: "center" }}>Menu</h2>
                    <div className="menu__card">
                        <h2>Appetizers</h2>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Hummus with Pita Chips</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iure, veritatis id, minus distinctio suscipit, excepturi consequatur ducimus esse aperiam eos. Non possimus quas repellendus.</p>
                                    <p>$8.00</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Crispy Calamari with Lemon Aioli</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iure, veritatis id, minus distinctio suscipit, excepturi consequatur ducimus esse aperiam eos. Non possimus quas repellendus.</p>
                                    <p>$12.00</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Garlic Shrimp Skewers</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere iure, veritatis id, minus distinctio suscipit, excepturi consequatur ducimus esse aperiam eos. Non possimus quas repellendus.</p>
                                    <p>$14.00</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Garlic Edamame</h3>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor consequuntur, nam nihil tenetur ipsa id.</p>
                                    <p>$3.00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu__card">
                        <h2>Salads</h2>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Greek Salad with Lemon Vinaigrette</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo ratione illum consectetur totam sit.</p>
                                    <p>$10</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Arugula Salad with Parmesan and Pine Nuts</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, fugit. Ipsam voluptas iusto necessitatibus quam.</p>
                                    <p>$12</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Roasted Beet Salad with Lemon Honey Dressing</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores iste voluptates aliquid eveniet perferendis?</p>
                                    <p>$14</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu__card">
                        <h2>Entrées</h2>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Grilled Lemon Chicken with Garlic and Rosemary</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate illo ratione illum consectetur totam sit.</p>
                                    <p>$18</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Pepper Salmon with Asparagus and Quinoa</h3>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, fugit. Ipsam voluptas iusto necessitatibus quam.</p>
                                    <p>$24</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Ricotta Ravioli with Spinach and Sundried Tomatoes</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores iste voluptates aliquid eveniet perferendis?</p>
                                    <p>$16</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Mediterranean Grilled Chicken</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores iste voluptates aliquid eveniet perferendis?</p>
                                    <p>$12</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Falafel Wrap</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maiores iste voluptates aliquid eveniet perferendis?</p>
                                    <p>$8</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu__card">
                        <h2>Desserts</h2>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Blueberry Lemon Tart</h3>
                                    <p>Buttery tart shell filled with blueberry lemon curd and topped with fresh blueberries</p>
                                    <p>$6.99</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Poppy Seed Cake</h3>
                                    <p>Moist lemon cake with poppy seeds and a lemon glaze</p>
                                    <p>$4.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Strawberry Lemon Shortcake</h3>
                                    <p>Buttery shortcake biscuit with lemon whipped cream and fresh strawberries</p>
                                    <p>$5.99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu__card">
                        <h2>Drinks</h2>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemonade</h3>
                                    <p>Classic lemonade made with freshly squeezed lemons and cane sugar</p>
                                    <p>$2.99</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Sparkling Lemonade</h3>
                                    <p>Bubbly lemonade with a hint of effervescence</p>
                                    <p>$3.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Iced Tea</h3>
                                    <p>Refreshing iced tea with a squeeze of fresh lemon</p>
                                    <p>$2.99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="menu__card">
                        <h2>Alcoholic Beverages</h2>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Drop Martini</h3>
                                    <p>Vodka, triple sec, fresh lemon juice, and simple syrup</p>
                                    <p>$9.99</p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Beer</h3>
                                    <p>Pale ale with a refreshing lemon twist</p>
                                    <p>$5.99</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="menu__item">
                                    <h3>Lemon Drop Shot</h3>
                                    <p>Vodka, lemon juice, and sugar</p>
                                    <p>$4.99</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer />
        </>
    )
}

export default Menu