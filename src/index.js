// import React, { useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
// import UserContextProvider from "./Context/UserContext";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// let queryClient = new QueryClient();

// root.render(
//   <QueryClientProvider client={queryClient}>
//     <UserContextProvider>
//       <App />
//     </UserContextProvider>
//     {/* to see how react query work */}
//     <ReactQueryDevtools initialIsOpen="false" position="bottom-right" />
//   </QueryClientProvider>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import UserContextProvider from "./Context/UserContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
let queryClient = new QueryClient();

const AppWrapper = () => {
  useEffect(() => {
    // Dynamically add viewport meta tag for responsive scaling
    const meta = document.createElement("meta");
    meta.name = "viewport";
    meta.content = "width=device-width, initial-scale=1.0";
    document.head.appendChild(meta);

    // Cleanup on component unmount
    return () => {
      document.head.removeChild(meta);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider>
        <App />
      </UserContextProvider>
      <ReactQueryDevtools initialIsOpen="false" position="bottom-right" />
    </QueryClientProvider>
  );
};

root.render(<AppWrapper />);
