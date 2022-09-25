export const settings = {
    rows: 1,
    swipeable: true,
    draggable: true,
    renderButtonGroupOutside : true,
    responsive: {
        superLargeDesktop: {
            breakpoint: { max: 9999, min: 2000 },
            items: 6,
            slidesToSlide: 2
        },
        LargeDesktop: {
            breakpoint: { max: 2000, min: 1280 },
            items: 6,
            slidesToSlide: 2
        },
        desktop: {
            breakpoint: { max: 1280, min: 1024 },
            items: 5,
            slidesToSlide: 2
        },
        tablet: {
            breakpoint: { max: 1024, min: 950 },
            items: 4,
            slidesToSlide: 2
        },
        medium: {
            breakpoint: { max: 950, min: 606 },
            items: 3,
            slidesToSlide: 2,
            arrows:false
        },
        mobile: {
            breakpoint: { max: 606, min: 420 },
            items: 2,
            slidesToSlide: 2,
            arrows:false
        },
        smartWatchHaha: {
            breakpoint: { max: 420, min: 0 },
            items: 1,
            arrows:false
        }
    },
};