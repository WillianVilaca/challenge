import app from './src/app.js'
//const porta= 3000;
const porta = process.env.PORT || 3000 ;

app.listen(porta,() => {
    console.log(`servidor na porta http://localhost:${porta}`);
})
