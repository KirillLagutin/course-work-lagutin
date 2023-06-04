import React from "react";
import "./css/style.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main/main";

class App extends React.Component {

  render() {
    return (
      <div onWheel={this.backgroundMenu}>

        <Header 
          switchTheme={this.switchTheme}
          burgerHandler={this.burgerHandler}
          closeBurgerHandler={this.closeBurgerHandler}
          scrollToAnchors={this.scrollToAnchors}
        />
        <Main showMore={this.showMore}/>
        <Footer />
        
      </div>
    );
  }

  // Смена цвета меню
  backgroundMenu() {

    const header = document.querySelector('.header');

    window.onscroll = () => {
      if (window.pageYOffset > 50) {
          header.classList.add('header_active');
      }
      else {
          header.classList.remove('header_active');
      }
    };
  }

  // Открыть бургер-меню
  burgerHandler() {

    const menu = document.querySelector('.header__nav');
    const menuLinks = document.querySelectorAll('.header__link');

    menu.classList.add('header__nav_active');

    if (window.innerWidth < 768) {
        menuLinks.forEach(link => link.addEventListener('click', () => {
            menu.classList.remove('header__nav_active');
        }));
    }
  }

  // Закрыть бургер-меню
  closeBurgerHandler() {

    const menu = document.querySelector('.header__nav');
    menu.classList.remove('header__nav_active');
  }

  // Переключатель темы (тёмная/светлая)
  switchTheme() {

    const body = document.querySelector('body');
    body.classList.toggle('switchMode')
  }

  // Кнопка "Показать ещё работы"
  showMore() {

    const showMore = document.querySelector('.portfolio__button');
    const descButton = document.querySelector('.portfolio__button-desc');
    const itemLength = document.querySelectorAll('.portfolio__item').length;
    let items = 6;

    items += 6;
    const array = Array.from(document.querySelector('.portfolio__items').children);
    const visibleItems = array.slice(0, items);

    visibleItems.forEach(el => el.classList.add('is-visible'));

    if(visibleItems.length === itemLength) {
        showMore.style.display = 'none';
        descButton.style.display = 'none';
    }
  }

  //Плавная прокрутка до якоря
  scrollToAnchors() {
  
    const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };

      requestAnimationFrame(animation);
    };

    const links = document.querySelectorAll('.js-scroll');
    links.forEach(each => {
        each.addEventListener('click', function () {
            const currentTarget = this.getAttribute('href');
            smoothScroll(currentTarget, 1000);
        });
    });
  }
}

export default App;