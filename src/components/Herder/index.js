import React from 'react';

import {AreaHeader} from './styled';


function Topo (){
    return (
       <AreaHeader>
        <div className='container'>
            <div className='logo'>
              <img src="../../../logolobo.png"  alt='lobo'/>
            </div>

            <nav>
                <ul>
                    <li>Configurações</li>
                    <li>Sair</li>
                </ul>
            </nav>
        </div>
       </AreaHeader>
    );
}
export default Topo;