import { InputHTMLAttributes } from "react";

interface DatePickerProps extends InputHTMLAttributes<HTMLInputElement> {

}

export function DatePicker(props: DatePickerProps) {
    return (
        <input
        {...props}
        className="bg-zinc-900 py-3 pl-3 rounded text-sm placeholder:text-zinc-500 max-w-[90px]"
        />
    )
}