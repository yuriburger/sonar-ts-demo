export interface IHelloService {
    sayHello(): string;
}

export class HelloService implements IHelloService {
    public sayHello(): string {
        return "Hello world!";
    }
}
