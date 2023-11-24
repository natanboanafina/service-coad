import { z } from "zod";
const SolicitationType = z.enum([
  "Contábil",
  "Jurídica",
  "Trabalhista",
  "Outras",
  ""
]);
export type TipoSolicitacao = z.infer<typeof SolicitationType>;
