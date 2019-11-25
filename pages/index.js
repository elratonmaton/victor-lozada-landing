import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import '../styles/style.sass'

const Home = () => (
  <div>
    <Head>
      <title>Victor M. Lozada A.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>    

    <Nav />

    <div className="container home">
      <div className="row">
        <div className="col s5">
          <img className="portrait" draggable="false" src="/images/portrait.jpg" />
        </div>
        <div className="col s7">
          <div className="about-description">
            <h1 className="title">SOBRE MÍ</h1>
            <p className="description">Mi nombre es Víctor Manuel Lozada Andrade y nací en Arequipa, Perú, en un año cuando aún no existían correos electrónicos o redes sociales. Desde niño me gustó escuchar historias; recuerdo claramente a mi padre contando sus peripecias en sus viajes por Bolivia, Brasil y Venezuela, y me imaginaba claramente sus relatos, pero en mi mente los sazonaba con destellos de características fantásticas. El “escuchar” historias se transformó en “crear” historias, o al menos la idea de poder crearlas escribiendo, gracias a un examen en la clase de lenguaje cuando cursaba el cuarto año de primaria. Al final de la prueba, nosotros tuvimos que redactar un micro-cuento</p>
          </div>
        </div>
      </div>
    </div>

    <Footer />

  </div>
)

export default Home
