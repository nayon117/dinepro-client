import ftimg from '../../../assets/home/featured.jpg'
import Button from '../../../components/Button';
import SectionTitle from '../../../components/SectionTitle';
import './Featured.css'

const Featured = () => {
  return (
    <div className='featured-img bg-fixed text-white pt-8 my-20'>
       <SectionTitle 
       heading={"From our menu"}
       subHeading={"check it out"}
       />
       <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-black/30 bg-opacity-80 ">
        <div>
          <img src={ftimg} alt="featured image" />
        </div>
        <div className="md:ml-10">
          <p>May 5, 2025</p>
          <p>Where can i get some ?</p>
          <p>Enjoy our chef’s special — perfectly grilled and seasoned to satisfy every craving. Available for a limited time.
          </p>
          <Button title={"Order Now"}/>
        </div>
       </div>
    </div>
  )
}
export default Featured;
