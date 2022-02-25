const express = require( 'express' );
const router = express.Router();


//@ Get api/posts/test
//TEsts POST Route
//@ Access PUBLIC
router.get( '/test', function ( req, res ) {
    res.json( { msg: "POST" } );
} )

module.exports = router;