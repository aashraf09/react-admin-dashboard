import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
      grey: {
          100: "#d1d1d1",
          200: "#a2a2a2",
          300: "#747474",
          400: "#454545",
          500: "#171717",
          600: "#121212",
          700: "#0e0e0e",
          800: "#090909",
          900: "#050505"
      },

      primary: {
          100: "#ccccd6",
          200: "#9999ac",
          300: "#666683",
          400: "#333359",
          500: "#000030",
          600: "#000026",
          700: "#00001d",
          800: "#000013",
          900: "#00000a"
      },

      redAccent: {
          100: "#fff5f0",
          200: "#ffebe0",
          300: "#ffe1d1",
          400: "#ffd7c1",
          500: "#ffcdb2",
          600: "#cca48e",
          700: "#997b6b",
          800: "#665247",
          900: "#332924"
      },

      greenAccent: {
          100: "#dcf1e7",
          200: "#bae2cf",
          300: "#97d4b8",
          400: "#75c5a0",
          500: "#52b788",
          600: "#42926d",
          700: "#316e52",
          800: "#214936",
          900: "#10251b"
      },

      blueAccent: {
          100: "#e1f7f7",
          200: "#c3efef",
          300: "#a4e8e6",
          400: "#86e0de",
          500: "#68d8d6",
          600: "#53adab",
          700: "#3e8280",
          800: "#2a5656",
          900: "#152b2b"
      }
  }
  : {
      grey: {
          100: "#050505",
          200: "#090909",
          300: "#0e0e0e",
          400: "#121212",
          500: "#171717",
          600: "#454545",
          700: "#747474",
          800: "#a2a2a2",
          900: "#d1d1d1",
      },

      primary: {
          100: "#00000a",
          200: "#000013",
          300: "#00001d",
          400: "#000026",
          500: "#000030",
          600: "#333359",
          700: "#666683",
          800: "#9999ac",
          900: "#ccccd6",
      },
      redAccent: {
          100: "#332924",
          200: "#665247",
          300: "#997b6b",
          400: "#cca48e",
          500: "#ffcdb2",
          600: "#ffd7c1",
          700: "#ffe1d1",
          800: "#ffebe0",
          900: "#fff5f0",
      },

      greenAccent: {
          100: "#10251b",
          200: "#214936",
          300: "#316e52",
          400: "#42926d",
          500: "#52b788",
          600: "#75c5a0",
          700: "#97d4b8",
          800: "#bae2cf",
          900: "#dcf1e7",
      },

      blueAccent: {
          100: "#152b2b",
          200: "#2a5656",
          300: "#3e8280",
          400: "#53adab",
          500: "#68d8d6",
          600: "#86e0de",
          700: "#a4e8e6",
          800: "#c3efef",
          900: "#e1f7f7",
      },
  }),
});

// mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[700],
            },
          }
        : {
            primary: {
              main: colors.primary[100],
            },
            secondary: {
              main: colors.greenAccent[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: "#fcfcfc",
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

// context for color mode
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};
