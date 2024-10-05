import logoImg from '../images/DiciionariodelaInformatica.png'

const Navbar = ({ nuevaEntrada, buscadorPorPalabra }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-md">
                <div className="container-fluid">

                    <img className='p-2' src={logoImg} style={{ "height": "85px" }}></img>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <div className='d-flex ms-auto mb-2 mb-lg-0'>
                            <input placeholder='Busca una palabra' id='input-search' className='form-control' onChange={buscadorPorPalabra}></input>
                        </div>



                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <button className="button" id='btn-nueva-entrada' onClick={nuevaEntrada}>Nueva entrada</button>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar;