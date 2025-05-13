/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import isUrl from "is-url";
import fs from "fs";
import qr from "qr-image";
const options = {type: 'png'};
const questions = [
    {
        type: 'input',
        name: 'URL',
        message: 'Please enter a URL that you want to turn into QR code',
        default: 'https://google.com',
        validate: function(value) {
            if (isUrl(value)) {
                return true;
            } else {
                return "Please enter a valid URL";
            }
        }
    }
]
inquirer.prompt(questions)
.then((answers) => {
    fs.writeFile("./message.txt", answers.URL, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log("URL saved to message.txt");
        }
    });
    const qr_png = qr.image(answers.URL,options);
    qr_png.pipe(fs.createWriteStream('my_qrcode.png'));
    console.log("QR created");
})
.catch((err) => {
    console.log(err);
})