import './HomeCarausel.css'
import Carousel from '../../../node_modules/react-bootstrap/Carousel';



const HomeCarausel = () => {
          
  return (
    <div style = {{height:"600px"}}>
      <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div style={{ height: "600px" }}>
          <img 
                className="d-block w-100 h-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq843i2nuaWDPsnZ5ok9AHgvLWHcvh2v7drw&usqp=CAU"
                alt="First slide"
          />
        </div>
      <Carousel.Caption>
        
        <h1 style={{color:"red"}}>First slide label</h1>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        
      </Carousel.Item>
      
      <Carousel.Item>
        <div style={{ height: "600px" }}>
          <img 
                className="d-block w-100 h-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiTI9Geei7Ba_ZHj-B6PtBXIHJnqtfmr0OBkl_qeEWV5BfmeIKnqBoS4gn-V3fv2ihgic&usqp=CAU"
                alt="First slide"
          />
        </div>
      
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
          
        <h3>Second slide label</h3>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div style={{ height: "600px" }}>
        <img 
                className="d-block w-100 h-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9ZQg1RFLtYV6Bnl6GHGJjlgjt9KDrxV8uPDKlWmT8tSy4YV-9Ls3AjlbZT2HrFvhuZd4&usqp=CAU"
                alt="First slide"
        />
        </div>
        <Carousel.Caption>
        
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default HomeCarausel;