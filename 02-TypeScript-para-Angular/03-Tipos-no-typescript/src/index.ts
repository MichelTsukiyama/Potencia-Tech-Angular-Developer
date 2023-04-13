// tipos primitivos

let ligado: boolean = false;
let nome: string = "texto";
let idade: number = 30;

// tipos especiais

let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes

let qualquerTipo: any = "string";
let qualquerTipo2: any = 12;
let qualquerTipo3: any = true;
let qualquerTipo4: any = null;
let qualquerTipo5: any = undefined;
let vazio: void;

// tipo Object

//sem previsibilidade
let pessoa: object = {
    name: "Fulano",
    age: 20,
    active: true
}

//tipado
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
}

let produto: ProdutoLoja = {
    nome: "Tênis",
    preco: 89.99,
    unidades: 5
}

//Arrays

let dados: string[] = ["fulano", "ciclano", "beltrano"];
let dados2: Array<string> = ["fulano", "ciclano", "beltrano"];

//Arrays Multi Types
//aceita os tipos definidos em qualquer local
let infos: (string | number)[] = [22, "texto", 12, "texto2", "texto3", 3434];

//Tuplas
//vetor multi type com locais definidos

let boleto:[string, number, number] = ["luz", 199.90, 88237238];

//Arrays métodos
//Todos os métodos existentes no Javascript existem no typescript

dados.pop();
dados.filter(x => x === typeof(String));
dados.sort();

//Datas

let aniversario: Date = new Date("2022-12-01 05:00");