import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Layout from "./components/layout/Layout";
import { TracingBeam } from "./ui/tracing-beam";

function App() {
  return (
    <div className="bg-black color text-white w-full h-full font-mont">
      <Layout />
    </div>
  );
}

export default App;
