import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { SWRConfig } from 'swr';

const fetcher = url => fetch(url).then( response => response.json())

export const Root = () => {
  return (
    <SWRConfig value={{ fetcher }}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </SWRConfig>
  );
};