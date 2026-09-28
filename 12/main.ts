function validarSenha(senha: string) {
  const temMinuscula = /[a-z]/.test(senha);
  const temMaiuscula = /[A-Z]/.test(senha);
  const temDigito = /\d/.test(senha);
  const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);
  const temTamanho = senha.length >= 8;

  const senhaValida = temMinuscula && temMaiuscula && temDigito && temCaractereEspecial && temTamanho;

  return (senhaValida) ? "Senha Forte" : "Senha Fraca";
}

console.log(validarSenha("Abra"))
console.log(validarSenha("Abr@"))
console.log(validarSenha("Abr@s123"))