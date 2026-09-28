enum Types {
  VEGETARIANO = "Vegetariano",
  NAO_VEGETARIANO = "Não vegetariano"
}

interface Prato {
  nome: string;
  tipo: Types;
}

const pratosItalianos: Prato[] = [
  {
    nome: "Macarronada a bolonhesa",
    tipo: Types.NAO_VEGETARIANO
  },
  {
    nome: "Lasanha 4 queijos",
    tipo: Types.VEGETARIANO
  },
  {
    nome: "Pizza Carabresa",
    tipo: Types.NAO_VEGETARIANO
  },
  {
    nome: "Nhoque Vegetariano",
    tipo: Types.VEGETARIANO
  },
  {
    nome: "Nhoque a bolonhesa",
    tipo: Types.NAO_VEGETARIANO
  },
]

function getTypeVegetariano(type: Types = Types.VEGETARIANO) {
  const pratosVegetarianos: Prato[] | undefined = pratosItalianos.filter(prato => prato.tipo == type)
  
  if (pratosVegetarianos.length == 0) {
    throw new Error("Não possui pratos vegetarianos")
  }

  return pratosVegetarianos;
}

console.log(getTypeVegetariano())