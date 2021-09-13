import Slider from "react-slick";
import { useContext } from "react";
import { Image } from "@chakra-ui/image";
import { Flex, Text } from "@chakra-ui/layout";
import { ApiConfigContext } from "../../contexts/ApiConfigContext";

const MovieGallery = ({ list }) => {
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
      { breakpoint: 1025, settings: { slidesToShow: 2 } },
      {
        breakpoint: 768,
        settings: {
          fade: true,
          speed: 200,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 2000,
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
    <Slider {...sliderConfig}>
      {list.map((item) => (
        <Flex direction="column" key={item.id} bg="primary.500">
          <Image
            h={{ base: "78vh", sm: "60vh" }}
            w="100%"
            objectFit="cover"
            src={imageBase + posterSizes[5] + item.poster_path}
          />
          <Flex
            h="2rem"
            align="center"
            justify="center"
            bg="primary.500"
            overflow="hidden"
          >
            <Text
              w="90%"
              opacity="0.8"
              color="text.500"
              fontWeight="bold"
              textAlign="center"
              fontSize="0.75rem"
            >
              {item.title}
            </Text>
          </Flex>
        </Flex>
      ))}
    </Slider>
  );
};

export default MovieGallery;
