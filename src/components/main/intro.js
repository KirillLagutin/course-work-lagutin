import React from "react";
import kirill from "../../img/Kirill.jpg";

function Intro() {
  return (
    <div className="intro wrapper" id="intro">

      <div className="intro__inner">

        <div className="intro__header">

          <h1 className="intro__header__title">
            Здравствуйте, <br/>я Кирилл, <br/>
            <span className="intro__header__title-prof">
              Веб-разработчик
            </span>
          </h1>

          <a href="#contacts" className="intro__header__title-button button js-scroll">
            Связаться со мной
          </a>

        </div>
        
        <div className="intro__avatar">
            <img src={kirill} alt="Kirill" className="intro__avatar__photo"/>
        </div>

      </div>

    </div>
  );
}

export default Intro;