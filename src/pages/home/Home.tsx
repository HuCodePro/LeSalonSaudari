
import Nav from "../../components/nav/Nav";
import Produit from "../../components/carousel/Produit";



const Home = () => {

  return (
    <div>
      <Nav />

      <div className="bg-red-500 flex">
        <div className="w-full border-2">
          <img src="src/assets/home/photo1.jpeg" alt="" />
        </div>
        <div className="w-full border-2">
          <img src="src/assets/home/photo2.JPG" alt="" />
        </div>
      </div>

      <h1 className="mt-12 text-center text-5xl font-syncopate">OÙ NOUS TROUVER</h1>

      <br />

      <div className="flex w-full">
        <div className="w-[75%] border-2">
          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=78%20Rue%20Roger%20Salengro,%2062217%20Achicourt+(LeSalonSaudari)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>

        <div className="w-[25%] border-2">
          <div
            className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white border-2 bg-clip-border">
            <table className="w-full text-left table-auto min-w-max">
              <thead>
                <tr>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      COIFFEUSE
                    </p>
                  </th>

                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                      ESTHÉTICIENNE
                    </p>
                  </th>
                  <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50">
                    <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70"></p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Lundi  Fermé
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Lundi  09:00 - 19:00
                    </p>
                  </td>

                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Mardi  09:00 - 19:00
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Mardi  09:00 - 19:00
                    </p>
                  </td>

                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Mercredi 09:00 - 19:00
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Mercredi Fermé
                    </p>
                  </td>

                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Jeudi 09:00 - 14:00
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Jeudi 09:00 - 14:00
                    </p>
                  </td>

                </tr>
                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Vendredi 09:00 - 19:00
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Vendredi 09:00 - 19:00
                    </p>
                  </td>

                </tr>

                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Samedi 09:00 - 19:00
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Samedi 09:00 - 19:00
                    </p>
                  </td>

                </tr>

                <tr className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Dimacnhe Fermé
                    </p>
                  </td>
                  <td className="p-4">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      Dimanche Fermé
                    </p>
                  </td>

                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <h1 className="mt-12 text-center text-5xl font-syncopate">Nos Gammes De Produits</h1>

<Produit/>

    </div>
  );
};

export default Home;
