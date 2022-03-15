const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// 1 - Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addKey = (object, key, value) => object[key] = value;

addKey(lesson2, 'turno', 'tarde');

// 2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const showKeys = object => Object.keys(object);

// 3 - Crie uma função para mostrar o tamanho de um objeto.

const showKeysLength = object => Object.keys(object).length;

// 4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const showValues = object => Object.values(object);


// 5 - Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

let allLessons = {
	lesson1,
	lesson2,
	lesson3,
}

// 6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const contadorDeAlunos = () => {
	let counter = 0;
	for (let i =0; i < showKeysLength(allLessons); i += 1) {
		counter += Object.values(allLessons)[i].numeroEstudantes;
	}
	return counter;
}

// 7 - Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (object, index) => Object.values(object)[index];

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (object, key, value) => object[key] == value;

	