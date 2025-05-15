import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ct1 from '../../assets/home/slide1.jpg';
import ct2 from '../../assets/home/slide2.jpg';
import ct3 from '../../assets/home/slide3.jpg';
import ct4 from '../../assets/home/slide4.jpg';
import ct5 from '../../assets/home/slide5.jpg';

const Category = () => {
  return (
       <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={ct1} alt="ct1" />
          <h3 className='text-white uppercase text-3xl -mt-20 text-center shadow-xl'>Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ct2} alt="ct2" />
          <h3 className='text-white uppercase text-3xl -mt-20 text-center shadow-xl'>Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ct3} alt="ct3" />
          <h3 className='text-white uppercase text-3xl -mt-20 text-center shadow-xl'>Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={ct4} alt="ct4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ct5} alt="ct5" />
          <h3 className='text-white uppercase text-3xl -mt-20 text-center shadow-xl'>Salads</h3>
        </SwiperSlide>
      </Swiper>
  )
}
export default Category;
