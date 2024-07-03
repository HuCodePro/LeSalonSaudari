import React from 'react';
import Nav from '../../components/nav/Nav';

function TarifsTechniques() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate '>Tarifs</h1>

            <div className="flex bg-gray-300 m-5 justify-center h-full">
<div className=" bg-gray-200 m-3 w-100 text-2xl font-syncopate rounded-md" >
    <h1 className='text-center text-4xl font-syncopate' >Femme</h1>
    <br />
    <h1>Colorations sur cheveux court ------ 30e <br />  <p>sur cheveux mi-longs ----- 8e</p><p>sur cheveux long ----- 15e</p></h1>
    <br />
    <h1>Mèches ------ à partir de 35e</h1>
    <br />
    <h1>Patine ----- de 15e a 25e <br /><p>sur cheveux courts ----- 20e</p><p>sur cheveux mi-longs ----- 22e</p><p>ur cheveux longs ----- 24e</p></h1>
    <h1>Décoloration ----- à partir de 30e</h1>
    <h1>Lissage, Défrisage ----- de 80e  à 100e l'heure</h1>
    <h1>Forfaits étudiants ----- de 45e à 70e</h1>
    <br />
    <h1 className='text-3xl' >ATTENTION CONFIRMATION DU TARIF SUR DEVIS <br /><p className='text-slate-500' >Les shampoings sont compris</p></h1>
</div>

            </div>

        </div>
    );
}

export default TarifsTechniques;