/*
  Easy    ->  20
  Medium  ->  20
  Hard    ->  24
  Total       64
*/

let questions = [
  {
    id: 1,
    isAnswered: false,
    type: 'E',
    question: 'Qual é o valor da raiz quadrada de 25?',
    options: [
      {
        text: '3',
        isCorrect: false,
      },
      {
        text: '4',
        isCorrect: false,
      },
      {
        text: '5',
        isCorrect: true,
      },
      {
        text: '6',
        isCorrect: false,
      },
    ],
  },
  {
    id: 2,
    isAnswered: false,
    type: 'M',
    question: 'Qual é o valor do pH do sangue humano?',
    options: [
      {
        text: '7,4',
        isCorrect: true,
      },
      {
        text: '6,5',
        isCorrect: false,
      },
      {
        text: '7,8',
        isCorrect: false,
      },
      {
        text: '6,9',
        isCorrect: false,
      },
    ],
  },
  {
    id: 3,
    isAnswered: false,
    type: 'M',
    question:
      'Qual o nome do jogo final do campeonato da NFL que decide o campeão da temporada?',
    options: [
      {
        text: 'Mega Bowl',
        isCorrect: false,
      },
      {
        text: 'Super Brawl',
        isCorrect: false,
      },
      {
        text: 'MMA',
        isCorrect: false,
      },
      {
        text: 'Super Bowl',
        isCorrect: true,
      },
    ],
  },
  {
    id: 4,
    isAnswered: false,
    type: 'M',
    question: 'O Carnaval dura quantos dias?',
    options: [
      {
        text: '5 dias',
        isCorrect: false,
      },
      {
        text: '4 dias',
        isCorrect: false,
      },
      {
        text: '3 dias',
        isCorrect: true,
      },
      {
        text: '2 dias',
        isCorrect: false,
      },
    ],
  },
  {
    id: 5,
    isAnswered: false,
    type: 'M',
    question: 'Quem é a esposa do rapper Jay-Z?',
    options: [
      {
        text: 'Shakira',
        isCorrect: false,
      },
      {
        text: 'Rihanna',
        isCorrect: false,
      },
      {
        text: 'Beyoncé',
        isCorrect: true,
      },
      {
        text: 'Katy Perry',
        isCorrect: false,
      },
    ],
  },
  {
    id: 6,
    isAnswered: false,
    type: 'H',
    question: 'Onde ocorreu a Revolta de Canudos?',
    options: [
      {
        text: 'Pernambuco',
        isCorrect: false,
      },
      {
        text: 'Bahia',
        isCorrect: true,
      },
      {
        text: 'Rio Grande do Sul',
        isCorrect: false,
      },
      {
        text: 'Minas Gerais',
        isCorrect: false,
      },
    ],
  },
  {
    id: 7,
    isAnswered: false,
    type: 'H',
    question: 'Qual das seguintes cidades não se situa na Toscania?',
    options: [
      {
        text: 'Florença',
        isCorrect: false,
      },
      {
        text: 'Roma',
        isCorrect: true,
      },
      {
        text: 'Siena',
        isCorrect: false,
      },
      {
        text: 'Pisa',
        isCorrect: false,
      },
    ],
  },
  {
    id: 8,
    isAnswered: false,
    type: 'H',
    question:
      'Há um astronauta que jogou golf na lua, qual seu nome e quando isso aconteceu?',
    options: [
      {
        text: 'Louis Shepard, em 1934',
        isCorrect: false,
      },
      {
        text: 'Milton Shepard, em 1876',
        isCorrect: false,
      },
      {
        text: 'Eliot Shepard, em 1987',
        isCorrect: false,
      },
      {
        text: 'Alan Shepard, em 1971',
        isCorrect: true,
      },
    ],
  },
  {
    id: 9,
    isAnswered: false,
    type: 'M',
    question: 'Qual artista é conhecido por ter dado sua orelha a sua amada?',
    options: [
      {
        text: 'Picasso',
        isCorrect: false,
      },
      {
        text: 'Portinari',
        isCorrect: false,
      },
      {
        text: 'Van Gogh',
        isCorrect: true,
      },
      {
        text: 'Leonardo da Vinci',
        isCorrect: false,
      },
    ],
  },
  {
    id: 10,
    isAnswered: false,
    type: 'H',
    question:
      'Quem é o autor da famosa composição clássica de 1896, Für Elise?',
    options: [
      {
        text: 'Beethoven',
        isCorrect: true,
      },
      {
        text: 'Mozart',
        isCorrect: false,
      },
      {
        text: 'Bach',
        isCorrect: false,
      },
      {
        text: 'Tchaikovsky',
        isCorrect: false,
      },
    ],
  },
  {
    id: 11,
    isAnswered: false,
    type: 'H',
    question:
      'Quais dos rios brasileiros se encontram, porém suas águas não se misturam?',
    options: [
      {
        text: 'Negro e Solimões',
        isCorrect: true,
      },
      {
        text: 'Paraná e São Francisco',
        isCorrect: false,
      },
      {
        text: 'Tietê e Nilo',
        isCorrect: false,
      },
      {
        text: 'Amazonas e São Francisco',
        isCorrect: false,
      },
    ],
  },
  {
    id: 12,
    isAnswered: false,
    type: 'H',
    question: 'Quais são os hormônios mais abundantes no organismo feminino?',
    options: [
      {
        text: 'Grelina e adrenalina',
        isCorrect: false,
      },
      {
        text: 'Insulina e glucagon',
        isCorrect: false,
      },
      {
        text: 'Estrogênio e progesterona',
        isCorrect: true,
      },
      {
        text: 'Cortisol e estrogênio',
        isCorrect: false,
      },
    ],
  },
  {
    id: 13,
    isAnswered: false,
    type: 'E',
    question: 'Quais dessas é uma Ciência Exata?',
    options: [
      {
        text: 'Espeologia',
        isCorrect: false,
      },
      {
        text: 'Trigonometria',
        isCorrect: true,
      },
      {
        text: 'Hipotesia',
        isCorrect: false,
      },
      {
        text: 'Horologia',
        isCorrect: false,
      },
    ],
  },
  {
    id: 14,
    isAnswered: false,
    type: 'M',
    question:
      'Quem foi o filósofo responsável pela alegoria do Mito da Caverna?',
    options: [
      {
        text: 'Sócrates',
        isCorrect: false,
      },
      {
        text: 'Aristóteles',
        isCorrect: false,
      },
      {
        text: 'Pitágoras',
        isCorrect: false,
      },
      {
        text: 'Platão',
        isCorrect: true,
      },
    ],
  },
  {
    id: 15,
    isAnswered: false,
    type: 'E',
    question: 'Em que ano a Segunda Guerra Mundial foi encerrada?',
    options: [
      {
        text: '1944',
        isCorrect: false,
      },
      {
        text: '1945',
        isCorrect: true,
      },
      {
        text: '1984',
        isCorrect: false,
      },
      {
        text: '1950',
        isCorrect: false,
      },
    ],
  },
  {
    id: 16,
    isAnswered: false,
    type: 'H',
    question: 'Qual rio passa pelo interior de Goiás?',
    options: [
      {
        text: 'Tietê',
        isCorrect: false,
      },
      {
        text: 'Araguaia',
        isCorrect: true,
      },
      {
        text: 'Nilo',
        isCorrect: false,
      },
      {
        text: 'Salgueiro',
        isCorrect: false,
      },
    ],
  },
  {
    id: 17,
    isAnswered: false,
    type: 'H',
    question:
      'Em que ano ocorreu a aprovação da Lei Áurea que oficializou o fim da escravidão no Brasil?',
    options: [
      {
        text: '1807',
        isCorrect: false,
      },
      {
        text: '1810',
        isCorrect: false,
      },
      {
        text: '1888',
        isCorrect: true,
      },
      {
        text: '1892',
        isCorrect: false,
      },
    ],
  },
  {
    id: 18,
    isAnswered: false,
    type: 'H',
    question:
      'Em que ano ocorreu a aprovação da Lei Áurea que oficializou o fim da escravidão no Brasil?',
    options: [
      {
        text: '1807',
        isCorrect: false,
      },
      {
        text: '1810',
        isCorrect: false,
      },
      {
        text: '1888',
        isCorrect: true,
      },
      {
        text: '1892',
        isCorrect: false,
      },
    ],
  },
  {
    id: 19,
    isAnswered: false,
    type: 'H',
    question:
      'Qual o nome do condimento típico coreano preparado através da fermentação de acelga e outros vegetais?',
    options: [
      {
        text: 'Bibimbap',
        isCorrect: false,
      },
      {
        text: 'Tteokbokki',
        isCorrect: false,
      },
      {
        text: 'Kimchi',
        isCorrect: true,
      },
      {
        text: 'Bulgogi',
        isCorrect: false,
      },
    ],
  },
  {
    id: 20,
    isAnswered: false,
    type: 'E',
    question: 'Qual o resultado de 9 x 3 + 3?',
    options: [
      {
        text: '27',
        isCorrect: false,
      },
      {
        text: '30',
        isCorrect: true,
      },
      {
        text: '54',
        isCorrect: false,
      },
      {
        text: '62',
        isCorrect: false,
      },
    ],
  },
  {
    id: 21,
    isAnswered: false,
    type: 'H',
    question:
      'Qual desses países foi o anfitrião dos Jogos Olímpicos de Inverno de 2018?',
    options: [
      {
        text: 'Japão',
        isCorrect: false,
      },
      {
        text: 'Rússia',
        isCorrect: false,
      },
      {
        text: 'Canadá',
        isCorrect: false,
      },
      {
        text: 'Coreia do Sul',
        isCorrect: true,
      },
    ],
  },
  {
    id: 22,
    isAnswered: false,
    type: 'H',
    question: 'Quem é considerado o pai da computação?',
    options: [
      {
        text: 'John von Neumann',
        isCorrect: false,
      },
      {
        text: 'Charles Babbage',
        isCorrect: false,
      },
      {
        text: 'Alan Turning',
        isCorrect: true,
      },
      {
        text: 'Herman Hollerith',
        isCorrect: false,
      },
    ],
  },
  {
    id: 23,
    isAnswered: false,
    type: 'H',
    question: 'Como morreu o grade filósofo grego Sócrates?',
    options: [
      {
        text: 'Morte natural',
        isCorrect: false,
      },
      {
        text: 'Para cardíaca',
        isCorrect: true,
      },
      {
        text: 'Condenado a beber veneno',
        isCorrect: true,
      },
      {
        text: 'Infarto',
        isCorrect: false,
      },
    ],
  },
  {
    id: 24,
    isAnswered: false,
    type: 'H',
    question:
      'Qual evento causou a vinda da família real portuguesa ao Brasil?',
    options: [
      {
        text: 'Avanços de Napoleão Bonaparte',
        isCorrect: true,
      },
      {
        text: 'Independência do Brasil',
        isCorrect: false,
      },
      {
        text: 'Guerra dos 7 anos',
        isCorrect: true,
      },
      {
        text: 'Primeira Guerra Mundial',
        isCorrect: false,
      },
    ],
  },
  {
    id: 25,
    isAnswered: false,
    type: 'H',
    question:
      'Na série Harry Potter, a personagem Hermione Granger é membro de qual casa de Hogwarts?',
    options: [
      {
        text: 'Grifinória',
        isCorrect: true,
      },
      {
        text: 'Sonserina',
        isCorrect: false,
      },
      {
        text: 'Corvinal',
        isCorrect: true,
      },
      {
        text: 'Lufa-Lufa',
        isCorrect: false,
      },
    ],
  },
  {
    id: 26,
    isAnswered: false,
    type: 'M',
    question: 'Quais as principais funções do esqueleto?',
    options: [
      {
        text: 'Proteger órgãos e função locomotora',
        isCorrect: true,
      },
      {
        text: 'Função locomotora e purificação do sangue',
        isCorrect: false,
      },
      {
        text: 'Purificação do sangue e sustentação',
        isCorrect: true,
      },
      {
        text: 'Sustentação e calcificação dos tecidos',
        isCorrect: false,
      },
    ],
  },
  {
    id: 27,
    isAnswered: false,
    type: 'H',
    question: 'Qual a função do RNA?',
    options: [
      {
        text: 'Respiração celular',
        isCorrect: false,
      },
      {
        text: 'Produção de proteínas',
        isCorrect: true,
      },
      {
        text: 'Armazenamento de substâncias',
        isCorrect: false,
      },
      {
        text: 'Digestão intracelular',
        isCorrect: false,
      },
    ],
  },
  {
    id: 28,
    isAnswered: false,
    type: 'E',
    question:
      'A bandeira de qual país é composta por apenas um fundo branco com um círculo vermelho no centro?',
    options: [
      {
        text: 'China',
        isCorrect: false,
      },
      {
        text: 'Tailândia',
        isCorrect: false,
      },
      {
        text: 'Japão',
        isCorrect: true,
      },
      {
        text: 'Indonésia',
        isCorrect: false,
      },
    ],
  },
  {
    id: 29,
    isAnswered: false,
    type: 'M',
    question: 'Como é chamado a parte que contém toda a água do planeta?',
    options: [
      {
        text: 'Litosfera',
        isCorrect: false,
      },
      {
        text: 'Biosfera',
        isCorrect: false,
      },
      {
        text: 'Hidrosfera',
        isCorrect: true,
      },
      {
        text: 'Atmosfera',
        isCorrect: false,
      },
    ],
  },
  {
    id: 30,
    isAnswered: false,
    type: 'H',
    question:
      "Qual o nome da raça de cachorro popularmente conhecida como 'cachorro salsicha'?",
    options: [
      {
        text: 'Dobermann',
        isCorrect: false,
      },
      {
        text: 'Weimaraner',
        isCorrect: false,
      },
      {
        text: 'Akita',
        isCorrect: false,
      },
      {
        text: 'Dachshund',
        isCorrect: true,
      },
    ],
  },
  {
    id: 31,
    isAnswered: false,
    type: 'E',
    question: 'Qual personagem de Maurício de Souza foi inspirado num caipira?',
    options: [
      {
        text: 'Cascão',
        isCorrect: false,
      },
      {
        text: 'José Bento',
        isCorrect: false,
      },
      {
        text: 'Chico Bento',
        isCorrect: true,
      },
      {
        text: 'João Bento',
        isCorrect: false,
      },
    ],
  },
  {
    id: 32,
    isAnswered: false,
    type: 'E',
    question:
      'Qual categoria de trabalhadores que parou o Brasil com uam greve em Maio de 2018?',
    options: [
      {
        text: 'Seringueiros',
        isCorrect: false,
      },
      {
        text: 'Motoristas',
        isCorrect: false,
      },
      {
        text: 'Policiais',
        isCorrect: false,
      },
      {
        text: 'Caminhoneiros',
        isCorrect: true,
      },
    ],
  },
  {
    id: 33,
    isAnswered: false,
    type: 'H',
    question: 'Qual o nome da forma humana do Hulk (Marvel)?',
    options: [
      {
        text: 'Steve Rogers',
        isCorrect: false,
      },
      {
        text: 'Alexander Pierce',
        isCorrect: false,
      },
      {
        text: 'Bruce Banner',
        isCorrect: true,
      },
      {
        text: 'Clint Barton',
        isCorrect: false,
      },
    ],
  },
  {
    id: 34,
    isAnswered: false,
    type: 'M',
    question:
      "Qual o nome das duas personagens principais do filme infantil 'Frozen'?",
    options: [
      {
        text: 'Elsa e Ariel',
        isCorrect: false,
      },
      {
        text: 'Anna e Aurora',
        isCorrect: false,
      },
      {
        text: 'Elsa e Anna',
        isCorrect: true,
      },
      {
        text: 'Merida e Tiana',
        isCorrect: false,
      },
    ],
  },
  {
    id: 35,
    isAnswered: false,
    type: 'M',
    question:
      'Qual animal não tem cérebro e tudo o que faz é controlado por uma rede de nervos?',
    options: [
      {
        text: 'Caranguejo',
        isCorrect: false,
      },
      {
        text: 'Estrela do Mar',
        isCorrect: true,
      },
      {
        text: 'Abutre',
        isCorrect: false,
      },
      {
        text: 'Camaleão',
        isCorrect: false,
      },
    ],
  },
  {
    id: 36,
    isAnswered: false,
    type: 'H',
    question:
      'Quais os dois consagrados jornalistas que faleceram no ano de 2019?',
    options: [
      {
        text: 'William Bonner e Datena',
        isCorrect: false,
      },
      {
        text: 'Ricardo Boechat e Paulo Henrique Amorim',
        isCorrect: true,
      },
      {
        text: 'Paulo Henrique Amorim e Datena',
        isCorrect: false,
      },
      {
        text: 'Evaristo Costa e César Filho',
        isCorrect: false,
      },
    ],
  },
  {
    id: 37,
    isAnswered: false,
    type: 'E',
    question: 'Qual a moeda corrente no Japão?',
    options: [
      {
        text: 'Dólar',
        isCorrect: false,
      },
      {
        text: 'Real',
        isCorrect: false,
      },
      {
        text: 'Euro',
        isCorrect: false,
      },
      {
        text: 'Iene',
        isCorrect: true,
      },
    ],
  },
  {
    id: 38,
    isAnswered: false,
    type: 'E',
    question: 'Qual o principal ingrediente do chocolate?',
    options: [
      {
        text: 'Cacau',
        isCorrect: true,
      },
      {
        text: 'Soja',
        isCorrect: false,
      },
      {
        text: 'Monguba',
        isCorrect: false,
      },
      {
        text: 'Trigo',
        isCorrect: false,
      },
    ],
  },
  {
    id: 39,
    isAnswered: false,
    type: 'M',
    question: 'Qual desses municípios de Minas Gerais tem nome indígena?',
    options: [
      {
        text: 'Pedro Leopoldo',
        isCorrect: false,
      },
      {
        text: 'Belo Horizonte',
        isCorrect: false,
      },
      {
        text: 'Patos de Minas',
        isCorrect: false,
      },
      {
        text: 'Manhaçu',
        isCorrect: true,
      },
    ],
  },
  {
    id: 40,
    isAnswered: false,
    type: 'E',
    question: 'Qual o meio de comunicação mais utilizado no século XXI?',
    options: [
      {
        text: 'Computador',
        isCorrect: false,
      },
      {
        text: 'Rádio',
        isCorrect: false,
      },
      {
        text: 'Internet',
        isCorrect: true,
      },
      {
        text: 'Televisão',
        isCorrect: false,
      },
    ],
  },
  {
    id: 41,
    isAnswered: false,
    type: 'M',
    question:
      'Quem é o CEO da empresa estadunidense de sistemas aeroespaciais SpaceX?',
    options: [
      {
        text: 'Elon Musk',
        isCorrect: true,
      },
      {
        text: 'Jeff Bezos',
        isCorrect: false,
      },
      {
        text: 'Mark Zuckerberg',
        isCorrect: false,
      },
      {
        text: 'Bill Gates',
        isCorrect: false,
      },
    ],
  },
  {
    id: 42,
    isAnswered: false,
    type: 'H',
    question:
      'Qual grande cidade também teve os nomes de Constantinopla e Bizâncio durante sua história?',
    options: [
      {
        text: 'Bagdá',
        isCorrect: false,
      },
      {
        text: 'Atenas',
        isCorrect: false,
      },
      {
        text: 'Roma',
        isCorrect: false,
      },
      {
        text: 'Istambul',
        isCorrect: true,
      },
    ],
  },
  {
    id: 43,
    isAnswered: false,
    type: 'M',
    question: 'Quais elementos constituem um mapa?',
    options: [
      {
        text: 'Projeção legenda escala e orientação',
        isCorrect: true,
      },
      {
        text: 'Legenda e cores',
        isCorrect: false,
      },
      {
        text: 'Apenas legenda',
        isCorrect: false,
      },
      {
        text: 'Bússola',
        isCorrect: false,
      },
    ],
  },
  {
    id: 44,
    isAnswered: false,
    type: 'M',
    question: 'Qual foi o maior ídolo do tênis brasileiro?',
    options: [
      {
        text: 'Guga',
        isCorrect: true,
      },
      {
        text: 'Bellucci',
        isCorrect: false,
      },
      {
        text: 'Ferrer',
        isCorrect: false,
      },
      {
        text: 'Federer',
        isCorrect: false,
      },
    ],
  },
  {
    id: 45,
    isAnswered: false,
    type: 'M',
    question: 'Como é composto o pentagrama musical?',
    options: [
      {
        text: '5 linhas e 4 espaços',
        isCorrect: true,
      },
      {
        text: '5 linhas e 5 espaços',
        isCorrect: false,
      },
      {
        text: '4 linhas e 5 espaços',
        isCorrect: false,
      },
      {
        text: '6 linhas e 5 espaços',
        isCorrect: false,
      },
    ],
  },
  {
    id: 46,
    isAnswered: false,
    type: 'H',
    question: 'Qual o nome científico dado para a queda de cabelo?',
    options: [
      {
        text: 'Alopecia',
        isCorrect: true,
      },
      {
        text: 'Calvície',
        isCorrect: false,
      },
      {
        text: 'Calvo',
        isCorrect: false,
      },
      {
        text: 'Alopeccia',
        isCorrect: false,
      },
    ],
  },
  {
    id: 47,
    isAnswered: false,
    type: 'E',
    question: 'O estado de Alasca pertence à qual país?',
    options: [
      {
        text: 'Canadá',
        isCorrect: false,
      },
      {
        text: 'Alemanha',
        isCorrect: false,
      },
      {
        text: 'Argentina',
        isCorrect: false,
      },
      {
        text: 'Estados Unidos da América',
        isCorrect: true,
      },
    ],
  },
  {
    id: 48,
    isAnswered: false,
    type: 'E',
    question:
      'Qual o nome da classificação dada aos animais que se alimentam apenas de carne?',
    options: [
      {
        text: 'Herbívoros',
        isCorrect: false,
      },
      {
        text: 'Folívoros',
        isCorrect: false,
      },
      {
        text: 'Onívoros',
        isCorrect: false,
      },
      {
        text: 'Carnívoros',
        isCorrect: true,
      },
    ],
  },
  {
    id: 49,
    isAnswered: false,
    type: 'E',
    question: 'Qual o estado mais populoso do Brasil?',
    options: [
      {
        text: 'Minas Gerais',
        isCorrect: false,
      },
      {
        text: 'Rio de Janeiro',
        isCorrect: false,
      },
      {
        text: 'Bahia',
        isCorrect: false,
      },
      {
        text: 'São Paulo',
        isCorrect: true,
      },
    ],
  },
  {
    id: 50,
    isAnswered: false,
    type: 'M',
    question: 'Qual o nome da indústria cinematográfica nigeriana?',
    options: [
      {
        text: 'Bollywood',
        isCorrect: false,
      },
      {
        text: 'Nollywood',
        isCorrect: true,
      },
      {
        text: 'Nigeriacorp',
        isCorrect: false,
      },
      {
        text: 'Cinigeria',
        isCorrect: false,
      },
    ],
  },
  {
    id: 51,
    isAnswered: false,
    type: 'M',
    question:
      'Qual era o nome do vocalista principal da banca britânica de rock Queen?',
    options: [
      {
        text: 'Paul McCartney',
        isCorrect: false,
      },
      {
        text: 'Kurt Cobain',
        isCorrect: false,
      },
      {
        text: 'Freddie Mercury',
        isCorrect: true,
      },
      {
        text: 'David Bowie',
        isCorrect: false,
      },
    ],
  },
  {
    id: 52,
    isAnswered: false,
    type: 'E',
    question: "Quem é o artista denomidado como 'rei do pop?'",
    options: [
      {
        text: 'Michael Jackson',
        isCorrect: true,
      },
      {
        text: 'Elvis Presley',
        isCorrect: false,
      },
      {
        text: 'Prince',
        isCorrect: false,
      },
      {
        text: 'David Bowie',
        isCorrect: false,
      },
    ],
  },
  {
    id: 53,
    isAnswered: false,
    type: 'H',
    question: 'Quem não comemorava aniversários?',
    options: [
      {
        text: 'Egípcios',
        isCorrect: false,
      },
      {
        text: 'Judeus',
        isCorrect: true,
      },
      {
        text: 'Gregos',
        isCorrect: false,
      },
      {
        text: 'Romanos',
        isCorrect: false,
      },
    ],
  },
  {
    id: 54,
    isAnswered: false,
    type: 'M',
    question: 'Qual o nome da ganhadora mais jovem do Prêmio Nobel da Paz?',
    options: [
      {
        text: 'Malala Yousafzai',
        isCorrect: true,
      },
      {
        text: 'Shirin Ebadi',
        isCorrect: false,
      },
      {
        text: 'Jody Williams',
        isCorrect: false,
      },
      {
        text: 'Wangari Muta Maathai',
        isCorrect: false,
      },
    ],
  },
  {
    id: 55,
    isAnswered: false,
    type: 'E',
    question: 'Qual é a espécie do personagem de ficção chamado Nemo?',
    options: [
      {
        text: 'Cavalo-marinho',
        isCorrect: false,
      },
      {
        text: 'Baicu-de-espinho',
        isCorrect: false,
      },
      {
        text: 'Raia-pintada',
        isCorrect: false,
      },
      {
        text: 'Peixe-palhaço',
        isCorrect: true,
      },
    ],
  },
  {
    id: 56,
    isAnswered: false,
    type: 'M',
    question: 'Qual desses é um exemplo de bloco econômico?',
    options: [
      {
        text: 'Zona Franca',
        isCorrect: false,
      },
      {
        text: 'Mercosul',
        isCorrect: true,
      },
      {
        text: 'Maastricht',
        isCorrect: false,
      },
      {
        text: 'Tratado de Versalhes',
        isCorrect: false,
      },
    ],
  },
  {
    id: 57,
    isAnswered: false,
    type: 'E',
    question: 'Qual canal abaixo não é esportivo?',
    options: [
      {
        text: 'ESPN',
        isCorrect: false,
      },
      {
        text: 'SporTV',
        isCorrect: false,
      },
      {
        text: 'GNT',
        isCorrect: true,
      },
      {
        text: 'FOX Sports',
        isCorrect: false,
      },
    ],
  },
  {
    id: 57,
    isAnswered: false,
    type: 'E',
    question: 'Qual canal abaixo não é esportivo?',
    options: [
      {
        text: 'ESPN',
        isCorrect: false,
      },
      {
        text: 'SporTV',
        isCorrect: false,
      },
      {
        text: 'GNT',
        isCorrect: true,
      },
      {
        text: 'FOX Sports',
        isCorrect: false,
      },
    ],
  },
  {
    id: 58,
    isAnswered: false,
    type: 'H',
    question: 'Qual país foi o primeiro a usar dinheiro em papel?',
    options: [
      {
        text: 'Espanha',
        isCorrect: false,
      },
      {
        text: 'Índia',
        isCorrect: false,
      },
      {
        text: 'Panamá',
        isCorrect: false,
      },
      {
        text: 'China',
        isCorrect: true,
      },
    ],
  },
  {
    id: 59,
    isAnswered: false,
    type: 'H',
    question: "Quem é o autor por trás da famosa pintura 'O Grito'?",
    options: [
      {
        text: 'Edvard Munch',
        isCorrect: true,
      },
      {
        text: 'Wassily Kandinsky',
        isCorrect: false,
      },
      {
        text: 'Pablo Picasso',
        isCorrect: false,
      },
      {
        text: 'Claude Monet',
        isCorrect: false,
      },
    ],
  },
  {
    id: 60,
    isAnswered: false,
    type: 'M',
    question: 'Qual polígono tem 9 lados?',
    options: [
      {
        text: 'Octógono',
        isCorrect: false,
      },
      {
        text: 'Eneágono',
        isCorrect: true,
      },
      {
        text: 'Decágono',
        isCorrect: false,
      },
      {
        text: 'Heptágono',
        isCorrect: false,
      },
    ],
  },
  {
    id: 61,
    isAnswered: false,
    type: 'E',
    question:
      'Qual o nome do vírus que causou uma pandemia global no ano de 2020?',
    options: [
      {
        text: 'COVID-19',
        isCorrect: true,
      },
      {
        text: 'COVID-20',
        isCorrect: false,
      },
      {
        text: 'COVÍRUS-20',
        isCorrect: false,
      },
      {
        text: 'HEPTAVID',
        isCorrect: false,
      },
    ],
  },
  {
    id: 62,
    isAnswered: false,
    type: 'E',
    question: 'Qual a galáxia que contém o Sistema Solar?',
    options: [
      {
        text: 'Galáxia de Andrômeda',
        isCorrect: false,
      },
      {
        text: 'Galáxia do Triângulo',
        isCorrect: false,
      },
      {
        text: 'Via Láctea',
        isCorrect: true,
      },
      {
        text: 'Galáxia do Rodamoinho',
        isCorrect: false,
      },
    ],
  },
  {
    id: 63,
    isAnswered: false,
    type: 'E',
    question: 'Qual o valor aproximado de Pi (π)?',
    options: [
      {
        text: '3,14',
        isCorrect: true,
      },
      {
        text: '3,15',
        isCorrect: false,
      },
      {
        text: '3,20',
        isCorrect: false,
      },
      {
        text: '3,25',
        isCorrect: false,
      },
    ],
  },
];

export default questions;
