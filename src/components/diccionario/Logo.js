import React from 'react';
import logoImg from '../../images/DiciionariodelaInformatica.png'

const Logo = () => {

    return(
        <div className="center">
            {/* <img src='../../images/DiciionariodelaInformatica.png' style={{"height": "85px"}}></img> */}
            <img src={logoImg} style={{"height": "85px"}}></img>
        </div>
    );

}

export default Logo;