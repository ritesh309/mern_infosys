const express = require( 'express' );
const app = express();
const mongoose = require( 'mongoose' );

//Giving PORT
const PORT = process.env.PORT || 5000;


const user = require( './routes/api/users' );
const profile = require( './routes/api/profile' );
const posts = require( './routes/api/posts' );

//DB Configs
const db = require( './config/keys' ).mongoURI;

//Connect to mongo db by using monggose

mongoose.connect( db, { useNewUrlParser: true } )
    .then( () => { console.log( 'Connected mongoDB 🚀🚀!' ) } )
    .catch( err => console.log( err ) );



app.get( '/', ( req, res ) => {
    res.send( 'Hello World' );
} );

//Routes 
app.use( "/api/users", user );
app.use( "/api/profile", profile );
app.use( "/api/posts", posts );

app.listen( PORT, () => {
    console.log( 'App listening ⭐ port  ' + PORT );
} );