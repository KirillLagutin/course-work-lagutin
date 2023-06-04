import React from "react";

class Contact extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <section className="contacts" id="contacts">
        <div className="wrapper">
            <h2 className="contacts__title section-title">
                Контакты
            </h2>
            <form action="https://formspree.io/f/mrgdzzjb" method="post" className="contacts__form">
                <input type="text" name="name" placeholder="Ваше имя" className="contacts__forms-name"/>
                <input type="tel" name="telephone" placeholder="Телефон" className="contacts__forms-phone"/>
                <input type="email" name="email" placeholder="Email" className="contacts__forms-email"/>
                <textarea name="message" cols="30" rows="10" placeholder="Ваше сообщение" className="contacts__form-text"></textarea>
                <button type="submit" className="contacts__form-button">Отправить</button>
            </form>
        </div>
      </section>

    );
  }
}

export default Contact;