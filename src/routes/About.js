import React from 'react'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../about.css'

const About = () => {
    return (
        <>
            <Nav />
            <header className='about__header'>
                <img style={{ width: "100%", height: "500px", objectFit: "cover" }} src="https://images.pexels.com/photos/129574/pexels-photo-129574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="container">
                    <div className="row">
                        <div className="about__header-card">
                            <h1>A Heritage like no other.</h1>
                            <p>Explore what sets us apart from others</p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <section>
                    <div className="container">
                        <div className="about__row">
                            <div className="col">
                                <h2>Our Story</h2>
                                <p>Little Lemon began as a humble family-ran lemon farm on the outskirts of Chicago. My grandparents, who had immigrated to the United States from Greece, started the farm in the early 1900s. They had a deep love for food and hospitality and saw an opportunity to share their passion with the community by growing fresh produce.

                                    My grandparents, along with their children, worked tirelessly to cultivate the lemon trees, ensuring they were always healthy and producing the best fruit possible. It wasn't easy, but their dedication and hard work paid off. Word of their high-quality lemons quickly spread, and before long, the farm became a popular destination for locals and visitors alike.

                                    As the farm continued to grow, my grandparents decided to expand their offerings and opened a small restaurant on the property. They used their fresh lemons to create a variety of mouth-watering dishes, and soon, the restaurant became a local favorite.

                                    My parents eventually took over the farm and restaurant, continuing the tradition of using only the freshest ingredients and providing excellent service to their customers. They expanded the menu to include other locally sourced produce, but the lemons remained a crucial ingredient in many of their dishes.

                                    I grew up on the farm, helping out in the fields and the restaurant. It was hard work, but it was also a labor of love. I saw firsthand the passion and dedication my family put into every aspect of the business. We were committed to providing the best possible experience for our customers, from the food we served to the welcoming atmosphere of the restaurant.

                                    Today, Lemon Lemon is still family-owned and operated, with my siblings and me now running the business. We've continued to expand the farm and restaurant, offering even more fresh, locally sourced produce and innovative dishes that highlight the flavors of our lemons. Despite our success, we remain committed to our roots and the values that have made Lemon Lemon a beloved fixture in the community for generations.</p>
                            </div>
                            <div className="col">
                                <img src="https://images.pexels.com/photos/2088233/pexels-photo-2088233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image" />
                                <img src="https://images.pexels.com/photos/10875184/pexels-photo-10875184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About