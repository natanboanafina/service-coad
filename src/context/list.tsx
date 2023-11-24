import { createContext, ReactNode, useState, useEffect } from "react";

// Interface com os tipos necessários para o contexto.
interface FormDataContextProps {
  formData: any[];
  updateFormData: (data: any) => void;
}

// Contexto criado com estado inicial.
const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

// Provider criado para poder passar os dados para os componentes filhos.
export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<any[]>([]);

  useEffect(() => {
    // Recupera os dados do localStorage ao carregar a página
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

  // Atualiza os dados do localStorage toda vez que o estado formData for atualizado.
  const updateFormData = (data: any) => {
    setFormData((prevData) => {
      const newData = [...prevData, data];
      localStorage.setItem("formData", JSON.stringify(newData));
      return newData;
    });
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export { FormDataContext };
