import { Queue } from '../Queue';

describe("Queue class", () => {
    beforeEach(() => { // beforeAll, afterEach, afterAll
       // funcao
    });

    it("it should create a new queue", () => {
        // prepara o cenario
        let queue = new Queue();
        // executa o que deve ser testado

        // faz aferições
        expect(queue).toBeTruthy();
    });

    test("it should insert elements", () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        
        expect(queue.length).toEqual(3);
    });

    test("it should dequeue the first in element", () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        
        let item = queue.dequeue();
        expect(item).toEqual(1);
    });

    test("it should give the right peek", () => {
        let queue = new Queue();
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        
        let item = queue.peek();
        expect(item).toEqual(1);
    });

    test("it should identify an empty queue", () => {
        let queue = new Queue();
        expect(queue.isEmpty).toBeTruthy()
    });
});