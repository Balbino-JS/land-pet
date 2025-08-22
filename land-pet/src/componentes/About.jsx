import { useState } from 'react'
import '../CSS/App.css'
import "../CSS/About.css"
import AboutBackground from '../assets/cao-mulher-abracados.jpg'



function About() {
  
  return (
    <div className='about-section-container'>
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="imagen de sobre nos" />
      </div>

      <div className="about-section-text-container">
        <p className="primary-subheading">Sobre Nós</p>

        <p className="primary-heading">
            É importante conhecer quem cuidará de seu pet com todo amor e carinho.
        </p>
        <p className="primary-text">
            Somos uma intituição local dedicada a seu animalzinho trazendo bem estar e conforto.
        </p>

        <p className="primary-text">
            Noass histólria começou co, uma paixão e desejo de criar um espaço onde seu pet será bem cuidados por prificionais qualificado e competentes  
        </p>

      </div>
   </div>
  )
}

export default About