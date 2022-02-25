const express = require( 'express' );
const router = express.Router();

//@ Get api/profile/test
//TEsts PROFILE Route
//@ Access PUBLIC
router.get( '/test', function ( req, res ) {
    res.json( { msg: "PROFILE" } );
} )

module.exports = router;