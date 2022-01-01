import React from "react";

import { useNative } from "@native/react";

const App = () => {
  useNative({ token: "some_token", userId: "some_user_id" });
  return <div>{example}</div>;
};
export default App;
