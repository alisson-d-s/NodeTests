const readLine = require('readline');
const { writeFile } = require('fs');
const { Buffer } = require('buffer');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

const saveLineOnFile = async function (line) {
    // try {
    const data = new Uint8Array(Buffer.from(line));
    writeFile('C:\\Users\\TI-N001\\Documents\\Rola.txt', data, () => {
        console.log('File was saved');
    });
    // } catch (err) {
    //     console.log(err);
    // }
};

rl.question('What do you wanna save? ', async (line) => {
    await saveLineOnFile(line).then(() => {
        rl.close();
    }).catch((err) => {
        console.log(err);
    });
});