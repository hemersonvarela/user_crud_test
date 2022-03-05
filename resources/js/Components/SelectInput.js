import React from 'react';

export default ({
  label,
  name,
  className,
  children,
  errors = [],
  ...props
}) => {
  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block text-gray-800 select-none" htmlFor={name}>
          {label}:
        </label>
      )}
      <select
        id={name}
        name={name}
        {...props}
        className={`p-2 leading-normal block w-full border border-gray-300 text-gray-800 bg-white font-sans rounded text-left appearance-none relative focus:outline-none focus:ring-1 focus:ring-indigo-400 focus:border-indigo-400 placeholder-gray-600 placeholder-opacity-100 ${errors.length ? 'border-red-400 focus:border-red-400 focus:ring-red-400;' : ''}`}
      >
        {children}
      </select>
      {errors && <div className="text-red-500 mt-2 text-sm">{errors}</div>}
    </div>
  );
};
