export const settings = {
    infinite: true,
    centerMode: true,
    centerPadding: "10px",
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 1,
      responsive: [
          {
              breakpoint: 1550,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
              }
          },
          {
              breakpoint: 1300,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                
              }
          },
          {
              breakpoint: 800,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  centerMode: true,
                  centerPadding: "100px"
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  centerMode: true,
                  centerPadding: "150px"
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1,
                  centerMode: true,
                  centerPadding: "120px"
                  
              }
          }
      ]
  };