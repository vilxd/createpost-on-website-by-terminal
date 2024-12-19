import { input, select } from '@inquirer/prompts';
import chalk from 'chalk';

const URL = "localhost:3000/create-post"

const author = "kirul"

const title = await input({
    message: "Write title for post:"
})
const description = await input({
    message: "Write description for post:"
})
const date_of_creating = await input({
    message: "Write date of creating for post:"
})
const nameurl = await input({
    message: "Write nameurl for post:"
})


const req = await fetch(URL, {
    method: "post",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: title,
        description: description,
        date_of_creating: date_of_creating,
        nameurl: nameurl,
        author: author
    })
})
console.log(req)
if(req.ok == true ){
    console.log(chalk.greenBright(chalk.bold("Successful publish!")))
}

else if(req.status > 200){

    console.log(chalk.redBright(chalk.bold("Error with publish!")))
    console.log(chalk.redBright(chalk.bold(`${req.status}:${req.statusText}`)))
}

export{
    title, description, date_of_creating, nameurl
}