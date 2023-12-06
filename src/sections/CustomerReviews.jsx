import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center font-bold text-4xl">
        What Our
        <span className="text-coral-red "> Customers </span>
        Say?
      </h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
        architecto. Ducimus molestiae officiis voluptatum enim error fuga
        nesciunt
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  )
}
export default CustomerReviews
