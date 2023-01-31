/* @refresh reload */
import { render } from "solid-js/web";
import { setup } from "twind/shim";
import config from "../twind.config";

import App from "./App";

setup(config);

render(() => <App />, document.getElementById("root") as HTMLElement);
