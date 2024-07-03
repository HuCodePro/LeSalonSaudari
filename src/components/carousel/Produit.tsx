
'use client'
import classNames from 'embla-carousel-class-names'
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

const dataProduits = [ //ICI ajour autant de produit ou retire ca ajoutera à la liste 
  { id: 1, name: 'crème Coco', img: "src/assets/produits/cassiere33.webp" },
  { id: 2, name: 'huile Argant au sucre', img: "src/assets/produits/cassiere2.webp" }
]

export const Produit = () => {
  return (
    <Carousel options={{ loop: true }} plugins={[classNames()]}>
      <CarouselSlides>
        {dataProduits.map((data) => ( // ICI
          <CarouselItem key={data.id} className="flex-[0_0_80%] [&:not(.is-snapped)]:opacity-[0.16]">
            <p >{data.name}</p>
            <img className="rounded-xl" src={data.img} alt="Carousel Item" />

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
