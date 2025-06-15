import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { drizzle } from "drizzle-orm/libsql";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
      </Routes>
      /* * ex of more nesting optinos at:
      https://reactrouter.com/start/declarative/routing * */
    </BrowserRouter>
  </StrictMode>,
);
