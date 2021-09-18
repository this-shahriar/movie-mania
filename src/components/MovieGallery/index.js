import Slider from "react-slick";
import { Image } from "@chakra-ui/image";
import { Flex } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { useContext, useState } from "react";
import fallbackimg from "../../assets/fallback.gif";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";

const MovieGallery = ({ list }) => {
  const router = useHistory();
  const [current, setCurrent] = useState();
  const { imageBase, posterSizes } = useContext(ApiConfigContext);

  const sliderConfig = {
    dots: true,
    speed: 600,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 1500,
    responsive: [
      { breakpoint: 1025, settings: { slidesToShow: 3 } },
      {
        breakpoint: 768,
        settings: {
          fade: true,
          speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2500,
        },
      },
    ],
    appendDots: (dots) => (
      <div style={{ marginBottom: "4rem" }}>
        <ul>{dots}</ul>
      </div>
    ),
  };

  return (
    <Slider {...sliderConfig} beforeChange={(e) => setCurrent(e)}>
      {list.map((item, idx) => (
        <Flex
          mb="2rem"
          key={idx}
          bg="primary.500"
          direction="column"
          onClick={() => router.push(`/movies/${item.id}`)}
        >
          <Image
            w="100%"
            objectFit="cover"
            h={{ base: "25rem", sm: "25rem" }}
            src={imageBase + posterSizes[5] + item.poster_path}
            fallbackSrc={fallbackimg}
          />
        </Flex>
      ))}
    </Slider>
  );
};

export default MovieGallery;
