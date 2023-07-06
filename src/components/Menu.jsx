import { FaBars, FaTshirt} from 'react-icons/Fa';

const Menu = () => {
    return (
        <nav className=" bg-gray-800">
            <div className=" h-full container mx-auto flex">
                <div className="px-8 py-4 bg-colorprimary flex items-center cursor-pointer relative group">
                    <span className='text-white'>
                        <FaBars/>
                    </span>
                    <span className='capitalize ml-2 text-white'>All categories</span>
                    <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0
                     group-hover:opacity-100 transition duration-300 invisible group-hover:visible'>
                        <a href="#" className='flex items-center px-6 py-3  hover:bg-gray-100 transition'>
                        <FaTshirt className='w-5 h-5'/>
                        <span className='ml-6 text-gray-600 text-sm'>Tshirt</span>
                        </a>

                        <a href="#" className='flex items-center px-6 py-3  hover:bg-gray-100 transition'>
                        <FaTshirt className='w-5 h-5'/>
                        <span className='ml-6 text-gray-600 text-sm'>Tshirt</span>
                        </a>

                        <a href="#" className='flex items-center px-6 py-3  hover:bg-gray-100 transition'>
                        <FaTshirt className='w-5 h-5'/>
                        <span className='ml-6 text-gray-600 text-sm'>Tshirt</span>
                        </a>

                        <a href="#" className='flex items-center px-6 py-3  hover:bg-gray-100 transition'>
                        <FaTshirt className='w-5 h-5'/>
                        <span className='ml-6 text-gray-600 text-sm'>Tshirt</span>
                        </a>
                    </div>
                </div>

                <div className='flex items-center justify-between flex-grow pl-12'>
                    <div className='flex items-center space-x-6 capitalize'>
                        <a href="#" className='text-gray-200 hover:text-white transition'>Home</a>
                        <a href="#" className='text-gray-200 hover:text-white transition'>shop</a>
                        <a href="#" className='text-gray-200 hover:text-white transition'>about us</a>
                        <a href="#" className='text-gray-200 hover:text-white transition'>contact us</a>
                    </div>
                    <a href="#" className='text-gray-200 hover:text-white transition'>Login/Register</a>
                </div>
            </div>

        </nav>
      );
}
 
export default Menu;