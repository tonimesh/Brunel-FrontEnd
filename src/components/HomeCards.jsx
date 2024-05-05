import Carousel from 'react-bootstrap/Carousel';

function HomeCards() {
  return (
    <Carousel controls={false} indicators={true}>
      <Carousel.Item>
        <Carousel.Caption>
        <h3>Enhance fortune 50 company’s insights teams research capabilities</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <h3>Utilize advanced analytics for deeper consumer insights.</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
        <h3>Integrate machine learning for accurate market trend predictions.</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCards;