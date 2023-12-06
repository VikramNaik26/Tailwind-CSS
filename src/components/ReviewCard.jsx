import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img
        src={imgURL}
        alt={customerName}
        className="rounded-full object-cover w-[120px] h-[120px]"
      />
      <p className="text-center mt-6 max-w-sm info-text">{feedback}</p>
      <div className="mt-3 flex gap-2.5 justify-center items-center">
        <img
          src={star}
          alt="ratings"
          width={24}
          height={24}
          className="m-0 object-contain"
        />
        <p className="text-xl font-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className='text-3xl mt-1 font-palanquin text-center font-bold'>{customerName}</h3>
    </div>
  )
}
export default ReviewCard
