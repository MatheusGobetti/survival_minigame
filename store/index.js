export const state = () => (
  {
    outcome: [
      {
        id: 1,
        answer: "A sua corrida não foi suficiente para superar a da manada. Você morreu atropelado."
      },
      {
        id: 2,
        answer: "Você sobe na árvore e escapa por pouco da manada!"
      },
      {
        id: 3,
        answer: "Os búfalos podem até ter acreditado, mas isso não os impediu de passar por cima de você. Morreu atropelado."
      },
      {
        id: 4,
        answer: "Você consegue fugir do local e voltar à cidade, porém sem nenhuma ideia de quem o atacou. Você continua tentando juntar as peças do quebra-cabeças. 2 semanas depois você morre atropelado, “acidentalmente”, ao sair de casa"
      },
      {
        id: 5,
        answer: "O homem lhe alcançou enquanto você tentava pegar o bilhete e lhe acertou uma marretada. Você morreu."
      },
      {
        id: 6,
        answer: "Você consegue desviar da primeira marretada do homem, que fica ocioso por um curto período, o suficiente para você acertá-lo em cheio na cabeça e apagá-lo no chão."
      },
      {
        id: 7,
        answer: "Você informa a polícia o que aconteceu e passa a localização do laboratório. Chegando lá ela se depara com um sítio de produção de cocaína e prende todos os presentes. As evidências sugerem que você ainda pode estar em perigo, por este motivo a polícia lhe coloca no programa de proteção à testemunha e você sobrevive para vivenciar uma nova história. Parabéns, você ganhou!"
      },
      {
        id: 8,
        answer: "Você amarra o homem e se dirige ao laboratório. Você entra silenciosamente e consegue chegar ao salão principal, onde você observa aproximadamente umas 10 pessoas. Um passo em falso entrega a sua posição e você é alvejado. Você morreu."
      },
      {
        id: 9,
        answer: "Você mata o homem, pega a marreta e se dirige ao laboratório. Ao avistar 2 guardas na entrada, confiante de si e seus feitos recentes, você corre na direção dos guardas, segurando a marreta com as duas mãos levantadas acima da sua cabeça e gritando “LEEROY JEENKINS!!!!”. Infelizmente, o efeito surpresa foi prejudicado e os guardas não tiveram dificuldade em alvejá-lo. Você morreu."
      }
    ]
  }
)

/* Método que retorna uma função com as informações do JSON que serão necessárias
   na implementação dos outros componentes
*/
export const getters = {
  getOutcomeById: (state) => (id) => {
    return state.outcome.find(outcome => outcome.id == id);
  }
}