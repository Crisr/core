'use strict'
var cBit = require('./core_bit.js')

class cPawn extends cBit {
    constructor (o) {
        super();
        this.pColor         = "white";    
        this.Owner          = o !== undefined ? o : 'AI';
        this.previousOwner  = '';
    }
        
    GetColor () {return pColor}
    
    SetColor (s) {pColor = s}
        
}