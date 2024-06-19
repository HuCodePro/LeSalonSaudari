import Nav from "../../components/nav/Nav";
import Contact from "../../components/form/Contact";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";


const Form = () => {
    return (
        <div>
            <Nav />
            <h1 className=" text-center text-5xl font-syncopate  mt-10">Contactez-Nous</h1>
            <div className="grid grid-cols-12 gap-4  p-8">
                <div className="col-span-12 md:col-span-5">
                    <img className="rounded-xl " src="src/assets/home/photo1.jpeg" alt="" />
                    {/* Ajoutez plus de contenu ici */}
                </div>
                <div className="col-span-12 md:col-span-7">
                    <Contact />
                </div>
            </div>

            <div className="flex justify-center" >

                <Card className="w-[400px] border-2 border-black">

                    <CardHeader className=" text-center">
                        <div className="">
                            <h1 className=" font-caveat text-2xl" >Le Salon Saudari</h1>
                        </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                        <p>Email : hugodecamps2@gmail.com</p>
                    </CardBody>
                    <Divider />
                    <CardBody>
                        <p>Téléphone : 09 87 05 47 37</p>
                    </CardBody>
                    <Divider />

                </Card>

            </div>
        </div>
    );
};

export default Form;