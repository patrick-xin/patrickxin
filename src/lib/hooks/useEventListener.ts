/* eslint-disable */
// @ts-nocheck

import type { RefObject } from "react";
import { useEffect, useRef } from "react";

function useEventListener<T extends HTMLElement = HTMLDivElement>(
  eventName: keyof WindowEventMap | string, // string to allow custom event
  handler: (event: Event) => void,
  element?: RefObject<T>
) {
  // Create a ref that stores handler
  const savedHandler = useRef<(event: Event) => void>();

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current || window;
    if (!targetElement || !targetElement.addEventListener) {
      return;
    }

    // Update saved handler if necessary
    if (savedHandler.current !== handler) {
      savedHandler.current = handler;
    }

    // Create event listener that calls handler function stored in ref
    const eventListener = (event: Event) => {
      if (!!savedHandler?.current) {
        savedHandler.current(event);
      }
    };

    targetElement.addEventListener(eventName, eventListener);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element, handler]);
}

export default useEventListener;
