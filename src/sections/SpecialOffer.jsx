import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from '../components/Button'

const SpecialOffer = () => {
  return (
    <section className="max-container flex  items-center max-xl:flex-col-reverse gap-10">
      <div className="flex1">
        <img
          src={offer}
          alt="Special offers"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="capitalize font-palanquin font-bold text-4xl lg:max-w-lg">
          <span className="text-coral-red">special </span>offer
        </h2>
        <p className="info-text lg:max-w-lg mt-4 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias earum
          perferendis inventore, exercitationem fuga voluptatum asperiores
          fugiat
        </p>
        <p className="info-text lg:max-w-lg mt-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          deleniti ad debitis laboriosam hic nulla aliquam, autem suscipit
          aspernatur ea
        </p>
        <div className="mt-8 flex gap-5 flex-col sm:flex-row">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}
export default SpecialOffer
