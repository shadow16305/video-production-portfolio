import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  icon?: React.ReactElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          "border border-white/50 bg-white/10 backdrop-blur-2xl flex justify-between rounded-[6px] py-4 px-6",
          props.className
        )}
      >
        <input
          type="text"
          ref={ref}
          {...props}
          className="w-full focus:border-none focus:outline-none bg-transparent"
          required
        />
        {icon}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
