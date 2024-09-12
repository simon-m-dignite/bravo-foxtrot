import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { routes } from "./routes/routes";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Global/Loader";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {routes.map((route, index) => {
          return <Route path={route.url} element={route.page} key={index} />;
        })}
      </Routes>
    </Suspense>
  );
}

export default App;
