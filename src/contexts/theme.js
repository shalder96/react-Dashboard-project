import {createContext, useState, useMemo} from 'react'
import {createTheme} from '@mui/material/styles'

//color design tokens
export const tokens = (mode) => ({
  ...(mode === 'dark'
    ? {
      //primary
black: {
  100: "#d2d4d8",
  200: "#a5a9b1",
  300: "#787f89",
  400: "#4b5462",
  500: "#1e293b",
  600: "#18212f",
  700: "#121923",
  800: "#0c1018",
  900: "#06080c"
},

//accent
indigo: {
  100: "#d8e6fd",
  200: "#b1cdfb",
  300: "#89b4fa",
  400: "#629bf8",
  500: "#3b82f6",
  600: "#2f68c5",
  700: "#234e94",
  800: "#183462",
  900: "#0c1a31"
},

//secondary
teal: {
  100: "#cff1e6",
  200: "#9fe3cd",
  300: "#70d5b3",
  400: "#40c79a",
  500: "#10b981",
  600: "#0d9467",
  700: "#0a6f4d",
  800: "#064a34",
  900: "#03251a"
},

//highlight
red: {
  100: "#fcdada",
  200: "#f9b4b4",
  300: "#f58f8f",
  400: "#f26969",
  500: "#ef4444",
  600: "#bf3636",
  700: "#8f2929",
  800: "#601b1b",
  900: "#300e0e"
},
    } : {
      
      //primary
black: {
  100: "#06080c",
  200: "#0c1018",
  300: "#121923",
  400: "#18212f",
  500: "#1e293b",
  600: "#4b5462",
  700: "#787f89",
  800: "#a5a9b1",
  900: "#d2d4d8",
},

//accent
indigo: {
  100: "#0c1a31",
  200: "#183462",
  300: "#234e94",
  400: "#2f68c5",
  500: "#3b82f6",
  600: "#629bf8",
  700: "#89b4fa",
  800: "#b1cdfb",
  900: "#d8e6fd",
},

//secondary
teal: {
  100: "#03251a",
  200: "#064a34",
  300: "#0a6f4d",
  400: "#0d9467",
  500: "#10b981",
  600: "#40c79a",
  700: "#70d5b3",
  800: "#9fe3cd",
  900: "#cff1e6",
},

//highlight
red: {
  100: "#300e0e",
  200: "#601b1b",
  300: "#8f2929",
  400: "#bf3636",
  500: "#ef4444",
  600: "#f26969",
  700: "#f58f8f",
  800: "#f9b4b4",
  900: "#fcdada",
},
    }
    
  )
});


//mui theme settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  

  return {
    palette : {
      mode: mode,
      ...(mode === 'dark'
        ? {
          primary: {
            main: colors.indigo[500],
          },
          secondary: {
            main: colors.teal[500],
          },
          neutral: {
            dark: colors.black[700],
            main: colors.black[500],
            light: colors.black[100],
          },
          background: {
            default: colors.black[900]
          }
        } : {
           primary: {
            main: colors.indigo[100],
          },
          secondary: {
            main: colors.teal[500],
          },
          neutral: {
            dark: colors.black[700],
            main: colors.black[500],
            light: colors.black[100],
          },
          background: {
            default: colors.black[900]
          }
        }
      )
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: { fontSize: 40 },
      h2: { fontSize: 32 },
      h3: { fontSize: 24 },
      h4: { fontSize: 20 },
      h5: { fontSize: 16 },
      h6: { fontSize: 14 },
    },
  };
};

//context for color mode

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(() => ({
    toggleColorMode: () => setMode((prev) => (prev === "light" ? "dark" : "light"))
    }),
    []
  );
  
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return [theme, colorMode];
}
