
const SectionTitle = ({heading,subHeading}) => {
  return (
    <div className='md:w-3/12 mx-auto text-center my-8'>
        <p className="text-yellow-400 mb-2">---{subHeading}---</p>
        <h3 className="uppercase text-4xl border-y-4 py-4">{heading}</h3>
    </div>
  )
}
export default SectionTitle;
