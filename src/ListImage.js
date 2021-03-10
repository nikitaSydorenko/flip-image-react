import Image from "./Image";


const ListImage = ({images, setImages}) => images.map((image) => <Image key={image.id} setImages={setImages} image={image} idx={image.id}/>)

export default ListImage