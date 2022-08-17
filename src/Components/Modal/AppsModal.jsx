import React, { useEffect, useState } from "react";
import check from "../../assets/check.png";
import denied from "../../assets/denied.png";

function AppsModal({ on, state, message = "Success", close }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(on);
    }, 500);
    return () => setShow(false);
  }, [on]);
  return (
    <div
      onClick={close}
      style={{ backgroundColor: "rgba(36, 36, 36, 0.67)" }}
      className={` duration-200 ${on ? "visible" : "invisible"} fixed w-screen h-screen z-50 inset-0 flex justify-center items-center gap-4`}
    >
      <h1 className={` relative ${show ? " right-0 opacity-100 " : " opacity-0 right-96"} duration-300 text-4xl ${state ? `text-green-500` : `text-red-500`} font-bold`}>{message}</h1>{" "}
      <img className={`${show ? " opacity-100 rotate-0" : "opacity-0 rotate-180"} duration-700  `} src={state ? check : denied} width={80} />
    </div>
  );
}

export default React.memo(AppsModal);
