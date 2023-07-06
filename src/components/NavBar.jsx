

import logo from '../media/logo.png';
import { BsSearch } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/Ai';
import {AiOutlineHeart } from 'react-icons/Ai';
import {BsMinecartLoaded } from 'react-icons/bs';


const NavBar = () => {
    return ( 
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
             {/*=============logo============> */}
                <a href="#">
                    <img src={logo} className="w-32" alt="logo" />
                </a>

             {/*=============recherche============> */}
                <div className='w-full max-w-xl relative flex'>
                    <span className='absolute left-4 top-3  text-lg text-gray-400'>
                    <BsSearch/>
                    </span>
                    <input type="text" className='w-full focus:outline-none border border-colorprimary 
                    border-r-0 pl-12 py-1 pr-3 rounded-l-md' placeholder='Rechercher' />
                    <button className=' bg-colorprimary border border-colorprimary text-white px-8 rounded-r-md
                    hover:bg-transparent hover:text-colorprimary transition'>Rechercher</button>
                </div>

             {/*=============icons============> */}
                <div className="flex items-center space-x-4">
                    <a href="#" className='text-center text-gray-700 hover:text-colorprimary transition relative'>
                        <div className=" flex justify-center text-2xl">
                            <AiOutlineHeart/>
                        </div>
                        <div className='text-xs leading-3'>Wish List</div>
                        <span className='absolute right-0 -top-2 w-5 h-5 rounded-full flex items-center justify-center
                         bg-colorprimary text-white text-xs'>7</span>
                    </a>
                    <a href="#" className='text-center text-gray-700 hover:text-colorprimary transition relative'>
                        <div className=" flex justify-center text-2xl">
                              <BsMinecartLoaded/>
                        </div>
                        <div className='text-xs leading-3'>Cart</div>
                        <span className='absolute -right-3 -top-2 w-5 h-5 rounded-full flex items-center justify-center
                         bg-colorprimary text-white text-xs'>5</span>
                    </a>
                    <a href="#" className='text-center text-gray-700 hover:text-colorprimary transition relative'>
                        <div className=" flex justify-center text-2xl">
                            <AiOutlineUser />
                        </div>
                        <div className='text-xs leading-3'>User</div>
                        
                    </a>
                    
                   
                </div>
            </div>
        </header>
    
    
    );
}
 
export default NavBar;