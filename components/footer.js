import React from 'react'
import Link from 'next/link'

const Footer = (props) => (

    <footer className={"custom-footer " + (props.customBg == 'True' ? 'alter-bg' : '' ) }>
        <div className="container">
            <div className="row">
                <div className="col l6 s12">
                    <Link href="#">
                        <a className="title">
                            <img src="/images/ig-icon.png"></img>
                            <h5>Contacto</h5>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer
