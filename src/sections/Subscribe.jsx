import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
    >
      <h3 className="capitalize text-4xl font-palanquin font-bold lg:max-w-lg leading-[68px]">
        sign up for <span className="text-coral-red">updates</span> & newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-6 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input" />
        <div className='flex max-sm:justify-end max-sm:w-full items-center'>
          <Button label="Sign up" fullWidth/>
        </div>
      </div>
    </section>
  )
}
export default Subscribe
