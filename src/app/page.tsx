import Image from "next/image";

export default function Responsive(){
  return(
      <div className="parentContainer">
          <div className="childContainer">
              <div className="imageContainer" >
            
              <h1 className="title" style={{color:'white'}}>Antioxident Protection</h1>
              
              <p className="description">Vitamin c serum free radicles ko neutlize krk skin damge control krta hy.</p> 
               <button className="readMore"> Read More</button>
               </div>
  
          </div>
          <div className="childContainer">
              <div className="imageContainer">
              <h1 className="title" style={{color:'white'}}>Skin Brihtening</h1>
              <p className="description">vitamin c serum skin tone ko brighten krta hyor pigmentation ko reduce karta hy. </p> 
              <button className="readMore"> Read More</button>
               </div>
  
          </div>
          <div className="childContainer">
              <div className="imageContainer">
              <h1 className="title" style={{color:'white'}}>Collagen Prodction</h1>
              <p className="description">vitamin c serum collagen ko synthesis ko stimulate karta hy .</p> 
              <button className="readMore"> Read More</button>
               </div>
  
          </div>

          <div className="childContainer">
              <div className="imageContainer">
              <h1 className="title" style={{color:'white'}}>Hydration Source</h1>
              <p className="description">Vitamin c serum skin ki moisture retention ko increase krta hy jis sy skin hydrate ho.</p> 
              <button className="readMore"> Read More</button>
               </div>
  
          </div>


          <div className="childContainer">
              <div className="imageContainer">
              <h1 className="title" style={{color:'white'}}>Dark Spots</h1>
              <p className="description">vitamin c serum dark spots,age spots,aur acne markes ko light karta hy.</p> 
              <button className="readMore"> Read More</button>
               </div>
  
          </div>


          <div className="childContainer">
              <div className="imageContainer">
              <h1 className="title" style={{color:'white'}}>Anti Inflammantory </h1>
              <p className="description">Vitamin c serum skin ki redness aur inflammation ko reduce karta hy .</p> 
              <button className="readMore"> Read More</button>
               </div>
  
          </div>
  
      </div>
  )
  }