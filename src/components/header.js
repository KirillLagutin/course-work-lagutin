import React from "react";

class Header extends React.Component {
  
  render() {
      return (

    <header className="header">

    <div className="wrapper">

      <div className="header__inner" onClick={this.props.scrollToAnchors}>

        <div className="header__logo">
          <a href="#intro" className="header__logo__link js-scroll">Кирилл</a>
        </div>

        <nav className="header__nav">

          <ul className="header__list">

            <li className="header__item">
						  <a href="#about" className="header__link js-scroll">Обо мне</a>
					  </li>
            <li className="header__item">
						  <a href="#portfolio" className="header__link js-scroll">Портфолио</a>
            </li>
            <li className="header__item">
						  <a href="#contacts" className="header__link js-scroll">Контакты</a>
					  </li>

					  <div className="switch" onClick={this.props.switchTheme}>
              <li className="header__item-switch">
						    <a href="#!" className="header__link-switch"></a>
					    </li>
              <li className="header__item">
						    <a href="#!" className="header__link">Тема</a>
					    </li>
					  </div>

          </ul>

          <div className="header__nav-close" onClick={this.props.closeBurgerHandler}>
              <span className="header__nav-close-line"></span>
              <span className="header__nav-close-line"></span>
          </div>

        </nav>

        <div className="header__burger burger" onClick={this.props.burgerHandler}>
          <span className="burger__line burger__line_first"></span>
          <span className="burger__line burger__line_second"></span>
          <span className="burger__line burger__line_third"></span>
        </div>

      </div>

    </div>

    </header>
    
  );
  }
}

export default Header;