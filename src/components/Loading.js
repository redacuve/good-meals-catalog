import React from 'react';

function Loading() {
  return (
    <div className="w-full bg-white opacity-75" data-testid="loading-container">
      <span className="text-indigo-500 my-6 mx-auto block w-0" data-testid="icon-container">
        <i className="fas fa-spinner fa-pulse fa-5x" />
      </span>
    </div>
  );
}

export default Loading;
