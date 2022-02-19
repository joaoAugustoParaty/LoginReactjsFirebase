import React from 'react';
import {Link} from 'react-router-dom';
import {AreaHeader} from './styled';

import MenuIcon from '@mui/icons-material/Menu';

function Topo (){
    return (
       <AreaHeader>
        <div className='container'>
            <div className='logo'>
             <MenuIcon/> <img src="../../../logolobo.png"  alt='lobo'/>
            </div>

            <nav>
                <ul>
                    <li><Link to="/">Inicío</Link></li>
                    <li><Link to="/config">Configurações</Link></li>
                    <li><Link to="/logout">Sair</Link></li>
                </ul>
            </nav>
        </div>
       </AreaHeader>
    );
}
export default Topo;