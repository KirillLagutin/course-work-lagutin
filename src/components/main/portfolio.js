import React from "react";
import works from "../../data/portfolioList";

class Portfolio extends React.Component {

  render() {
    return (

      <section className="portfolio" id="portfolio">
        <div className="wrapper">
          <h2 className="portfolio__title section-title">
              Портфолио
          </h2>
          <h2 className="portfolio__title section-subtitle">
              Есть ссылки на GitHub, и есть на результат
          </h2>

          <div className="portfolio__items">

            {works.map(item => (
              <div key={item.id} className="portfolio__item">    
                <a href={item.url1} className="portfolio__item-link" target="blank">
                    <img src={item.src} className="portfolio__item-pic"/>
                </a>
                <a href={item.url2} className="portfolio__item-link" target="blank">
                    {item.title}
                </a>
              </div>
            ))}

          </div>

          <h4 className="portfolio__button-desc">
              *кнопка "смотреть ещё" - работает)
          </h4>
          <div className="portfolio__button" onClick={this.props.showMore}>
              <a href="#!" className="portfolio__button-link button">Смотреть ещё</a>
          </div>
        </div>
      </section>

    );
  }
}

export default Portfolio;