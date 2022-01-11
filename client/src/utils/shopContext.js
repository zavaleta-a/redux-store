import React from "react";
import { Provider } from "react-redux";

import { createStore } from "redux";
import reducers from "./reducers";

export default function ShopProvider(props) {
  return <Provider store={createStore(reducers)} {...props} />;
}
