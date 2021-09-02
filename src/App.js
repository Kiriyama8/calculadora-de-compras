import React from "react";
import Products from "./pages/Products";

function App() {
  return (
    <div className={"container"}>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 offset-lg-3">
          <Products />
        </div>
      </div>
    </div>
  )
}

export default App;
