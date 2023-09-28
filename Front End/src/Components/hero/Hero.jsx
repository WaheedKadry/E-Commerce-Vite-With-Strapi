import {
  Box,
  Button,
  Container,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import shoesImg from "../../Images/hero/banner-17.jpg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import pcImg from "../../Images/hero/banner-16.jpg";
import { Pagination } from "swiper/modules";
import imgSlide1 from "../../Images/hero/banner-15.jpg";
import imgSlide2 from "../../Images/hero/banner-25.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import useMediaQuery from "@mui/material/useMediaQuery";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
function Hero() {
  // slider
  let mySlider = [
    { text: "MEN", imgSrc: imgSlide1, sale: "30 % OFF" },
    { text: "WOMEN", imgSrc: imgSlide2, sale: "35 % OFF" },
  ];
  let theme = useTheme();
  return (
    <Container
      sx={{
        mt: 5,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: { xs: "column", lg: "row" },
        height: { xs: "auto", lg: "70vh" },
        gap: 2,
        py: 3,
        bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
      }}
    >
      <Box
        overflow={"hidden"}
        height={"100%"}
        sx={{
          width: { xs: "100%", lg: "100%" },
          position: "relative",
        }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {mySlider.map((e) => {
            return (
              <SwiperSlide key={Math.random()} className="parent-slider">
                {useMediaQuery("(max-width:600px)") ? (
                  <img style={{ display: "none" }} src={e.imgSrc} />
                ) : (
                  <img style={{ display: "block" }} src={e.imgSrc} />
                )}
                <Box
                  sx={{
                    color: "#000",
                    padding: { xs: "10px 10px 30px", sm: "0" },
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      color: "#222",
                      fontSize: { xs: "24px", sm: "30" },
                    }}
                  >
                    Lifestyle collection
                  </Typography>
                  <Typography
                    variant="h2"
                    sx={{
                      color: "#222",
                      fontSize: { xs: "44px", sm: "60px" },
                      fontWeight: "bold",
                      my: 1,
                    }}
                  >
                    {e.text}
                  </Typography>
                  <Stack
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: { xs: "center", sm: "left" },
                    }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#333",
                        my: 1,
                        fontSize: { xs: "24px", sm: "34px" },
                        fontWeight: "bold",
                      }}
                    >
                      SALE UP TO
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        color: "#d23f57",
                        ml: 1,
                        my: 1,
                        fontSize: { xs: "24px", sm: "34px" },
                        fontWeight: "bold",
                      }}
                    >
                      {e.sale}
                    </Typography>
                  </Stack>
                  <Typography
                    variant="p"
                    sx={{
                      color: "#000",
                      my: 2,
                      fontSize: { xs: "14px", sm: "18px" },
                    }}
                  >
                    Get Free Shipping on orders over $99.00
                  </Typography>
                  <Button
                    sx={{
                      display: "block",
                      px: 5,
                      py: 1,
                      mt: 3,
                      mx: { xs: "auto" },
                      background: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "5px",
                      fontWeight: "bold",
                      "&:hover": { bgcolor: "#151515" },
                      // @ts-ignore
                      // eslint-disable-next-line no-dupe-keys
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                    }}
                    variant="contained"
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: { xs: "100%", lg: "30%" },
          display: "flex",
          alignContent: "space-between",
          flexDirection: { md: "row", lg: "column", xs: "column" },
          gap: { lg: 3 },
        }}
      >
        <Box
          position={"relative"}
          sx={{
            width: { xs: "100%", md: "50%", lg: "100%" },
            height: { xs: "100%", lg: "50%" },
          }}
        >
          <img src={shoesImg} height={"100%"} width={"100%"} />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "30px",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "15px" }}
            >
              NEW ARRIVALS
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#2b3445",
                fontWeight: "bold",
                fontSize: "1.5em",
              }}
            >
              SUMMER
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", fontWeight: "bold", fontSize: "1.5em" }}
            >
              SALE 20% OFF
            </Typography>
            <Link
              href="#"
              sx={{
                position: "relative",
                color: "#2b3445",
                display: "flex",
                mt: 2,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // gap: "10px",
                transition: ".3s",
                "&:hover": {
                  color: "#d23f57",
                  fontWeight: "bold",
                  ".line": { width: "80%" },
                },
                width: "fit-content",
                fontSize: "15px",
              }}
            >
              <Typography
                // @ts-ignore
                variant="div"
                sx={{ alignItems: "center", display: "flex" }}
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "18px", ml: 0 }} />
              </Typography>
              <Typography
                // @ts-ignore
                variant="div"
                className="line"
                sx={{
                  width: "0%",
                  height: "3px",
                  background: "red",
                  transition: "0.3s",
                  mt: 0.5,
                  position: "absolute",
                  top: "100%",
                  left: "0",
                }}
              ></Typography>
            </Link>
          </Stack>
        </Box>
        <Box
          position={"relative"}
          sx={{
            width: { xs: "100%", md: "50%", lg: "100%" },
            height: { md: "100%", lg: "50%" },
          }}
        >
          <img src={pcImg} height={"100%"} width={"100%"} />
          <Stack
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: "30px",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#2b3445", fontSize: "15px" }}
            >
              GAMING 4K
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", fontWeight: "bold", fontSize: "1.5em" }}
            >
              DESKTOPS &
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#2b3445", fontSize: "15px" }}
            >
              LAPTOPS
            </Typography>
            <Link
              href="#"
              sx={{
                position: "relative",
                color: "#2b3445",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // gap: "10px",
                transition: ".3s",
                mt: 2,
                "&:hover": {
                  color: "#d23f57",
                  fontWeight: "bold",
                  ".line": { width: "80%" },
                },
                width: "fit-content",
                fontSize: "15px",
              }}
            >
              <Typography
                // @ts-ignore
                variant="div"
                sx={{ alignItems: "center", display: "flex" }}
              >
                Shop Now
                <ArrowForwardIcon sx={{ fontSize: "18px", ml: 0 }} />
              </Typography>
              <Typography
                // @ts-ignore
                variant="div"
                className="line"
                sx={{
                  width: "0%",
                  height: "3px",
                  background: "red",
                  transition: "0.3s",
                  mt: 0.5,
                  position: "absolute",
                  top: "100%",
                  left: "0",
                }}
              ></Typography>
            </Link>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}

export default Hero;
