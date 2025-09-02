import React from "react"
import SpecialtyCard from "./SpecialtyCard";
import './SpecialtiesSection.css'

export default  function SpecialtiesSection(){

    const specialties = [
        {id: 1, image: './img/specialties/KN.png', title: 'Комп\'ютерні науки', description: 'Відкрив ноутбук, заработав 400$, закрив ноутбук', link: '/computer-science'},
        {id: 2, image: './img/specialties/IST.png', title: 'Інформаційні системи та технології', description: 'Поковирявся з сервером — інтернет у військових працює', link: '/ist'},
        {id: 3, image: './img/specialties/KB.png', title: 'Кібербезпека', description: 'Kali Linux встановив — будеш взламувати сусідський Wi-Fi', link: '/cybersecurity'},
        {id: 4, image: './img/specialties/KN.png', title: 'Управління діями підрозділів зв\'язку', description: 'Відкрив ноутбук, заработав 400$, закрив ноутбук', link: '/computer-science'},
        {id: 5, image: './img/specialties/IST.png', title: 'Озброєння та війскова техніка', description: 'Поковирявся з сервером — інтернет у військових працює', link: '/ist'},
        {id: 6, image: './img/specialties/KB.png', title: 'Кібербезпека', description: 'Kali Linux встановив — будеш взламувати сусідський Wi-Fi', link: '/cybersecurity'},
        
    ]
    return (
        <section className="section_specialties">
            <div className="spec">
                <h1 className="title_spec">Спеціальності підготовки</h1>
            </div>
            <div className="specialties_grid">
                {specialties.map((spec) => (
                    <SpecialtyCard key={spec.id} image={spec.image} title={spec.title} description={spec.description} link={spec.link}/>
                ))}
            </div>
        </section>
    );
}
