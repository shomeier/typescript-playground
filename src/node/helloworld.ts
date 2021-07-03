process.stdout.write("Hello, World");
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
    inputString += inputStdin;
});

// Triggered by CTRL-D
process.stdin.on("end", function (): void {
    inputLines = inputString.split("\n");
    inputString = "";

    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

function main() {
    // console.log('Input line %s', inputLines);
    process.stdout.write("Teees");
    const n: number = parseInt(readLine().trim(), 10);

    const arr: number[] = readLine()
        .replace(/\s+$/g, "")
        .split(" ")
        .map(arrTemp => parseInt(arrTemp, 10));

    // arr.forEach((value, index, a) => console.log('value: %d', value));
    // arr.forEach(value => console.log('value: %d', value));

    for (let i = arr.length - 1; i >= 0; i--) {
        process.stdout.write(arr[i] + " ");
    }
}
