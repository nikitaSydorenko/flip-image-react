import React, {useEffect, useMemo, useCallback, useState} from "react";
import './Image.css'

const Image = ({idx}) => {
    const [imageTarget, setImageTarget] = useState(null)
    const handleClick = useCallback ((event) => {
        setImageTarget(event.target);


    }, [imageTarget])

    const images = useMemo(() => [].slice.call(document.getElementsByClassName('flipImage')), [imageTarget])

   const flipImage = useCallback((event) => {
       if (!imageTarget) return;
       if (event.keyCode === 40) {
           imageTarget.style.transform = "rotateX(180deg)"
           imageTarget.style.transition = "all 2s"

       } else if (event.keyCode === 38) {
           imageTarget.style.transform = "rotateX( 0deg)"
           imageTarget.style.transition = "all 2s"

       } else if (event.keyCode === 37) {
           imageTarget.style.transform = "rotateY( 0deg)"
           imageTarget.style.transition = "all 2s"
       } else if (event.keyCode === 39) {

           imageTarget.style.transform = "rotateY( 180deg)"
           imageTarget.style.transition = "all 2s"
       }
   }, [imageTarget])


    useEffect(() => {
        document.addEventListener('keydown', flipImage)
        images.forEach( image => image.onclick = handleClick);
        return () => document.removeEventListener("keydown", flipImage)
    },[handleClick, flipImage, images])


    return (

            <div className="box">
                <img id={idx} onClick={handleClick} alt="image" className="flipImage"
                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/USS_Bowfin_img.JPG/800px-USS_Bowfin_img.JPG"/>
            </div>


    )
}

export default Image