import Nav from "../../components/nav/Nav";


const Home = () => {
    return (
        <div>
            <Nav />

    <div className="bg-gradient-to-l hover:bg-gradient-to-r w-full">
    <img  className="w-full h-[885px]" src="src/assets/home/photo1.jpeg" alt="..."/>
    </div>

<h1 className=" text-center text-5xl font-opens">Nos Horaires</h1>
<h1 className=" text-center text-5xl font-opens">Nos Produits</h1>


<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
