import React from 'react';
import ListadoVentas from 'components/ListadoVentas';
import logoApolo from 'media/apolo_logo.png';

const Ventas = () => {
  return <div>
            Administracion de Ventas 🎁
            <div>
                <section>
                    <ul className='loginContainer'>
                    <ListadoVentas  imagen={logoApolo} />
                    </ul>
                </section>
                <section></section>
            </div>
        </div>;
};

export default Ventas;