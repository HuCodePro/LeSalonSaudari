import React from 'react';
import Nav from '../../components/nav/Nav';

function TarifsHomme() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate '>Tarifs</h1>

            <div className="flex bg-gray-300 m-5 justify-center h-full">
<div className=" bg-gray-200 m-3 w-100 text-2xl font-syncopate rounded-md" >
    <h1 className='text-center text-4xl font-syncopate' >Homme</h1>
    <br />
    <h1>Coupe Étudiant ------ 17e</h1>
    <br />
    <h1>Coupe Homme ------ 19e</h1>
    <br />
    <h1>Rituels Barbe ----- de 15e a 25e</h1>
</div>

<div className="bg-gray-200 m-3 text-2xl font-syncopate rounded-md" >
    <h1 className='text-center text-4xl font-syncopate' >Enfants</h1>
    <br />
    <h1>Coupe bébé de 0 à 3ans ------ 6e</h1>
    <br />
    <h1>Coupe de 3 à 12ans ------ 10e</h1>
    <br />
    <h1>Coupe de 12 à 16ans ------ 16e</h1>
    <br />
    <h1>Coupe de 16ans ------ 20e</h1>

</div>

            </div>

        </div>
    );
}

export default TarifsHomme;