import ImgCat1 from '../media/banner_2.jpg';
import ImgCat2 from '../media/instagram-img-03.jpg';
import ImgCat3 from '../media/single_3_thumb.jpg';
import ImgCat4 from '../media/instagram-img-04.jpg';

const Categories = () => {
    return ( 
    <div className='container py-6'>
        <h1 className='text-3xl text-gray-800 uppercase mb-6'>shop by categorie</h1>
        <div className="grid grid-cols-3 gap-3">
            <div className=" w-50 h-40 relative rounded-sm overflow-hidden group">
                <img src={ImgCat1} alt="" className="w-full" />
                <a href="#"className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center
                text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'>Sacs</a>
            </div>
            <div className=" w-50 h-40 relative rounded-sm overflow-hidden group">
                <img src={ImgCat2} alt="" className="w-full" />
                <a href="#"className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center
                text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'>Chaussures</a>
            </div>
            <div className=" w-50 h-40 relative rounded-sm overflow-hidden group">
                <img src={ImgCat3} alt="" className="w-full" />
                <a href="#"className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center
                text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'>Chemises</a>
            </div>
            <div className=" w-50 h-40 relative rounded-sm overflow-hidden group">
                <img src={ImgCat4} alt="" className="w-full" />
                <a href="#"className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center
                text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'>Chaussures femmes</a>
            </div>
            <div className=" w-50 h-40 relative rounded-sm overflow-hidden group">
                <img src={ImgCat2} alt="" className="w-full" />
                <a href="#"className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center
                text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'>Chaussures</a>
            </div>
            <div className=" w-50 h-40 relative rounded-sm overflow-hidden group">
                <img src={ImgCat3} alt="" className="w-full" />
                <a href="#"className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center
                text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'>Chemises</a>
            </div>
        
        </div> 
    </div>
    );
}
 
export default Categories;