import './HomeCarausel.css'
import Carousel from '../../../node_modules/react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



const HomeCarausel = () => {
          
  return (
    <div style = {{height:"575px"}}>
      <Carousel>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div style={{ height: "575px"}} className='carouselcustomItem'   >
          <div style={{width:'50%'}} className='caroselcustomItem-left'>
              <img src="https://img.freepik.com/free-photo/toast-with-avocado-plate_1220-7374.jpg?size=626&ext=jpg&ga=GA1.2.544568252.1694433592&semt=sph" alt="" />
          </div>
          <div className='caroselcustomItem-right'>
            <h1>
              Search By description
            </h1>
            <Link to="/search/byDescription"><button>Search By Description</button></Link>

          </div>
        </div>
      <Carousel.Caption>
        
        
        </Carousel.Caption>
        
      </Carousel.Item>
      
      <Carousel.Item>
        <div style={{ height: "575px" }} className='carouselcustomItem' >
          <div style={{width:'50%'}} className='caroselcustomItem-left'>
              <img src="https://img.freepik.com/free-photo/various-rice-scattered-from-bottles_23-2148180891.jpg?size=626&ext=jpg&ga=GA1.2.544568252.1694433592&semt=sph" alt="" />
          </div>
          <div className='caroselcustomItem-right'>
            <h1>Seach By ingredient</h1>
            <Link to="/search/byIngredients"><button>Search By ingredient</button></Link>
          </div>
        </div>
      
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div style={{ height: "575px" }} className='carouselcustomItem' >
            <div style={{width:'50%'}} className='caroselcustomItem-left'>
                <img src="https://img.freepik.com/free-photo/top-view-food-ingredients_23-2148834755.jpg?size=626&ext=jpg&ga=GA1.2.544568252.1694433592&semt=ais" alt="" />
            </div>
            <div className='caroselcustomItem-right' >
              <h1>Create your own recipe</h1>
              <Link to="/create"><button>Create Your own recipe</button></Link>

            </div>
        </div>
        <Carousel.Caption>
        
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    );
};

export default HomeCarausel;