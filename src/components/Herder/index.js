import React from 'react';
import {Link} from 'react-router-dom';
import {AreaHeader} from './styled';
import HomeIcon from '@mui/icons-material/Home';
import BuildIcon from '@mui/icons-material/Build';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function Topo (){
    return (
       <AreaHeader>
        <div className='container'>
            <div className='logo'>
              <img src="../../../logolobo.png"  alt='lobo'/>
            </div>

            <nav>
                <ul>
                    <li><Link to="/"><HomeIcon/>Inicío</Link></li>
                    <li><Link to="/config"><BuildIcon/>Configurações</Link></li>
                    <li><Link to="/logout"><ExitToAppIcon/>Sair</Link></li>
                </ul>
            </nav>
        </div>
       </AreaHeader>
    );
}
export default Topo;