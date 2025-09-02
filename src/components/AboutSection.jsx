import React from "react";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section className="section_about">
      <div className="about">
        <h1 className="title_about">Про інститут</h1>
      </div>
      <div className="image_text">
        <img className="about_picture" src="./img/about.png" alt="Фото ВІТІ"/>
        <div className="about_institute">
          <p className="text-about">
            Військовий інститут телекомунікацій та інформатизації імені Героїв
            Крут — вищий військовий навчальний заклад, який здійснює підготовку
            фахівців у галузі зв’язку, інформатизації, кібербезпеки та
            інформаційних технологій для потреб Збройних Сил України.
          </p>
          <br />
          <p className="text-about">
            Інститут поєднує фундаментальну військову освіту з технічною
            підготовкою, приділяючи увагу розвитку сучасних напрямів у сфері
            оборонних технологій.
          </p>
        </div>
      </div>
    </section>
  );
}
