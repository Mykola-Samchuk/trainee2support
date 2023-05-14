import React from "react";
import "./about.scss";
import imghi from "./img/img-hi.png";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icons8.png";
import icon3 from "./img/icons5.png";
import icon4 from "./img/icons6.png";


export default function About() {
  return (
    <main className="app-wrapp">
      <section className="about-wrapp">
        <h1 className="about-title">Trainee to support</h1>
        <p className="about-text">Checkbox Team</p>
      </section>
      <section className="section-content intro-wrapp">
        <div className="spacer-xl"></div>
        <h2 className="intro-title">
          Привіт! Ти скоро станеш частиною команди Checkbox, вітаємо тебе!
        </h2>
        <div className="left-content">
          <div className="left-block">
            <div className="left-info">
              <h3 className="intro-text">
                <span>Наша місія</span> - створювати цінність для наших клієнтів
                через сучасне програмне забезпечення, отримувати від нашої
                роботи задоволення та гідну фінансову винагороду.
              </h3>
            </div>
          </div>
          <div className="right-block">
            <div className="left-img">
              <img src={imghi} alt="img" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-content section-content">
        <div className="spacer-xl"></div>
        <h2 className="intro-title">Наші фундаментальні принципи</h2>
        <div className="principles-wrapp">
          <div className="principles-content">
            <div className="principle-card">
              <div className="principle-img">
                <img src={icon1} alt="img" />
              </div>
              <div className="principle-text">
                <h4 className="principle-title">Професіоналізм</h4>
                <p>
                  Ми цінуємо професіоналів своєї справи, людей, що глибоко
                  розуміють те, чим займаються, а у разі відсутності необхідних
                  знань готових розбиратись та вивчати нові сфери. Постійний
                  саморозвиток є невід’ємною частиною професіоналізму.
                </p>
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-img">
                <img src={icon2} alt="img" />
              </div>
              <div className="principle-text">
                <h4 className="principle-title">Відкритість та чесність</h4>

                <p>
                  Будь-хто з команди може відкрито обговорювати будь-які робочі
                  моменти (задачі, успіхи, невдачі, ідеї, помилки тощо) і
                  отримувати конструктивну та чесну інформацію. Ми відкрито
                  висловлюємо свою позицію з будь-яких робочих питань і
                  розраховуємо на таку ж відкриту і чесну відповідь.
                </p>
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-img">
                <img src={icon3} alt="img" />
              </div>
              <div className="principle-text">
                <h4 className="principle-title">
                  Відповідальність за результат
                </h4>

                <p>
                  Кожен член команди докладає максимум зусиль для досягнення
                  результату по продукту/проекту/задачі незалежно від того, чи є
                  це його персональна відповідальність. Команда має спільну
                  мету, тому перемоги і поразки також є спільними для всіх
                  членів команди.
                </p>
              </div>
            </div>
            <div className="principle-card">
              <div className="principle-img">
                <img src={icon4} alt="img" />
              </div>
              <div className="principle-text">
                <h4 className="principle-title">Комунікабельніст</h4>
                <p>
                  Людські стосунки мають найбільшу цінність. Взаємоповага,
                  ввічливість, взаємопідтримка є ключовими елементами людських
                  стосунків і спілкування.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
