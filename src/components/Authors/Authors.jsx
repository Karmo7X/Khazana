import React from 'react'




const authors = [
    { name: "Esther Howard", books: "10 Published Books", image: "01.jpg" },
    { name: "Shikhon Islam", books: "07 Published Books", image: "02.jpg" },
    { name: "Kawser Ahmed", books: "04 Published Books", image: "03.jpg" },
    { name: "Brooklyn Simmons", books: "15 Published Books", image: "04.jpg" },
    { name: "Leslie Alexander", books: "05 Published Books", image: "05.jpg" },
    { name: "Guy Hawkins", books: "12 Published Books", image: "06.jpg" }
  ];


const Authors = () => {
  return (
    <>
    <section className="team-section fix section-padding pt-0 mb-30">
      <div className="container">
        <div className="section-title text-center">
          <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">Featured Author</h2>
          <p className="wow fadeInUp" data-wow-delay=".5s">
            Interdum et malesuada fames ac ante ipsum primis in faucibus. <br />
            Donec at nulla nulla. Duis posuere ex lacus
          </p>
        </div>

        <div className="array-button">
          <button className="array-prev"><i className="fal fa-arrow-left"></i></button>
          <button className="array-next"><i className="fal fa-arrow-right"></i></button>
        </div>

        <div className="swiper team-slider">
          <div className="swiper-wrapper">
            {authors.map((author, index) => (
              <div className="swiper-slide" key={index}>
                <div className="team-box-items">
                  <div className="team-image">
                    <div className="thumb">
                      <img src={`assets/img/team/${author.image}`} alt={`Image of ${author.name}`} />
                    </div>
                    <div className="shape-img">
                      <img src="assets/img/team/shape-img.png" alt="Decorative Shape" />
                    </div>
                  </div>
                  <div className="team-content text-center">
                    <h6><a href="team-details.html">{author.name}</a></h6>
                    <p>{author.books}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Authors