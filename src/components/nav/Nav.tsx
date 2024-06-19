
const Nav = () => {
    return (
        <div className="bg-black text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-center w-1/4 mt-12 transition hover:-translate-y-1 hover:scale-105 duration-300">
                    <a href="/coiffeuse" className="text-white no-underline font-opens " >Coiffeuse</a>
                </div>
                <div className="text-center w-1/4 mt-12 transition hover:-translate-y-1 hover:scale-105 duration-300 ">
                    <a href="/estheticienne" className="text-white no-underline font-opens">Esthéticienne</a>
                </div>
                <div className="text-center w-1/4">
                    <a href="/" className="text-white text-[45px] font-caveat mb-2">Le Salon Saudari</a>
                </div>
                <div className="text-center w-1/4 mt-12 transition hover:-translate-y-1 hover:scale-105 duration-300">
                    <a href="/contact" className="text-white no-underline  font-opens">Nous contacter</a>
                </div>
                <div className="text-center w-1/4 mt-12 transition hover:-translate-y-1 hover:scale-105 duration-300">
                    <a href="#" className="text-white no-underline  font-opens">Nous trouver</a>
                </div>
            </div>
        </div>
    );
};

export default Nav;