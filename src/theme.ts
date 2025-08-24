// src/theme.ts
import { createTheme } from "@mui/material/styles";

export const makeTheme = (mode: "light" = "light") =>
  createTheme({
    palette: {
      mode,
      primary: { main: "#2563EB" },
      success: { main: "#22C55E" },
      error:   { main: "#EF4444" },
      info:    { main: "#0EA5E9" },
      warning: { main: "#F59E0B" },
      background:
        mode === "light"
          ? { default: "#F2F2F7", paper: "#FFFFFF" }
          : { default: "#0B0B0B", paper: "#161616" },
      text:
        mode === "light"
          ? { primary: "#111827", secondary: "#6B7280" }
          : { primary: "#F5F5F5", secondary: "#A1A1AA" },
      divider: mode === "light" ? "#E5E7EB" : "#27272A",
    },
    components: {
      MuiButton: {
        defaultProps: { size: "large", variant: "contained" },
      },
      MuiCard: {
        styleOverrides: { root: { borderRadius: 16 } },
      },
    },
  });
