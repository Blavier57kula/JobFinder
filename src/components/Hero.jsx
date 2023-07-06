import Banner from '../media/slider_1.jpg';

const Hero = () => {
    return ( 
        <div className=" bg-cover bg-no-repeat bg-center py-36" style={{backgroundImage:`url(${Banner})`}}>
           <div className="container">
              <h1 className='text-6xl text-gray-800 font-medium mb-4 capitalize'>
                best collections for <br/> home decoration
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident <br/>
                exercitationem, odio beatae eveniet consequatur illo!
              </p>
              <div className='mt-12'>
                <a href="#" className='bg-colorprimary text-white border font-medium border-colorprimary px-8 
                py-3 rounded-md hover:bg-transparent hover:text-colorprimary transition '>
                    Shop Now
                </a>
              </div>
           </div>
        </div>
     );
}
 
export default Hero;