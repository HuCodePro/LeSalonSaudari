import Nav from "../../components/nav/Nav";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "../../components/carousel/Carousel"
  import { Card, CardContent } from "../../components/card/Cards"

const Services = () => {
    return (
        <div>
            <Nav />
            <h1 className=" text-center text-5xl font-opens  mt-10">Nos prestations</h1>

<div className="flex mt-20 justify-center items-stretch space-x-20" >

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500">
    <img
      src="src/assets/coiffeuse/homme.jpeg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
     Homme
    </h5>
  </div>
  <div className="p-6 pt-0 text-center">
    <button
      className="align-middle select-none font-opens font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[335px]"
      type="button">
      Voir
    </button>
  </div>
</div>  

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500">
    <img
      src="src/assets/coiffeuse/femme.jpeg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
     Femme
    </h5>
  </div>
  <div className="p-6 pt-0 text-center ">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[335px]"
      type="button">
      Voir
    </button>
  </div>
</div> 

<div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
  <div
    className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-dark-500">
    <img
      src="src/assets/coiffeuse/enfant.jpeg"
      alt="card-image" />
  </div>
  <div className="p-6">
    <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-center">
     Enfant
    </h5>
  </div>
  <div className="p-6 pt-0 text-center">
    <button
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-[335px]"
      type="button">
      Voir
    </button>
  </div>
</div> 

</div>




        </div>
    );
};

export default Services;