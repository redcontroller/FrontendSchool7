import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import 실습 from "./실습";
import 실습_정답 from "./실습_정답";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<실습_정답 />);
