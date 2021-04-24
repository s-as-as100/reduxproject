import React from 'react';

const Home = () => {
    return ( 
        <div>
            <div className="add-to-cart">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
            </div>
            <h1>
                Home Component
            </h1>
              <div className="img-wrapper item">
              <img src="https://www.91-img.com/gallery_images_uploads/e/d/ed5c062684de8f5ff3e0a83dc3faaf808698865b.JPG?tr=h-550,w-0,c-at_max"/>
              </div>

              <div className="text-wrapper item">
             <span>
                 I-Phone
             </span>
             <span>
                 Price: $10000.00
             </span>
               
     <div className="btn-wrapper item">
         <button>
             Add To Cart
         </button>

     </div>


              </div>


        </div>
     );
}
 
export default Home;