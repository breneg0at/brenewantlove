import React, { useEffect, useRef, useState } from "react";

interface FloatingLabelInputProps {
  label: string;
  type?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  type = "text",
  value,
  placeholder,
  onChange,
  required,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    if (value === "") {
      setIsFocused(false);
    }
  };

  useEffect(() => {
    if (value) {
      setIsFocused(true);
    }
  }, [value]);

  return (
    <div className="relative">
      <input
        ref={inputRef}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        required={required}
        className={`inputModel transition-all duration-300 ${
          isFocused || value ? "pt-5 pl-3" : "pl-3"
        }`}
        placeholder={isFocused ? "" : placeholder} 
      />
      <label 
        className={`absolute left-3 transition-all duration-300 ${
          isFocused || value ? "text-[var(--primary-color)] text-sm top-3" : "text-gray-500 top-5"
        }`}
      >
        {isFocused ? label : ""}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
