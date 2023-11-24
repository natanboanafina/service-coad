import { createContext, ReactNode, useState, useEffect } from "react";

interface FormDataContextProps {
  formData: any[];
  updateFormData: (data: any) => void;
}

const FormDataContext = createContext<FormDataContextProps | undefined>(
  undefined
);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<any[]>([]);

  useEffect(() => {
    // Recupere os dados do localStorage ao carregar a página
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      setFormData(JSON.parse(storedFormData));
    }
  }, []);

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
