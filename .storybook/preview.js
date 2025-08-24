import "../index.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { makeTheme } from "../src/theme";

const light = makeTheme("light");
const dark = makeTheme("dark");

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    withThemeFromJSXProvider({
      themes: { light, dark }, // 👈 concrete MUI theme objects
      defaultTheme: "light",
      Provider: ThemeProvider, // the MUI provider to wrap stories
      GlobalStyles: CssBaseline, // optional, adds <CssBaseline />
    }),
  ],

  // Optional: show backgrounds that match your app
  parameters: {
    backgrounds: {
      default: "App",
      values: [
        { name: "App", value: "#F2F2F7" },
        { name: "Dark", value: "#0B0B0B" },
        { name: "White", value: "#FFFFFF" },
      ],
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    // If you use @storybook/addon-a11y, typical flags are `disable` or per-story parameters.
    // a11y: { disable: false },
  },
};

export default preview;
