import React, { useState, useEffect } from 'react'

const usuariosDefinidos = [
    { nombre: "Pepe Lota", like: true, saludo: false, mensaje: "Todo bien" },
    { nombre: "Tulio Triviño", like: false, saludo: false, mensaje: "Aqui les envio un saludo" }
]

const Enviarmensaje = () => {

    const [usuarios, setUsuarios] = useState(usuariosDefinidos)
    const [nombre, setNombre] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [like, setLike] = useState(false)
    const [saludo, setSaludo] = useState(false)

    useEffect(() => {
        let clonaUsuarios = [...usuarios]
        const recienteUsuario = {
            nombre: "Patana Triviño",
            like: true,
            saludo: true,
            mensaje: "Hola buenas soy patana"
        }
        clonaUsuarios.push(recienteUsuario)
        setUsuarios(clonaUsuarios)
    }, [])

    const handleNombre = (evento) => {
        setNombre(evento.target.value)
    }

    const handleMensaje = (evento) => {
        setMensaje(evento.target.value)
    }

    const handleLike = (evento) => {
        setLike(!like)
    }

    const handleSaludo = (evento) => {
        setSaludo(!saludo)
    }

    const handleSendMensaje = (evento) => {
        const recienteUsuario = {
            nombre: nombre,
            like: like,
            saludo: saludo,
            mensaje: mensaje,
        }

        let clonaUsuarios = [...usuarios]
        clonaUsuarios.push(recienteUsuario)
        setUsuarios(clonaUsuarios)

    }

    return (
        <>
            <div className="row">
                <h1>Enviar Mensaje</h1>
                <div className="col-6">
                    <label htmlFor="nombres">Nombre</label>
                    <input
                        className="form-control"
                        type="text"
                        value={nombre}
                        onChange={handleNombre}
                        name="nombres"
                        id="nombres"
                    />
                </div>
            </div>


            <div className="row-4 mt-2">
                <div className="col-6">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                        className="form-control"
                        type="text"
                        value={mensaje}
                        onChange={handleMensaje}
                        name="nombres"
                        id="nombres"
                        rows="3"
                    />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={like}
                            onChange={handleLike}
                            name="like"
                            id="like"
                        />
                        <label className="form-check-label" htmlFor="like">
                            Dar Like 👍
                        </label>
                    </div>
                </div>

                <div className="col-3">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            value={saludo}
                            onChange={handleSaludo}
                            name="saludo"
                            id="saludo"
                        />
                        <label className="form-check-label" htmlFor="saludo">
                            Enviar Saludo 👋
                        </label>
                    </div>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col-4">
                    <div className="col-12 justify-content-start mt-3">
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={handleSendMensaje}
                        >Enviar</button>
                    </div>
                </div>
            </div>

            <hr />



            <div className="row mt-5">
                <div className="col-12">
                    <table className="table table-stripped">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Reacciones</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usuarios.map((usuario) => {
                                return (
                                    <tr>
                                        <td>{usuario.nombre}</td>
                                        <td>
                                            {usuario.like && '👍'}
                                            {usuario.saludo && '👋​​'}
                                            {!usuario.like && !usuario.saludo && '<Ninguno>'}
                                        </td>
                                        <td>{usuario.mensaje}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Enviarmensaje