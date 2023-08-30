import { memo } from "react";
function Input({ label, id, name, onBlur, onChange, error, touched, ...rest }) {
  return (
    <div>
      <div>
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          className="cursor-pointer shadow rounded-sm appearance-none focus:bg-white focus:outline-none border-2  w-72  py-2  px-3 text-gray-700 leading-tight focus:border-purple-500"
          name={name}
          id={id}
          onBlur={onBlur}
          onChange={onChange}
          {...rest}
        />
        <div>
          {touched && error && (
            <span className="text-red-400 font-mono">{error}</span>
          )}
        </div>
      </div>
    </div>
  );
}
export default memo(Input);
