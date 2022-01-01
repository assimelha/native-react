import React, { FunctionComponent, ReactElement } from "react";

import { useNative } from "./useNative";

type Props = {
  token: string;
  userId: string;
  userKey?: string;
  domain?: string;
  children?: ReactElement | ((props: object) => ReactElement);
};

export const Native: FunctionComponent<Props> = (props) => {
  useNative({
    token: props.token,
    userId: props.userId,
    userKey: props.userKey,
    domain: props.domain,
  });

  if (!props.children) return null;

  if (React.isValidElement(props.children)) {
    return React.cloneElement(props.children);
  }

  if (typeof props.children === "function") {
    return props.children({});
  }

  return null;
};
