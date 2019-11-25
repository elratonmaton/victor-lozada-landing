import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Contact from '../components/contact'
import '../styles/style.sass'

const Proyecto_actual = () => (
  <div>
    <Head>
      <title>Victor M. Lozada A.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>    

    <Nav />

    <div className="container actual_project">
      <div className="row">
        <div className="col s12">
          <h1 className="title">PROYECTO ACTUAL</h1>
          <p className="description">
          Estoy trabajado en un libro de relatos inspirados en cada capital de departamento
        del Perú. Para escribirlo, me he propuesto visitar a todas las ciudades que se
        mencionarán para que no solo las descripciones estén basadas en experiencias
        directas, sino también para tener la oportunidad de conocer a fondo mi país; objetivo
        que siempre he querido lograr. En esta sección podrás leer algunos pensamientos, los
        cuales no necesariamente serán abordados en los relatos del libro, que me surgieron
        durante los viajes a las ciudades seleccionadas.
          </p>
        </div>
        <div className="col s12 map">
            
            <img src="/images/map.jpg"></img>

        </div>
      </div>
    </div>

    <Contact />

    <Footer customBg="True" />

  </div>
)

export default Proyecto_actual
