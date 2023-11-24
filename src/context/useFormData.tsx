import { useContext } from "react";
import { FormDataContext } from "./list";

// hook criado para recuperar informações do context e usá-lo em qualquer parte do projeto,
// que esteja dentro de seu provider.
const useFormData = () => {
  const context = useContext(FormDataContext);
  // Uma validação para caso o hook seja utilizado fora do provider.
  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }
  return context;
};

export { useFormData };
