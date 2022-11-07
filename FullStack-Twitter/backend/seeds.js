require('domain').config
const Tweet=require('./models/Tweet')

Tweet.insertMany([
    {
        name:'Hussein',
        content: 'Iget red text aruond name and content' ,
    },
    {
        name:'Mohd' ,
        content: 'Hello World!',
    },
    {
        name: 'Kareem' ,
        content: ' If you ',
    },
])
.then(() => console.log('Data added successfully!'))
.catch(err => console.log(err))