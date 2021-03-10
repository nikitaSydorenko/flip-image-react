// import React, {useEffect, useState} from 'react'
// import './FlipImages.css'
//
// const FlipImages = () => {
//
//     const [activeClass, setActiveClass] = useState(false)
//
//
//
//     return (
//         <div className="container">
//             <div className="row">
//                 <div className="box">
//                     <img className={activeClass ? "flipImage" : null} id="flipImage1" onClick={handleClick}
//                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Bowfin_img.JPG/800px-USS_Bowfin_img.JPG"/>
//                 </div>
//                 <div className="box">
//                     <img id="flipImage2" className="flipImage" onClick={handleClick}
//                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Bowfin_img.JPG/800px-USS_Bowfin_img.JPG"/>
//                 </div>
//             </div>
//             <div className="row">
//                 <div className="box">
//                     <img id="flipImage3" className="flipImage" onClick={handleClick}
//                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Bowfin_img.JPG/800px-USS_Bowfin_img.JPG"/>
//                 </div>
//                 <div className="box">
//                     <img id="flipImage4" className="flipImage" onClick={handleClick}
//                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Bowfin_img.JPG/800px-USS_Bowfin_img.JPG"/>
//                 </div>
//             </div>
//         </div>
//     )
// }
//
// export default FlipImages