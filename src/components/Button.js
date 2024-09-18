import React from 'react';

function Button({ title, extraStyle, type, onClick }) {
  return (
    <button
      type={type}
      className= {`${extraStyle} p-2 rounded-md hover:opacity-65 duration-300 font-semibold text-[19px]`}>
      {title}
    </button>
  );
}

export default Button;
