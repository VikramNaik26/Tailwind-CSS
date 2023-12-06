import Button from '../components/Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          we provide you
          <span className="text-coral-red"> super&nbsp;</span>
          <span className="text-coral-red"> quality&nbsp;</span>
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti ut
          hic dolorem deserunt. Optio voluptate beatae quos earum, incidunt
          fugit ut! Magni provident doloremque laborum neque accusamus aliquam
          vel at.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <div className="mt-11">
          <Button label="View details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Shoe Collection"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  )
}
export default SuperQuality
