import { render } from "solid-js/web";

import { extendTheme, HopeProvider } from "../src";
import App from "./App";

const theme = extendTheme({});

render(
  () => (
    <HopeProvider theme={theme}>
      <App />
    </HopeProvider>
  ),
  document.getElementById("root") as HTMLDivElement
);
