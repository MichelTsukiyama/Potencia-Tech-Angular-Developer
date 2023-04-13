type Hero ={
    name: string;
    vulgo: string;
};

function printObject(pessoa: Hero){
    console.log(pessoa);
}

printObject({
    name:"Brunce Wayne",
    vulgo: "Batman"
})