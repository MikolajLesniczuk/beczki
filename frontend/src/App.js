import { Hero } from "./hero/hero";
import { Route, Routes } from "react-router-dom";
import { Navigation } from "./navigation/navigation";
export const App = () => {
  return (
    <div>
      <Hero />
      <div>
        <Routes>
          <Route path="/kontakt" element={<Navigation />} />
        </Routes>
      </div>
    </div>
  );
};
