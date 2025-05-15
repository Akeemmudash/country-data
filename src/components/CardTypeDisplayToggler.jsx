import { LayoutGrid, StretchHorizontal } from "lucide-react";
import React from "react";
import { useAppMainContext } from "../hooks/useAppMainContext";

export default function CardTypeDisplayToggler({ className }) {
  const { setCardOrientation, isVertical } = useAppMainContext();
  return (
    <div
      className={
        "relative border rounded-md overflow-hidden  border-gray-200 flex"
      }
    >
      <div
        className="grid-display p-3"
        onClick={() => setCardOrientation("vertical")}
      >
        <LayoutGrid className="text-gray-500 size-4" />
      </div>
      <div
        className="horizontal-display p-3"
        onClick={() => setCardOrientation("horizontal")}
      >
        <StretchHorizontal className="text-gray-500 size-4" />
      </div>

      <div
        className="indicator w-1/2 h-full bg-gray-300/30 absolute z-[-1] transition-transform duration-300"
        style={{ transform: `translateX(${isVertical ? "0" : "100%"})` }}
      ></div>
    </div>
  );
}
