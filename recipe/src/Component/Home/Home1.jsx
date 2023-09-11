import ScrollCarousel from 'scroll-carousel-react';
import RecipeCart from '../RecipeCart/RecipeCart';
import HomeCarausel from '../HomeCarousel/HomeCarausel';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css'
import { useLoaderData } from 'react-router-dom';


export const populerRecipeLoader = async () => {
  const res = await fetch(`https://khabo.pythonanywhere.com/`);
  const resJson = await res.json();
  console.log(resJson)
  return resJson;
};

const Home1 = () => {
    const recipes = useLoaderData();
  
  


    return (

      <div >
        <HomeCarausel></HomeCarausel>
      <div className='feature-show-container'>
        <Container >
            <Row>
                <Col >
                    <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                        <strong>Features</strong>
                    </h3>
                    
                </Col>
            </Row>
            <Row className='features-row'>
                <Col xs={12} md={6} lg={3} className='single-feature'>
                    <div className="card-wrapper">
                        <div className="card-box align-center">
                            <div style={{marginBottom:'15px'}}>
                                <SearchOutlinedIcon style={{fontSize:'60px'}}></SearchOutlinedIcon>
                            </div>
                            <h5 className="card-title mbr-fonts-style display-7"><strong>Find Recipe With Description</strong></h5>
                            <p className="card-text mbr-fonts-style display-7">Can't remember the exact name of a recipe or don't know a recipe of an amazing food you have eaten in restaurant? No worry, just describe it.</p>
                        </div>
                    </div>
                </Col>
                <Col  xs={12} md={6} lg={3} className='single-feature'>
                    <div className="card-wrapper">
                        <div className="card-box align-center">
                            <div style={{marginBottom:'15px'}}>
                                <span className="mbr-iconfont mobi-mbri-apple mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)',fontSize:'60px'  }}></span>
                            </div>
                            <h5 className="card-title mbr-fonts-style display-7"><strong>Find Recipe With Ingredients</strong></h5>
                            <p className="card-text mbr-fonts-style display-7">Have some leftover random ingredients in your pantry, You want the test of some ingredients in your food but don't know the recipe?</p>
                        </div>
                    </div>
                </Col>
                <Col  xs={12} md={6} lg={3} className='single-feature'>
                    <div className="card-wrapper">
                        <div className="card-box align-center">
                            <div style={{marginBottom:'15px'}}>
                                <span className="mbr-iconfont mobi-mbri-edit-2 mobi-mbri" style={{ color: 'rgb(53, 53, 53)', fill: 'rgb(53, 53, 53)',fontSize:'60px' }}></span>
                            </div>
                            <h5 className="card-title mbr-fonts-style display-7"><strong>Add Your Own Recipe</strong></h5>
                            <p className="card-text mbr-fonts-style display-7">An awesome recipe you want to share with our amazing community? Don't wait further, start writing.&nbsp;</p>
                        </div>
                    </div>
                </Col>
                
            </Row>
        </Container>
      </div>

    <div>
        <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2"><strong>Popular Recipes</strong>
            </h4>  
        </div>
        <div>
        <>

      <ScrollCarousel
        autoplay
        autoplaySpeed={8}
        speed={7}
        autoplayHoverPause:true
        onReady={() => console.log('I am ready')}
      >
            {recipes.map((recipe,index) => (
            <div key={index} className=''>
                <RecipeCart key={index} recipe={recipe}></RecipeCart>
            </div>
            ))}
      </ScrollCarousel>
    </>
        </div>
        
    </div>
                
    
    <div style={{display:'flex',justifyContent:'center'}}>
        <Container className='m-5' >
            
          
            <Row className="justify-content-center content-row mt-4"  >
                <Col className="p-4 p-md-3" lg={4} md={6} >
                    <div className="card-box" >
                        <div className="title" >
                            <h1 className='title_data'><strong>1,000,000</strong></h1>
                        </div>
                        <h4 className="card-title mbr-fonts-style display-5"><strong>Users</strong></h4>
                        <p className="mbr-text card-text mbr-fonts-style display-7" style={{color:"gray"}}>In Khabo, we have more than 1 million users continuously sharing and receiving recipes</p>
                    </div>
                </Col>
                <Col className="p-4 p-md-3" lg={4} md={6}>
                    <div className="card-box">
                        <div className="title">
                            <h1 className='title_data'><strong>5,000</strong></h1>
                        </div>
                        <h4 className="card-title mbr-fonts-style display-5"><strong>Recipes</strong></h4>
                        <p className="mbr-text card-text mbr-fonts-style display-7" style={{color:"gray"}}>We have more than 5,000 recipes of all kinds. You will always find something you like</p>
                    </div>
                </Col>
                <Col className="p-4 p-md-3" lg={4} md={6}>
                    <div className="card-box">
                        <div className="title">
                            <h1 className='title_data'><strong>100</strong></h1>
                        </div>
                        <h4 className="card-title mbr-fonts-style display-5"><strong>Shops</strong></h4>
                        <p className="mbr-text card-text mbr-fonts-style display-7" style={{color:"gray"}}>We are affiliated with more than 100 shops who will always give you the best ingredient deals</p>
                    </div>
                </Col>
        
            </Row>

        </Container>
    </div>


    

    

    

      </div>
    );
  };
  
  export default Home1;