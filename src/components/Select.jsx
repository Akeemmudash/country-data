import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";

export default function Select({
  setFunction,
  options,
  selectedItem,
  placeholder = "Select an Item",
  className,
  renderOptionNode,
  ...rest
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const optionRefs = useRef([]);
  const selectRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle Keyboard Navigation
  useEffect(() => {
    function handleKeyDown(event) {
      if (!isOpen) return;

      if (event.key === "ArrowDown") {
        setHighlightedIndex((prev) => (prev + 1) % options.length);
      } else if (event.key === "ArrowUp") {
        setHighlightedIndex(
          (prev) => (prev - 1 + options.length) % options.length
        );
      } else if (event.key === "Enter" && highlightedIndex !== -1) {
        setFunction(options[highlightedIndex].id);
        setIsOpen(false);
      } else if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, highlightedIndex, options, setFunction]);

  useEffect(() => {
    if (highlightedIndex !== -1 && optionRefs.current[highlightedIndex]) {
      optionRefs.current[highlightedIndex].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedIndex]);

  return (
    <div className={cn("relative w-full", className)} ref={selectRef} {...rest}>
      <button
        className="not-even: border-secondary-dark flex w-full items-center justify-between rounded-lg border px-4 py-2  border-current/20 outline-gray-300 outline-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedItem?.name ?? selectedItem?.value ?? placeholder}
        <span
          className={`transition-transform opacity-20 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown />
        </span>
      </button>

      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 z-20 mt-2 w-full rounded-lg bg-white shadow-lg max-h-40 overflow-auto"
          role="listbox"
        >
          {!options ? (
            <p className="p-4">There are no options</p>
          ) : (
            options.map((option, index) => (
              <li
                key={option.id}
                ref={(el) => (optionRefs.current[index] = el)}
                onClick={() => {
                  setFunction(option);
                  setIsOpen(false);
                }}
                onMouseEnter={() => setHighlightedIndex(index)}
                role="option"
                aria-selected={option}
                className={cn(
                  "px-4 py-2",
                  highlightedIndex === index && "bg-gray-100"
                )}
              >
                {renderOptionNode
                  ? renderOptionNode(
                      option,
                      selectedItem?.id ?? "",
                      setFunction
                    )
                  : option?.name || option.value}
              </li>
            ))
          )}
        </motion.ul>
      )}
    </div>
  );
}
