import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Nav from '../../components/nav/Nav';

const TarifEpilation = () => {
    return (
        <div className="" >
            <Nav />
            <h1 className=" text-center text-5xl font-syncopate  mt-10">Épiltion</h1>

            <div className=''>
                <div className=' m-10 p-10 border-4 border-black'>
                    <div className=' divide-y divide-slate-400/25'>
                        <p>Sourcils ................................................................................................................................................................................................................................................................................................................................ 8€</p>
                        <p>Lèvres / Menton / Joues ...................................................................................................................................................................................................................................................................................................... 7€</p>
                        <p>Sourcils + Lèvres ................................................................................................................................................................................................................................................................................................................. 13€</p>
                        <p>Sourcils + Lèvres + Menton ................................................................................................................................................................................................................................................................................................. 18€</p>
                        <p>Visage complet ..................................................................................................................................................................................................................................................................................................................... 22€</p>
                    </div>
                    <br />
                    <div className='divide-y divide-slate-400/25'>
                        <p>Aisselles ................................................................................................................................................................................................................................................................................................................................ 10€</p>
                        <p>Bras ....................................................................................................................................................................................................................................................................................................................................... 15€</p>
                        <p>Demi-Jambes ......................................................................................................................................................................................................................................................................................................................... 19€</p>
                        <p>Cuisses .................................................................................................................................................................................................................................................................................................................................. 19€</p>
                        <p>Jambes complètes ................................................................................................................................................................................................................................................................................................................. 28€</p>
                        <p>Maillot classique ..................................................................................................................................................................................................................................................................................................................... 12€</p>
                        <p>Maillot string ........................................................................................................................................................................................................................................................................................................................... 18€</p>
                        <p>Maillot intégral ........................................................................................................................................................................................................................................................................................................................ 23€</p>
                    </div>
                    <br />
                    <div className=' divide-y divide-slate-400/25'>
                        <p>Dos ......................................................................................................................................................................................................................................................................................................................................... 22€</p>
                        <p>Torse ....................................................................................................................................................................................................................................................................................................................................... 22€</p>
                        <p>Nez / Oreilles ........................................................................................................................................................................................................................................................................................................................... 5€</p>
                    </div>
                    <br />
                    <div className='divide-y divide-slate-400/25'>
                        <p>Demi-Jambes + Maillot + Aisselles .......................................................................................................................................................................................................................................................................................... 38€</p>
                        <p>Demi-Jambes + Maillot string + Aisselles ................................................................................................................................................................................................................................................................................. 43€</p>
                        <p>Demi-Jambes + Maillot intégral + Aisselles .............................................................................................................................................................................................................................................................................. 47€</p>
                    </div>
                    <br />
                    <div className='divide-y divide-slate-400/25'>
                        <p>Jambes complètes + Maillot + Aisselles ................................................................................................................................................................................................................................................................................... 45€</p>
                        <p>Jambes complètes + Maillot string + Aisselles ......................................................................................................................................................................................................................................................................... 50€</p>
                        <p>Jambes complètes + Maillot intégral + Aisselles ...................................................................................................................................................................................................................................................................... 55€</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TarifEpilation;



