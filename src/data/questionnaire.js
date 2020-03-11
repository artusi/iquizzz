export const questionnaire = {
  label: 'HarryPotter questions',
  questions: [
    {
      title: 'Quantos filmes a série Harry Potter tem?',
      answers: [5, 6, 7, 8, 49],
      valid: 2
    }
    // {
    //   title: 'Nome do ator que atua como Harry Potter?',
    //   answers: [
    //     'Gabriel Padcliffe',
    //     'Daniel Radcliffe',
    //     'Daniel Madcliffe',
    //     'Gabriel PapaClear',
    //     'Arnold Schwarzenegger'
    //   ],
    //   valid: 1
    // },
    // {
    //   title:
    //     'Harry Potter tinha um animal de estimação? Se sim, qual animal era e qual era o nome desse animal?',
    //   answers: [
    //     'Wiggles, o falcão',
    //     'Edwill, o rouxinol',
    //     'Edwiges, a coruja',
    //     'Não há animal',
    //     'Pombão, o rato com asas'
    //   ],
    //   valid: 2
    // },
    // {
    //   title: 'Como são chamados as pessoas que não são bruxos?',
    //   answers: ['Valires', 'Tontos', 'Amargados', 'Trouxas', 'Millennials'],
    //   valid: 3
    // },
    // {
    //   title: 'Nome da namorada de Harry Potter?',
    //   answers: [
    //     'Gina Weasley',
    //     'Jenna Wess',
    //     'Luna Lovegood',
    //     'Kuna Wellgood',
    //     'Sheila Carvalho'
    //   ],
    //   valid: 0
    // }
  ],
  results: [
    {
      label: 'Você precisa entender melhor a magia, volte para Hogwarts',
      rightAnswers: 0
    },
    {
      label:
        'Quase lá, você foi bem mas não passaria por uma aula do professor Snape!',
      rightAnswers: 3
    },
    {
      label:
        'Você é bruxão mesmo!! Você será o próximo ministro da magia!! Dumbledore pede dicas para você!',
      rightAnswers: 5
    }
  ]
};

export default questionnaire;
