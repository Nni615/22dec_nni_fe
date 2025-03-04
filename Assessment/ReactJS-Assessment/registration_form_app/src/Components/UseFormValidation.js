import { useState } from "react";

// Define validation rules using Regular Expressions
const validationRules = {
  firstName: /^[A-Za-z]{4,30}$/,
  lastName: /^[A-Za-z]{4,30}$/,
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{6,}$/,
  phone: /^\d{10}$/,
  zip: /^\d{5,6}$/,
};

// Custom Hook for Form Validation
 export default function UseFormValidation(initialState) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  // Function to handle input changes and validate fields
  const handleformChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Validate field using regular expression
    if (validationRules[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validationRules[name].test(value) ? "" : `Invalid ${name}`,
      }));
    }
  };

  return { values, errors, handleformChange };
}
