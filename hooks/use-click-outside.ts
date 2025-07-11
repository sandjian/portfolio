import React, { useEffect } from "react";

type CallbackFunction = (event: MouseEvent | TouchEvent) => void;

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: CallbackFunction
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      callback(event);
    };

    document.addEventListener("mousedown", listener as EventListener);
    document.addEventListener("touchstart", listener as EventListener);

    return () => {
      document.removeEventListener("mousedown", listener as EventListener);
      document.removeEventListener("touchstart", listener as EventListener);
    };
  }, [ref, callback]);
};