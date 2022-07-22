import React, { useState, useEffect } from 'react'
import imagenPortada from '../assets/images/motonc.jpg'


const Portada = () => {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <img src={imagenPortada} class="card-img-top" height='500'/>
                        <div className="card-body">
                            <h5 className="card-title">Estudiante Tecnico</h5>
                            <p className="card-text">
                                Tecnico Analista Programador 2020-2022
                                <br></br>
                                Universidad Inacap
                                <br></br>
                                Estudiante trabajador
                                <br></br>
                                Progresion 95%
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-6 text-center">
                    <h1>Nicolás Campillay</h1>
                    <p>
                        Soy un Estudiante que empezo en el año 2020, con clases online a travez de plataformas teams,
                        adquiriendo habilidades de codificación, analisis de empresas con sus problematicas con alguna
                        solucion y de soporte en sistema, hardware y componentes dando mantencion a los equipos
                    </p>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-6">
                    <h1>Habilidades</h1>
                    <ul className="list-group">
                        <li className="list-group-item">Analisis de la situación de la empresa con el mercado</li>
                        <li className="list-group-item">Coperativo en equipos de trabajo</li>
                        <li className="list-group-item">Buen trato a los clientes</li>
                        <li className="list-group-item">Excelente gestión de tiempos</li>
                    </ul>

                </div>
            </div>
        </>
    )
}
export default Portada