import React from 'react';
import Nav from '../../components/nav/Nav';

function TarifsBrushing() {
    return (
        <div className="" >
            <Nav/>
<h1 className='text-4xl text-center font-syncopate '>Tarifs</h1>

            <div className="flex bg-gray-300 m-5 justify-center h-full">
<div className=" bg-gray-200 m-3 w-100 text-2xl font-syncopate rounded-md" >
    <h1 className='text-center text-4xl font-syncopate' >Brushing</h1>
    <br />
    <h1>Brushing cheveux courts ------ 18e</h1>
    <br />
    <h1>Brushing cheveux mi-longs ------ 20e</h1>
    <br />
    <h1>Brushing cheveux longs ----- à partir de 22e</h1>
</div>



            </div>

        </div>
    );
}

export default TarifsBrushing;