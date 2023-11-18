import Button from "../components/Button"
import Button2 from "../components/Button2"
import { offer } from "../assets/images"
import { arrowRight } from "../assets/icons"

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img src={offer} alt="Offer img" width={773} height={687} className="object-contain w-full" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="mt-4  ">
          Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible saving, we offer unparalleled value that sets us apart.
        </p>
        <p className="mt-6  ">
          Navigate a realm of possibilites designed to fulfill your unique desires, surpassing the loftiest expectatoins. Your journey with us is nothing short of exceptional. 
        </p>
        <div className="flex mt-11 flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight}/>
          <Button2 label="Learn more"/>
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
