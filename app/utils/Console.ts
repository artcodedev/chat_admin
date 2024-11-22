



class Console {

    static ok(st: string): void {
        console.log(`%c ${st}`, 'color: green');
    }

    static log(st: string): void {
        console.log(`%c ${st}`, 'color: aqua');
    }

    static error(st: string): void {
        console.log(`%c ${st}`, 'color: red');
    }

    static warning(st: string): void {
        console.log(`%c ${st}`, 'color: yellow');
    }

}

export default Console;