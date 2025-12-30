import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App, { Test, Test2, Hero } from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Test />
    <Test2 />
    {/* <Hero /> */}
  </StrictMode>
);
