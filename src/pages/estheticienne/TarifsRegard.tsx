import * as React from 'react';
import Nav from '../../components/nav/Nav';

const TarifsRegard = () => {
    return (
        <div className="" >
            <Nav />
            <h1 className=" text-center text-5xl font-syncopate  mt-10">Beauté du Regard</h1>

            <div className=''>
                <div className=' m-10 p-10 border-4 border-black'>
                    <div className=' divide-y divide-slate-400/25'>
                    <h4 className='text-2xl'>Beauté du Regard</h4>
                        <p>Teinture Cils .............................................................................................................................................................................................................................................................................................................................. 16€</p>
                        <p>Teinture Soucrils ....................................................................................................................................................................................................................................................................................................................... 13€</p>
                        <p>Permanente Cils ....................................................................................................................................................................................................................................................................................................................... 40€</p>
                        <p>Maquillage ................................................................................................................................................................................................................................................................................................................................ 22€</p>
                        <p>Forfait Mariée ........................................................................................................................................................................................................................................................................................................................... 45€</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TarifsRegard;



