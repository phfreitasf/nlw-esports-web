export const settings = {
    centerPadding: "0px",
    infinite:false,
    centerMode: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
      responsive: [
          {
              breakpoint: 1550,
              settings: {
                  slidesToShow: 6,
                  slidesToScroll: 3,
              }
          },
          {
              breakpoint: 1300,
              settings: {
                  slidesToShow: 5,
                  slidesToScroll: 3,
                  centerPadding: "30px",
              }
          },
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 4,
                  slidesToScroll: 3,
                  centerPadding: "30px",
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 0,
                  centerMode: false,
                  
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 1

              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  
              }
          }
      ]
  };