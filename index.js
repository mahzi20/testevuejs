var app = new Vue({
  el: "#app",
  data: {
    colunas: ["Regra", "Descricao", "Se", "Faca", "Quando"],
    regra: [
      {
        Regra: "Regra 1",
        Descricao: "Descrição regra 1",
        Se: "Se 1",
        Faca: "Faça 1",
        Quando: "01-01-2000",
      },
      {
        Regra: "Regra 2",
        Descricao: "Descrição regra 2",
        Se: "Se 2",
        Faca: "Faça 2",
        Quando: "01-01-2000",
      },
    ],
    titulo: "Nova Regra",
    tituloRegra: "",
    descricaoRegra: "",
    seOpcao: "",
    facaOpcao: "",
    quandoOpcao: "",
    imgConecte: "img/conectese.png",
    imgCalendario: "img/calendario.png",
  },

  methods: {
    addRegra() {
      this.regra.push({
        Regra: this.tituloRegra,
        Descricao: this.descricaoRegra,
        Se: this.seOpcao,
        Faca: this.facaOpcao,
        Quando: this.quandoOpcao,
      });
      (this.tituloRegra = ""),
        (this.descricaoRegra = ""),
        (this.seOpcao = ""),
        (this.facaOpcao = ""),
        (this.quandoOpcao = "");
    },
  },
});
