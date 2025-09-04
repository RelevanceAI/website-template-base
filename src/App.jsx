import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import RelevanceLogo from "./assets/images/logo.jpg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Home component for the root route
function Home() {
  const [count, setCount] = useState(0);
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="flex gap-8 mb-8">
        <a
          href="https://vite.dev"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img src={viteLogo} className="h-24 w-24" alt="Vite logo" />
        </a>
        <a
          href="https://react.dev"
          target="_blank"
          className="transition-transform hover:scale-110"
        >
          <img
            src={RelevanceLogo}
            className="h-24 w-24 animate-spin-slow"
            alt="Relevance logo"
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold mb-8">Vite + React</h1>
      <div className="flex flex-col items-center gap-6">
        <Button onClick={() => setCount((count) => count + 1)} size="lg">
          count is {count}
        </Button>
        <p className="text-muted-foreground">
          Edit{" "}
          <code className="bg-muted px-2 py-1 rounded text-sm">
            src/App.jsx
          </code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-muted-foreground mt-8 text-center">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

// Router configuration
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
