import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NewsletterProvider from "./components/NewsletterProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <NewsletterProvider>
            <App />
        </NewsletterProvider>
    </React.StrictMode>
);
