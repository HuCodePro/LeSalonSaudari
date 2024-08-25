'use client'
import classNames from 'embla-carousel-class-names'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselButtons,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
  CarouselNextButton,
  CarouselPrevButton,
  CarouselSlides,
} from 'keep-react'

const dataProduits = [ 
  { id: 1, name: 'Crème Coco', img: "src/assets/produits/cassiere33.webp" },
  { id: 2, name: 'Cassiere Masque anti-âge', img: "src/assets/produits/cassiere2.webp" },
  { id: 3, name: 'Ybera oil repair', img: "src/assets/produits/ybera.png" },
  { id: 4, name: 'Cassiere soins peau parfaite', img: "src/assets/produits/Cassiere.jpeg" },
  { id: 5, name: 'Crew', img: "src/assets/produits/crew.jpeg" },
  { id: 6, name: 'Cassiere gommage miel', img: "src/assets/produits/cassieremiel.jpeg" },
  { id: 7, name: 'Davines', img: "src/assets/produits/Davines.jpeg" },
  { id: 8, name: 'Cassiere lait corps', img: "src/assets/produits/cassieredouche.jpeg" },
  { id: 9, name: 'Heart of Glass', img: "src/assets/produits/hog.webp" },
  { id: 10, name: 'Cassiere soins corps', img: "src/assets/produits/cassiere3.jpeg" },
  { id: 11, name: 'Love curl', img: "src/assets/produits/lovecurl.webp" },
]

export const Produit = () => {
  const [hoveredProductId, setHoveredProductId] = useState(null)

  const handleMouseEnter = (id) => {
    setHoveredProductId(id)
  }

  const handleMouseLeave = () => {
    setHoveredProductId(null)
  }

  return (
    <Carousel className='bg-slate-100' options={{ loop: true }} plugins={[classNames()]}>
      <CarouselSlides>
        {dataProduits.map((data) => (
          <CarouselItem 
            key={data.id} 
            className="
              flex-[0_0_90%] sm:flex-[0_0_45%] md:flex-[0_0_30%] lg:flex-[0_0_25%] 
              [&:not(.is-snapped)]:opacity-[0.16] px-2"
            onMouseEnter={() => handleMouseEnter(data.id)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Conteneur pour centrer l'image et le titre */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96"> 
              {/* Affichage du titre avec animation si l'ID correspond à l'ID survolé */}
              {hoveredProductId === data.id && (
                <motion.p 
                  className=' bottom-0 w-full text-xl text-center uppercase text-white bg-opacity-50 text-black py-2'
                  initial={{ opacity: 0, y: 30 }}   // Animation de départ : opacité 0, déplacé vers le bas
                  animate={{ opacity: 1, y: 0 }}    // Animation à l'affichage : opacité 1, position normale
                  exit={{ opacity: 0, y: 30 }}      // Animation de sortie : opacité 0, déplacé vers le bas
                  transition={{ duration: 0.9 }}    // Durée de la transition
                >
                  {data.name}
                </motion.p>
              )}
              
              {/* Animation de l'image lors du survol */}
              <motion.img 
                className="w-full h-full object-cover rounded-xl" 
                src={data.img} 
                alt={data.name} 
                initial={{ y: 0 }}               // Position initiale
                animate={{ y: hoveredProductId === data.id ? 8 : 0 }} // Décalage de 8px vers le bas lors du survol
                transition={{ duration: 0.8 }}    // Durée de la transition
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselSlides>
      <CarouselControl>
        <CarouselButtons>
          <CarouselPrevButton />
          <CarouselNextButton />
        </CarouselButtons>
        <CarouselIndicators />
      </CarouselControl>
    </Carousel>
  )
}

export default Produit;
