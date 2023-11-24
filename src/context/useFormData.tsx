import { useContext } from "react";
import { FormDataContext } from "./list";

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export { useFormData };
