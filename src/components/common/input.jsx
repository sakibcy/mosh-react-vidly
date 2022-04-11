import React from 'react';

const Input = ({ label, name, value, onChange, type, placeholder, autoFocus, error }) => {
    return ( 
        <div className="form-group m-3">
            <label htmlFor="username">{label}</label>
            <input
            autoFocus={autoFocus}
            value={value}
            onChange={onChange}
            name={name} 
            type={type}
            className="form-control"
            id={name}
            // aria-describedby="emailHelp"
            placeholder={placeholder}
            />
            {error && <div className="alert alert-danger">{error}</div>}
          </div>
     );
}
 
export default Input;