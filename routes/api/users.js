const express = require( 'express' );

const router = express.Router();

//@ Get api/users/test
//TEsts USer Route
//@ Access PUBLIC
router.get( '/test', ( req, res ) => {
    res.json( { msg: "Hello USER" } );

} );

module.exports = router;