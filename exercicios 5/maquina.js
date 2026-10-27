const maquina = {
  nome: 'Esteira Transportadora',
  funcionando: true,
  exibirStatus: function () {
    if (this.funcionando) {
      console.log(`A máquina ${this.nome} está em funcionamento.`);
    } else {
      console.log(`A máquina ${this.nome} está parada.`);
    }
  }
};
maquina.exibirStatus();