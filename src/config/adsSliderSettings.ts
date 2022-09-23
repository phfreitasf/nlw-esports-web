export const settings = {    
    rows: 1,
    swipeable: true,
    draggable: false,
    renderButtonGroupOutside : true,
    responsive: {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1535 },
            items: 5,
            slidesToSlide: 2
        },
        LargeDesktop: {
            breakpoint: { max: 1535, min: 1280 },
            items: 4,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 3,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 606 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 606, min: 0 },
            items: 1,           
        }
    },
};