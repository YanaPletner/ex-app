import { Link } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function AppCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className="carousel-recent-designs">
      <h2>your recent designs</h2>

      <Carousel
        keyBoardControl={true}
        autoPlay={true}
        infinite={true}
        responsive={responsive}
        transitionDuration={1000}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((d, i) => (
          <div key={i} className="recent-design">
            <Link>
              <img
                src="https://static.canva.com/static/images/fb_cover-1.jpg"
                alt=""
              />
            </Link>
          </div>
        ))}
      </Carousel>
    </section>
  );
}
