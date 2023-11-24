import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { InputRadio } from "../../components/InputRadio";
import { Text } from "../../components/Text";
import { TextArea } from "../../components/TextArea";
import * as Styled from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useFormData } from "../../context/useFormData";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../../schemas/solicitation";

type IFormDataProps = z.infer<typeof schema>;
const SolicitationType = z.enum([
  "Contábil",
  "Jurídica",
  "Trabalhista",
  "Outras",
  ""
]);
type TipoSolicitacao = z.infer<typeof SolicitationType>;

export default function Home() {
  const { updateFormData } = useFormData();
  const {
    handleSubmit,
    register,
    setValue,
    reset,
    formState: { errors }
  } = useForm<IFormDataProps & TipoSolicitacao>({
    mode: "all",
    criteriaMode: "all",
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      mail: "",
      mobile: "",
      tel: "",
      date: "",
      description: "",
      solicitation: ""
    }
  });
  const handleSubmitForm = (data: IFormDataProps) => {
    console.log(data.date);

    const sentDate = new Date(data.date);

    if (isNaN(sentDate.getTime())) {
      console.error("Data inválida");
      return;
    }
    let priority = "";
    const currentDate = new Date();

    const millisecondsDiff = currentDate.getTime() - sentDate.getTime();

    const daysDiff = millisecondsDiff / (1000 * 60 * 60 * 24);

    if (daysDiff === 0) {
      priority = "Prioridade Baixa";
    } else if (daysDiff >= 1 && daysDiff <= 2) {
      priority = "Prioridade Média";
    } else if (daysDiff > 2) {
      priority = "Prioridade Alta";
    }

    const dateFormatted = `${sentDate.getDate()}/${
      sentDate.getMonth() + 1
    }/${sentDate.getFullYear()}`;

    const dataWithDates = {
      ...data,
      date: dateFormatted,
      priority
    };

    updateFormData(dataWithDates);

    reset();
    alert("Solicitação enviada com sucesso!");
  };

  const handleRadioChange = (value: TipoSolicitacao) => {
    setValue("solicitation", value);
  };

  return (
    <>
      <Styled.HomeWrapper>
        <Form id='send-data' onSubmit={handleSubmit(handleSubmitForm)}>
          <Input
            label='Nome'
            type='text'
            id='first-name'
            {...register("name")}
          />
          {errors.name && <span>{errors.name.message}</span>}

          <Input label='E-mail' type='email' id='mail' {...register("mail")} />
          {errors.mail && <span>{errors.mail.message}</span>}

          <Input label='Cel.' type='tel' id='mobile' {...register("mobile")} />
          {errors.mobile && <span>{errors.mobile.message}</span>}

          <Input label='Tel.' type='tel' id='tel' {...register("tel")} />
          {errors.tel && <span>{errors.tel.message}</span>}

          <div style={{ marginTop: "1rem" }}>
            <Text as='h3' content='Tipo de Solicitação' $weight='normal' />
            <InputRadio
              label='Contábil'
              id='accounting'
              value='accounting'
              onChange={() => handleRadioChange("Contábil")}
            />
            <InputRadio
              label='Jurídica'
              id='legal'
              value='legal'
              onChange={() => handleRadioChange("Jurídica")}
            />
            <InputRadio
              label='Trabalhista'
              id='labor'
              value='labor'
              onChange={() => handleRadioChange("Trabalhista")}
            />
            <InputRadio
              label='Outros'
              id='others'
              value='others'
              onChange={() => handleRadioChange("Outras")}
            />
          </div>
          <div style={{ marginTop: "1rem" }}>
            <Text as='h3' content='Descrição da Solicitação' $weight='normal' />
            <TextArea {...register("description")} />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <Input label='Data' type='date' id='date' {...register("date")} />
          </div>
          <Button form='send-data' type='submit'>
            Solicitar
          </Button>
        </Form>
      </Styled.HomeWrapper>
    </>
  );
}
