const express =require ('express'); //nedi l server 
const port =3000;
const app =express();
/*app.get("/",(req, res) => {
    res.send("hello world")
})*/
const env=require('dotenv').config() //y9ra const f env (sinon cle non connue)

app.use(express.json())//bch yefhm eli ahna nhkiw m3ah b format json

const db= require ('./db-connection');
db()
//cours

const coursRouter=require('./route/cours_route')
app.use('/cours',coursRouter)// cours hiya path parent tet7at f server
//formation 
const formationRouter=require('./route/formation_route')
app.use('/formation',formationRouter)

const adminRouter=require('./route/admin-route')
app.use('/admin',adminRouter)
 
const etudiantRouter=require('./route/etudiant-route')
app.use('/etudiant',etudiantRouter)

const formateurRouter=require('./route/formateur-route')
app.use('/formateur',formateurRouter)
const userRouter=require('./route/user-route')
app.use('/user',userRouter)

const cors =require('cors')
app.use(cors())

app.listen(port, function(){
    console.log(`the server is running, please open at http:localhost:${port}`)
});
