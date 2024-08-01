import React, { useState } from "react";

function Test() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <button className="btn btn-default filter-button" data-filter="all">
          All
        </button>
        <button className="btn btn-default filter-button" data-filter="Nails">
          Nails
        </button>
        <button className="btn btn-default filter-button" data-filter="Makeup">
          Makeup
        </button>
        <button className="btn btn-default filter-button" data-filter="Hair">
          Hair
        </button>
        <button className="btn btn-default filter-button" data-filter="Events">
          Events
        </button>
      </div>
    </>
  );
}

export default Test;
