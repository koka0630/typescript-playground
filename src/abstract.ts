abstract class A {
    // あとで！
    abstract foo: string;
    
    // あとで！
    abstract bar(): string;
    
    baz() {
      console.log('baz');
    }
  }

class AA extends A {
    foo: string
    constructor(foo:string){
        super()
        this.foo = foo
    }
    bar():string{
        return 'test'
    }
  }

const testA = new AA("foo")
const bar:string = testA.bar()
console.log("bar")
console.log(bar)