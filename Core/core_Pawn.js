'use strict'
const cBit = require('./core_bit.js')
//object Pawn is a basic gameboard bit that has an owner
class cPawn extends cBit {
    constructor (o) {
        super();
        this.pColor         = "white";    
        this.Owner          = o !== undefined ? o : 'AI';
        this.previousOwner  = '';
    }
        
    /**
     * Gets the color of the pawn
     * 
     * @returns 
     * string
     * @memberOf cPawn
     */
    GetColor () {return pColor}
    
    /**
     * Sets the color of the pawn
     * 
     * @param {string} s the color of the pawn to a string value
     * 
     * @memberOf cPawn
     */
    SetColor (s) {pColor = s}
        
}
module.exports = cPawn;