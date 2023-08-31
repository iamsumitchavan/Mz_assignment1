import { memo } from "react";
function Input({ label, id, name, onBlur, onChange, error, touched, ...rest }) {
  return (
    <div>
      <div className="">
        <label className="sr-only" htmlFor={id}>
          {label}
        </label>
        <input
          className="cursor-pointer shadow rounded-sm appearance-none bg-white focus:outline-none border-2  w-96  py-2   text-gray-700 leading-tight focus:border-purple-500"
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
