# @native/react

>

[![NPM](https://img.shields.io/npm/v/@native/react.svg)](https://www.npmjs.com/package/@native/react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @native/react
```

## Usage

```tsx
import React from "react";

import { useNative } from "@native/react";

const App = () => {
  useNative("some_token", "some_user_id");
  return <div>{example}</div>;
};
export default App;
```

## License

MIT © [assimelha](https://github.com/assimelha)
