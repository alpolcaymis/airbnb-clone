"use client";

import {
  FieldErrors,
  FieldValue,
  FieldValues,
  UseFormRegister,
} from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input = () => {
  return <div>Input</div>;
};

export default Input;
