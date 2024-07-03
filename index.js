const perguntas = [
    {
      pergunta: "Qual é o principal setor de atuação da Natura?",
      respostas: [
        "Tecnologia",
        "Alimentos",
        "Cosméticos e Beleza",
      ],
      correta: 2
    },
    {
      pergunta: "Em que ano a Natura foi fundada?",
      respostas: [
        "1969",
        "1999",
        "1985",
      ],
      correta: 0
    },
    {
      pergunta: "Qual a missão da Natura?",
      respostas: [
        "Bem estar bem",
        "Criar e melhorar tecnologia do mundo",
        "Ser a maior empresa de cosméticos do mundo",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o objetivo da linha Natura Mamãe e Bebe?",
      respostas: [
        "Produtos para adolescentes",
        "Produtos para gestantes e bebês",
        "Produtos de beleza para homens",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a origem dos ingredientes utilizados na linha Ekos da Natura?",
      respostas: [
        "Importados da Europa",
        "Pantas nativas da Amazônia",
        "Síntese em laboratório",
      ],
      correta: 1
    },
    {
      pergunta: "Qual linha de produtos da Natura é conhecida por utilizar óleos essenciais e ingredientes naturais?",
      respostas: [
        "Aquarela",
        "Ekos",
        "Una",
      ],
      correta: 1
    },
    {
      pergunta: "Qual inovação foi introduzida pela Natura até 2024?",
      respostas: [
        "Lançamento de um aplicativo de realidade aumentada",
        "Novos canais de comunicação",
        "Implementação de um programa de reciclagem",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o principal desafio de comunicação empresarial na Natura ?",
      respostas: [
        "Ruído na comunicação vertical",
        "Falta de tecnologia",
        "Falta de interesse dos funcionários",
      ],
      correta: 0
    },
    {
      pergunta: "Qual a solução proposta para melhorar a acessibilidade para consultoras?",
      respostas: [
        "Oferecer treinamento em tecnologia",
        "Melhorar a intranet",
        "Implementar plataformas de feedback",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a cor predominante na identidade visual da Natura?",
      respostas: [
        "Verde",
        "Roxo",
        "Laranja",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas
  
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
  
      corretas.delete(item)
      if(estaCorreta) {
        corretas.add(item)
      }
      
      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
    quiz.appendChild(quizItem)
  }