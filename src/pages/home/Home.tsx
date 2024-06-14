import Nav from "../../components/nav/Nav";
import { Carousel } from "@material-tailwind/react";

const Home = () => {
    return (
        <div>
            <Nav />

{/*             <Carousel
      className="rounded-xl"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <img
        src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel> */}


    <div className="bg-gradient-to-l hover:bg-gradient-to-r w-full">
    <img  className="w-full h-[885px]" src="src/assets/home/photo1.jpeg" alt="..."/>
    <figcaption
      className="flex absolute text-center h-auto bottom-8 left-2/4 flex w-auto -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
      <div>
      <h5
          className="block text-l font-opens antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Salon mixte sur rendez-vous
        </h5>
        <h5
          className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          Nos Horaires
        </h5>
        <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Lundi - Fermé
        </p>
        <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Mardi -	09:00–19:00 /  Mercredi -	09:00–19:00
        </p>
        <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Jeudi -	09:00–14:00 / Vendredi -	09:00–19:00
        </p>
        <p className="block mt-2 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
          Samedi -	09:00–19:00 / Dimanche - Fermé
        </p>
      </div>
    </figcaption>
    </div>

<h1 className="mt-12 text-center text-5xl font-syncopate">Nos Gammes De Produits</h1>


<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/Cassiere.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/Davines.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/cassiere2.webp" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/cassiere3.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/lovecurl.webp" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/ybera.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/cassieremiel.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/hog.webp" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/cassieredouche.jpeg" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="src/assets/produits/crew.jpeg" alt=""/>
        </div>
    </div>
</div>

        </div>
    );
};

export default Home;
