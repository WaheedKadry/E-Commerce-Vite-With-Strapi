import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          text: {
            primary: "#2B344a",
          },
          bg: { main: "#f6f6f6", },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
          mainRed: {
            main: "#D23F57",
          },
          textRed: {
            main: "#D23F57",
          },
          myColor: {
            main: "#f6f9fc",
            hover: "#d6dadd",
          },
          header1: {
            main: "#fff",
            bg: "red",
          },
          borderSearch: {
            main: "#000",
          },
        }
      : {
          // palette values for dark mode
          text: {
            primary: "#fff",
          },
          bg: { main: "#1d2021", },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          mainRed: {
            main: "#D23F57",
          },
          textRed: {
            main: "#D23F57",
          },
          myColor: {
            main: "#252b32",
            hover: "#333b44",
          },
          header1: {
            main1: "#fff",
          },
          borderSearch: {
            main: "#fff",
          },
        }),
  },
});

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return [theme, colorMode];
};
