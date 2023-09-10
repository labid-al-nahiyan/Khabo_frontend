import Slider from "react-slick";

const HomeCarausel = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
          };
        
          return (
            <div>
              <h2>Simple Carousel</h2>
              <Slider {...settings}>
                <div>
                  <h1>slider 1</h1>
                </div>
                <div>
                    <div>Slider 2</div>
                </div>
                <div>
                  <h1>Slider 3</h1>
                </div>
                {/* Add more slides as needed */}
              </Slider>
            </div>
    );
};

export default HomeCarausel;