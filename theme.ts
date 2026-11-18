
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#2563EB",
      light: "#EFF6FF",
      dark: "#1D4ED8",
      contrastText: "#FFFFFF",
    },

    secondary: {
      main: "#64748B",
    },

    success: {
      main: "#16A34A",
      light: "#DCFCE7",
    },

    warning: {
      main: "#F59E0B",
    },

    error: {
      main: "#DC2626",
    },

    background: {
      default: "#F8FAFC",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#1E293B",
      secondary: "#64748B",
    },

    divider: "#E2E8F0",
  },

  typography: {
    fontFamily: '"Roboto", sans-serif',

    h5: {
      fontWeight: 700,
      fontSize: "1.25rem",
    },

    h6: {
      fontWeight: 700,
      fontSize: "1.1rem",
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },

  shape: {
    borderRadius: 12,
  },

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          border: "1px solid #E2E8F0",
          borderRadius: 14,
          boxShadow: "0 2px 8px rgba(15, 23, 42, 0.04)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9,
          padding: "10px 18px",
        },
      },
    },

    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: "#E2E8F0",
          padding: "15px 16px",
        },

        head: {
          backgroundColor: "#F8FAFC",
          color: "#475569",
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;
