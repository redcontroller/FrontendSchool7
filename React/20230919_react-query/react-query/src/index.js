import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import './style.css';

const queryClient = new QueryClient(); // 쿼리 저장소

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
);
