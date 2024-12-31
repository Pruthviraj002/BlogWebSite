import React from 'react'

function Services() {
    return (
        <div>
            <body>
                <header>
                    <h1 className="site-heading text-center text-faded d-none d-lg-block">
                        <span className="site-heading-upper text-primary mb-3">A Free Bootstrap Business Theme</span>
                        <span className="site-heading-lower">Business Casual</span>
                    </h1>
                </header>
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ms-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper">Blended to Perfection</span>
                                        <span className="section-heading-lower">Coffees & Teas</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-01.jpg" alt="..." />
                            <div className="product-item-description d-flex me-auto">
                                <div className="bg-faded p-5 rounded"><p className="mb-0">We take pride in our work, and it shows. Every time you order a beverage from us, we guarantee that it will be an experience worth having. Whether it's our world famous Venezuelan Cappuccino, a refreshing iced herbal tea, or something as simple as a cup of speciality sourced black coffee, you will be coming back for more.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex me-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper">Delicious Treats, Good Eats</span>
                                        <span className="section-heading-lower">Bakery & Kitchen</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-02.jpg" alt="..." />
                            <div className="product-item-description d-flex ms-auto">
                                <div className="bg-faded p-5 rounded"><p className="mb-0">Our seasonal menu features delicious snacks, baked goods, and even full meals perfect for breakfast or lunchtime. We source our ingredients from local, oragnic farms whenever possible, alongside premium vendors for specialty goods.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="page-section">
                    <div className="container">
                        <div className="product-item">
                            <div className="product-item-title d-flex">
                                <div className="bg-faded p-5 d-flex ms-auto rounded">
                                    <h2 className="section-heading mb-0">
                                        <span className="section-heading-upper">From Around the World</span>
                                        <span className="section-heading-lower">Bulk Speciality Blends</span>
                                    </h2>
                                </div>
                            </div>
                            <img className="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="assets/img/products-03.jpg" alt="..." />
                            <div className="product-item-description d-flex me-auto">
                                <div className="bg-faded p-5 rounded"><p className="mb-0">Travelling the world for the very best quality coffee is something take pride in. When you visit us, you'll always find new blends from around the world, mainly from regions in Central and South America. We sell our blends in smaller to large bulk quantities. Please visit us in person for more details.</p></div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <footer className="footer text-faded text-center py-5">
                    <div className="container"><p className="m-0 small">Copyright &copy; Your Website 2023</p></div>
                </footer> */}
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
                <script src="js/scripts.js"></script>
            </body>
        </div>
    )
}

export default Services