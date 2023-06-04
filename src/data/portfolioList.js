import calculatorReact from "../img/CalculatorReact.jpeg";
import cars from "../img/Cars.jpg";
import drums from "../img/Drums.jpeg";
import kvartal from "../img/Kvartal.jpg";
import mailKit from "../img/MailKit.jpg";
import menuRestaurant from "../img/MenuRestaurant.jpg";
import mouseMove from "../img/MouseMove.jpeg";
import piano from "../img/Piano.jpeg";
import portfolio from "../img/Portfolio.jpeg";
import shopOnline from "../img/ShopOnline.jpg";
import travelOdigo from "../img/TravelOdigo.jpeg";

// Массив с портфолио
const works = [
  {
    id: '1', title: 'Меню для ресторана (FastApi / Docker)', src: menuRestaurant, 
    url1: 'https://github.com/KirillLagutin/restaurant_menu', 
    url2: 'https://github.com/KirillLagutin/restaurant_menu',
  },
  {
    id: '2', title: 'Онлай-магазин (ASP.NET / Blazor)', src: shopOnline, 
    url1: 'https://github.com/KirillLagutin/ShopOnline', 
    url2: 'https://github.com/KirillLagutin/ShopOnline',
  },
  {
    id: '3', title: ' Выбор авто (Laravel / SQL)', src: cars, 
    url1: 'https://github.com/KirillLagutin/for_only', 
    url2: 'https://github.com/KirillLagutin/for_only',
  },
  {
    id: '4', title: 'Данный сайт (HTML / CSS / JS)', src: portfolio, 
    url1: 'https://kirilllagutin.github.io/Portfolio/', 
    url2: 'https://github.com/KirillLagutin/Portfolio',
  },
  {
    id: '5', title: 'Email рассылка (ASP.NET / Minimal APIs)', src: mailKit, 
    url1: 'https://github.com/KirillLagutin/MailKitDI', 
    url2: 'https://github.com/KirillLagutin/MailKitDI',
  },
  {
    id: '6', title: 'Туры по Японии (Вёрстка)', src: travelOdigo, 
    url1: 'https://kirilllagutin.github.io/TravelOdigo/', 
    url2: 'https://github.com/KirillLagutin/TravelOdigo',
  },
  {
    id: '7', title: 'Барабаны (JavaScript)', src: drums, 
    url1: 'https://kirilllagutin.github.io/Drums/', 
    url2: 'https://github.com/KirillLagutin/Drums',
  },
  {
    id: '8', title: 'Координаты мыши (JavaScript)', src: mouseMove, 
    url1: 'https://kirilllagutin.github.io/MouseCoordinates/', 
    url2: 'https://github.com/KirillLagutin/MouseCoordinates',
  },
  {
    id: '9', title: 'Пианино (JavaScript)', src: piano, 
    url1: 'https://kirilllagutin.github.io/Piano/', 
    url2: 'https://github.com/KirillLagutin/Piano',
  },
  {
    id: '10', title: 'Калькулятор (React)', src: calculatorReact, 
    url1: 'https://kirilllagutin.github.io/CalculatorReact/', 
    url2: 'https://github.com/KirillLagutin/CalculatorReact',
  },
  {
    id: '11', title: 'Квартал (WordPress)', src: kvartal, 
    url1: 'https://kvartal-an.ru/', 
    url2: 'https://kvartal-an.ru/',
  },
];

export default works;