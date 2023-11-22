"use client"
import Image from 'next/image';
import Slider from "react-slick";
import Slide from './Slide';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliderhero = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        arrows:false
    };

    const slideData = [
        {
            id: 0,
            img: "/GreyVein-1920-Statuario-ls.jpg",
            title: "Elegance Redefined",
            mainTitle: "Timeless Tiles for Your Home",
            price: "$20",
        },
        {
            id: 1,
            img: "/TerazzoStone-Jelly-White-ls1.jpg",
            title: "Trending Accessories",
            mainTitle: "Contemporary Tile Designs",
            price: "$15",
        },
        {
            id: 3,
            img: "/TimelessSilver.jpg",
            title: "Trending Accessories",
            mainTitle: "Contemporary Tile Designs",
            price: "$15",
        },
    ];

    return (
        <div>
            <div className="container pt-6 lg:pt-0">
                <Slider {...settings}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Sliderhero;