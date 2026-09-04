import type { Idioma } from "@/i18n/idiomas";
import { en } from "./en";
import { es } from "./es";
import { pt, type Dicionario } from "./pt";

export type { Dicionario };

const DICIONARIOS: Record<Idioma, Dicionario> = { pt, en, es };

// Todos os componentes que usam o dicionário são Server Components, então
// nada disso vai para o bundle do navegador. Componentes de cliente recebem
// só as strings de que precisam, via props.
export function dicionario(idioma: Idioma): Dicionario {
  return DICIONARIOS[idioma];
}
