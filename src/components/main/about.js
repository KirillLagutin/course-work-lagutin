import React from "react";
import technologies from "../../data/technologyList";
import { Fragment } from 'react';

function About() {

  return (

    <section className="about" id="about">
        <div className="wrapper">
            <h2 className="about__title section-title">
                Обо мне
            </h2>
            <div className="about__desc">
                <p className="about__desc-par">
                    Ориентирован на результат, аналитический склад ума, ответственный.
                    <br/>
                    Гибкость, хорошие навыки общения.
                    <br/><br/>
                    Способен: 
                    <br/>
                        - работать как самостоятельно, так и в команде
                    <br/>
                        - способен продуктивно пользоваться поиском
                    <br/>
                        - разбираться в новых технологиях
                    <br/>
                        - читать чужой код
                    <br/><br/>
                    Ищу стажировку в компанию на долгосрочную перспективу - где смогу реализовать свой потенциал,
                    <br/> 
                    и при этом буду заинтересованным в развитии компании.
                    <br/><br/>
                    Позиции с которыми работал:
                </p>
                <div className="list__tehnologic">

                  {technologies.map(item => (
                    <Fragment key={item.id}>
                      <div className="list__tehnolic-left">
                          <a href={item.urlLeft} 
                          className="list__tehnolic-link" 
                          target="blank">{item.tehLeft}</a>
                      </div>
                      <div className="list__tehnolic-right">
                        <a href={item.urlRight} 
                        className="list__tehnolic-link" 
                        target="blank">{item.tehRight}</a>
                      </div>
                    </Fragment>
                  ))}

                </div>
                <p className="about__desc-par">
                    <br/><br/>
                    Но как показывает практика, на данном этапе и с полученными знаниями в программировании, 
                    <br/>
                    можно взяться за любой стек технологий, и за короткий срок в нём разобраться до нужного стажёрского уровня.
                </p>
                
            </div>
        </div>
    </section>

  );
}

export default About;