import React, { useCallback, useEffect, useRef, useState } from "react";

const Scrollable = (props) => {
  const ref = useRef();
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  useEffect(() => {
    const el = ref.current;

    if (!el) {
      return undefined;
    }

    const onWheel = (e) => {
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel);

    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onMouseMove = useCallback((e) => {
    setState((prevState) => {
      if (!prevState.isScrolling || !ref.current?.contains(e.target)) {
        return prevState;
      }

      e.preventDefault();

      const nextScrollX = prevState.scrollX + e.clientX - prevState.clientX;
      ref.current.scrollLeft = nextScrollX;

      return {
        ...prevState,
        scrollX: nextScrollX,
        clientX: e.clientX,
      };
    });
  }, []);

  const onMouseUp = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      return;
    }

    e.preventDefault();
    setState((prevState) => ({
      ...prevState,
      isScrolling: false,
    }));
  }, []);

  const onMouseDown = useCallback((e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      return;
    }

    e.preventDefault();

    setState((prevState) => ({
      ...prevState,
      isScrolling: true,
      clientX: e.clientX,
      scrollX: ref.current?.scrollLeft || 0,
    }));
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, [onMouseDown, onMouseMove, onMouseUp]);

  return (
    <div
      ref={ref}
      className={props._class}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    >
      {React.Children.map(props.children, (child) =>
        React.Children.only(child)
      )}
    </div>
  );
};

export default Scrollable;
