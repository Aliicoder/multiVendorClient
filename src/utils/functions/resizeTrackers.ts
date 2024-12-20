import { RefObject } from "react";

export let trackElementHeight = (reference:RefObject<HTMLDivElement>) =>{
  if(reference && reference.current ){
    const handleResize = () => {
      if (reference.current?.clientHeight) {
        const height = reference.current.clientHeight;
        document.documentElement.style.setProperty("--header-height", `${height}px`);
      }
    };
    const resizeObserver = new ResizeObserver(handleResize);
    if (reference.current) 
      resizeObserver.observe(reference.current);
  }
}