import { Utils } from "./utils";

class Main {
    utils: Utils;

    constructor() {
        this.utils = new Utils();
    }

    display() {
        console.log(this.utils.data);
    }
}

let main = new Main();
main.display();