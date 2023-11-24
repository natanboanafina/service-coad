import { z } from "zod";

export const schema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .refine((data) => data.trim() !== "", {
      message: "Nome é obrigatório"
    }),
  mail: z
    .string()
    .email("E-mail inválido")
    .refine((data) => data.trim() !== "", {
      message: "E-mail é obrigatório"
    }),
  mobile: z
    .string()
    .min(11, "Celular deve ter no mínimo 11 caracteres")
    .refine((data) => data.trim() !== "", {
      message: "Celular é obrigatório"
    }),
  tel: z.string().min(10, "Telefone deve ter no mínimo 10 caracteres"),
  date: z.string().min(6, "Data inválida"),
  description: z
    .string()
    .min(10, "Descrição deve ter no mínimo 10 caracteres")
    .refine((data) => data.trim() !== "", {
      message: "Mensagem é obrigatória"
    }),

  solicitation: z
    .enum(["Contábil", "Jurídica", "Trabalhista", "Outras", ""])
    .refine((data) => data.trim() !== "", {})
});
