import React from "react";

export default function Loading() {
  return (
    <div
      className="loading-container"
      role="status"
      aria-label="Loading content"
    >
      <div className="spinner" />
      <p className="loading-text">Loading...</p>
    </div>
  );
}
