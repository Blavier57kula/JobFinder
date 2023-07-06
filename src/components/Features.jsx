import{TbTruckDelivery} from'react-icons/Tb';
import{FcSupport} from 'react-icons/Fc';
import{GiReceiveMoney} from 'react-icons/Gi';
const Features = () => {
    return ( 
    <div className="container py-10">
        <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
            <div className="border border-colorprimary rounded-sm px-2 py-3 flex 
            justify-center items-center gap-5">
                <TbTruckDelivery className='w-12 h-12'/>
                <div>
                    <h4 className='font-meduim capitalize text-lg'>free shopping</h4>
                    <p className='text-gray-500 text-sm'>Order over $ 300</p>
                </div>
            </div>
            <div className="border border-colorprimary rounded-sm px-2 py-3 flex 
            justify-center items-center gap-5">
                <GiReceiveMoney className='w-12 h-12'/>
                <div>
                    <h4 className='font-meduim capitalize text-lg'>money returns</h4>
                    <p className='text-gray-500 text-sm'>30 Days money return</p>
                </div>
            </div>
            <div className="border border-colorprimary rounded-sm px-2 py-3 flex 
            justify-center items-center gap-5">
                <FcSupport className='w-12 h-12'/>
                <div>
                    <h4 className='font-meduim capitalize text-lg'>24/7support</h4>
                    <p className='text-gray-500 text-sm'>Coustomer Support</p>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Features;