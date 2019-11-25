import React from 'react'
import Link from 'next/link'

const Contact = () => (

    <div className="contact">
        <div className="border-bottom"></div>
        <div className="row">
            <div className="col s5 offset-s4">
                <form className="contact-form">
                    <h2 className="title">SUSCRÍBETE AQUÍ SI QUISIERAS</h2>
                    <span className="subtitle">SABER APENAS SUBA UN NUEVO TEXTO</span>
                    <label>E-mail</label>
                    <input className="form-control"></input>
                    <div className="text-right">
                        <button className="btn button-vt">Suscríbete</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)

export default Contact
