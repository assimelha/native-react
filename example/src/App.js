import React from "react";

import { useNative } from "@native/react";

const App = () => {
  useNative("some_token", "some_user_id");
  return <div>{example}</div>;
};
export default App;
