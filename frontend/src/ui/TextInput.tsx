import type { ReactNode } from "react";
import clsx from "clsx";

export interface TextInputProps {
  /** onChange */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** sub-label text */
  subLabel?: string | ReactNode;
  /** default value */
  name?: string;
  /* value for controlled input */
  value?: string;
  /** input placeholder */
  placeholder?: string;
  /** optional icon at start */
  startIcon?: ReactNode;
  /** optional icon button at end */
  endIcon?: ReactNode;
}

const TextInput = ({
  onChange,
  name,
  value,
  placeholder = "",
  startIcon,
  endIcon,
}: TextInputProps) => {
  const borderColorClass = "border border-(--input-field-border)";

  return (
    <div className="w-full flex flex-col gap-[2px]">
      <div
        className={clsx(
          "flex items-center rounded-[12px] h-[44px]",
          "hover:bg-(--input-field-hover-bg)",
          borderColorClass,
          "active:ring-[2px] active:ring-(--btn-outer-shadow-color) active:ring-offset-[2px] active:ring-offset-(--btn-inner-shadow-color)"
        )}
      >
        {startIcon && <span className="ml-3 mr-2">{startIcon}</span>}

        <input
          type="text"
          name={name}
          value={value}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          className="
            flex-1 
            bg-transparent 
            outline-none 
            h-full 
            px-[8px] 
            text-preset-5"
        />

        {endIcon && (
          <span className={clsx("mr-4 ml-2 flex align-center")}>
            <button type="button" disabled={!endIcon}>
              {endIcon}
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default TextInput;
