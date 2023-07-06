import Prod1 from '../media/product_2.png'
import Prod3 from '../media/product_1.png'
import Prod4 from '../media/product_5.png'
import Prod2 from '../media/img-pro-03.jpg'
import {AiOutlineHeart } from 'react-icons/Ai';
import { BsSearch, BsStar } from 'react-icons/bs';
const NewsArrivages = () => {
    return ( 
        <div className="container pb-16">
            <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
            <div className="grid grid-cols-4 gap-6">
                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={Prod1} alt="" className="w-full h-36 object-cover object-center " />
                        <div className="absolute  inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <BsSearch/>
                            </a>
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <AiOutlineHeart/>
                            </a>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4'>
                        <a href="#">
                            <h4 className='uppercase text-xl font-medium text-gray-800 hover:text-colorprimary transition mb-2 '>chaussure</h4>
                        </a>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-xl text-colorprimary font-semibold'>$45.00</p>
                            <p className='text-sm text-gray-400 line-through'>$60.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                            </div>
                            <div className='text-xs text-gray-500 ml-3'>(150)</div>
                        </div>
                    </div>
                    <a href="#" className='block w-full py-1 text-center text-white bg-colorprimary border border-colorprimary rounded-b 
                        hover:bg-transparent hover:text-colorprimary transition'>Add to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={Prod2} alt="" className="w-full object-cover object-center h-36 " />
                        <div className="absolute  inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <BsSearch/>
                            </a>
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <AiOutlineHeart/>
                            </a>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4'>
                        <a href="#">
                            <h4 className='uppercase text-xl font-medium text-gray-800 hover:text-colorprimary transition mb-2 '>chaussure</h4>
                        </a>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-xl text-colorprimary font-semibold'>$45.00</p>
                            <p className='text-sm text-gray-400 line-through'>$60.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                            </div>
                            <div className='text-xs text-gray-500 ml-3'>(150)</div>
                        </div>
                    </div>
                    <a href="#" className='block w-full py-1 text-center text-white bg-colorprimary border border-colorprimary rounded-b 
                        hover:bg-transparent hover:text-colorprimary transition'>Add to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={Prod3} alt="" className="w-full h-36 object-cover object-center " />
                        <div className="absolute  inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <BsSearch/>
                            </a>
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <AiOutlineHeart/>
                            </a>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4'>
                        <a href="#">
                            <h4 className='uppercase text-xl font-medium text-gray-800 hover:text-colorprimary transition mb-2 '>chaussure</h4>
                        </a>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-xl text-colorprimary font-semibold'>$45.00</p>
                            <p className='text-sm text-gray-400 line-through'>$60.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                            </div>
                            <div className='text-xs text-gray-500 ml-3'>(150)</div>
                        </div>
                    </div>
                    <a href="#" className='block w-full py-1 text-center text-white bg-colorprimary border border-colorprimary rounded-b 
                        hover:bg-transparent hover:text-colorprimary transition'>Add to cart</a>
                </div>
                <div className="bg-white shadow rounded overflow-hidden group">
                    <div className="relative">
                        <img src={Prod4} alt="" className="w-full object-cover object-center h-36 " />
                        <div className="absolute  inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <BsSearch/>
                            </a>
                            <a href="#" className='text-white text-lg w-9 h-9 bg-colorprimary rounded-full flex items-center
                             justify-center hover:bg-gray-800 transition'>
                                <AiOutlineHeart/>
                            </a>
                        </div>
                    </div>
                    <div className='pt-4 pb-3 px-4'>
                        <a href="#">
                            <h4 className='uppercase text-xl font-medium text-gray-800 hover:text-colorprimary transition mb-2 '>chaussure</h4>
                        </a>
                        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
                            <p className='text-xl text-colorprimary font-semibold'>$45.00</p>
                            <p className='text-sm text-gray-400 line-through'>$60.00</p>
                        </div>
                        <div className="flex items-center">
                            <div className="flex gap-1 text-sm text-yellow-400">
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                                <span><BsStar/></span>
                            </div>
                            <div className='text-xs text-gray-500 ml-3'>(150)</div>
                        </div>
                    </div>
                    <a href="#" className='block w-full py-1 text-center text-white bg-colorprimary border border-colorprimary rounded-b 
                        hover:bg-transparent hover:text-colorprimary transition'>Add to cart</a>
                </div>
            </div>
        </div>
     );
}
 
export default NewsArrivages;