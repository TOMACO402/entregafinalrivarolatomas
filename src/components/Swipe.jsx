import activate from "./images/Activate.jpg";
import anticold from "./images/anticold.jpg";
import ocean from "./images/Ocean.jpg";
import {Carousel} from "react-bootstrap";



const Swipe = () => {
  return(
    <div className='swipe Container'>
        <Carousel >
       <Carousel.Item>
        <img
        className="swipe d-block w-100"
        src={activate}
        alt="First slide"
        />
     <Carousel.Caption>
      <h3>1</h3>
      <p></p>
     </Carousel.Caption>
     </Carousel.Item>
    <Carousel.Item>
     <img
      className="swipe d-block w-100"
      src={anticold}
      alt="Second slide"
     />

    <Carousel.Caption>
      <h3>2</h3>
      <p></p>
    </Carousel.Caption>
    </Carousel.Item>
  <Carousel.Item>
     <img
      className="swipe d-block w-100"
      src={ocean}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>3</h3>
      <p>
      </p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
    )
}

export default Swipe;