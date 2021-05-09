interface MyInterface{
    name:string
}

class MyClass implements MyInterface{
    name:string;//このメンバーがない場合コンパイルエラーとなる。
    constructor(name:string){
        this.name = name
    }
}

interface testType {
    test1: string
    test2: string
}

function testFunction (testInput:testType) {
    return testInput.test1
}

interface Result {
    a: number;
    b: number;
}

//sum(result: Result)と書くことで引数resultは必ずaとb持たなければならない。
function sum(result: Result) {
    return result.a + result.b;
}

var result = {
    a: 30,
    b: 20
};

console.log(sum(result));