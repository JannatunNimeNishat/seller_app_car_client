
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

import { BsFillPeopleFill, BsSpeedometer } from "react-icons/bs";
import { BiSolidGasPump } from "react-icons/bi";
import { PiSteeringWheelBold } from "react-icons/pi";
import { AiOutlineHeart } from "react-icons/ai";

const Car = ({ item }) => {
    console.log(item);
    const { model, images, features, edition, price } = item || {};
    return (
        <div className=" h-[520px] px-4 py-3 shadow-xl drop-shadow-2xl border rounded-2xl bg-[#e0ecf7]" >
            <>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    
                >
                    {
                        images?.map((image, index) => <SwiperSlide
                            className='rounded-2xl'
                            key={index}
                        ><img className='w-full h-[280px] rounded-2xl' src={image} alt="" /></SwiperSlide>)
                    }

                </Swiper>
            </>
            {/* card body */}
            <div className='text-gray-700 mt-5 px-2'>
                {/* model */}
                <div className='flex items-center justify-between'>
                    <h3 className='text-2xl font-semibold'>{model}</h3>
                    <div className='px-4 py-1 border-2 border-sky-300 rounded-3xl border-dashed'>
                        <p>{edition}</p>
                    </div>
                </div>
                {/* features */}
                <div className='mt-5 w-4/5'>
                    {
                        features?.map((feature, index) => <div
                            key={index}
                            className='grid grid-cols-2 gap-3'
                        >
                            <div className='flex items-center gap-2'>
                                <BsFillPeopleFill className='h-5 w-5 text-sky-300' />
                                <p>{feature?.capacity}</p>
                                people
                            </div>
                            <div className='flex items-center gap-2'>
                                <BiSolidGasPump className='h-5 w-5 text-sky-300' />
                                <p>{feature?.fuel_type}</p>
                            </div>

                            <div className='flex items-center gap-2'>
                                <BsSpeedometer className='h-5 w-5 text-sky-300' />
                                <p>{feature?.mileage}</p>
                            </div>


                            <div className='flex items-center gap-2'>
                                <PiSteeringWheelBold className='h-5 w-5 text-sky-300' />
                                <p>{feature?.suspension_type}</p>
                            </div>
                        </div>)
                    }
                </div>
                <div className='h-[1px] bg-gray-300 mt-5 ' />
                {/*  */}
                <div className='flex items-center justify-between my-4'>
                    <h3 className='text-xl font-semibold'>${price} <small className='font-normal'>/month</small> </h3>
                    <div className='flex gap-3 items-center'>
                        <div className='w-[35px] h-[35px] cursor-pointer bg-sky-200 rounded-lg flex items-center justify-center'>
                            <AiOutlineHeart className='h-6 w-6 text-sky-400' />
                        </div>
                        <button className='text-white bg-sky-600 px-4 py-2 rounded-2xl'>Rent now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;