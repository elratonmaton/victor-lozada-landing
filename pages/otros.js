import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Contact from '../components/contact'
import '../styles/style.sass'

const Otros = () => (
  <div>
    <Head>
      <title>Victor M. Lozada A.</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>    

    <Nav />

    <div className="container otros">
      <div className="row">
        <div className="col s12">
          <h1 className="title">APARTE DE ESCRIBIR, MI BRÍO EMPRENDEDOR HIZO TAMBIÉN QUE CREARA DOS INICIATIVAS EN MI CIUDAD:</h1>
        </div>
        <div className="col s12 other-projects-list">

            <div className="row">
                <div className="col s5 center">
                    <img className="logo" src="/images/culturama.jpg"></img>
                    <div className="text">
                        <h2 className="title">CULTURAMA</h2>
                        <p className="description">Una empresa enfocada en crear y promover eventos culturales en Arequipa.</p>
                        <button className="btn btn-black">Ir</button>
                    </div>
                </div>
            </div>
            
            <div className="row">
                <div className="col s5 center">
                    <img className="logo" src="/images/arcavia.jpg"></img>
                    <div className="text">
                        <h2 className="title">ARCAVIA</h2>
                        <p className="description">Inmobiliaria enfocada en rescatar y modernizar la personalidad arquitectónica arequipeña.</p>
                        <button className="btn btn-black">Ir</button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </div>

    <Footer />

  </div>
)

export default Otros
