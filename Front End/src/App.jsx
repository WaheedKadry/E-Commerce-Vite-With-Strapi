import HeaderTop from "./Components/header/HeaderTop";
import HeaderMiddle from "./Components/header/HeaderMiddle";
import HeaderBottom from "./Components/header/HeaderBottom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Styles/theme/theme";
import Hero from "./Components/hero/Hero";
import IconSection from "./Components/hero/IconSection";
import Main from "./Components/main/Main";
import Footer from "./Components/footer/Footer";
import ScrollToTop from "./Components/scroll/ScrollToTop";
function App() {
  document.title = "E-Commerce With Strapi";
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider {...{ theme }}>
        <CssBaseline />
        <HeaderTop />
        <HeaderMiddle />
        <HeaderBottom />
        <Box
          sx={{
            bgcolor: theme.palette.bg.main,
          }}
        >
          <Hero />
          <IconSection />
          <Main />
        </Box>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
