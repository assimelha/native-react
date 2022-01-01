import { useEffect } from "react";

const DOMAIN = "https://usenative.com";

type Props = {
  token: string;
  userId: string;
  userKey?: string;
  domain?: string;
};

export const useNative = (props: Props) =>
  useEffect(() => {
    // @ts-ignore
    if (window.__native_notifications_injected__) return;
    // @ts-ignore
    window.__native_notifications_injected__ = true;

    const d = props.domain || DOMAIN;

    const script = document.createElement("script");
    script.src = `${d}/embed/native.js`;
    script.onload = function () {
      // @ts-ignore
      window.native.boot(d, {
        token: props.token,
        userId: props.userId,
        userKey: props.userKey,
      });
    };
    script.defer = true;

    const onScriptError = () => script.remove();
    script.addEventListener("error", onScriptError);

    document.head.appendChild(script);
  }, []);
