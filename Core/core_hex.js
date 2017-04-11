'use strict'
const log = require('winston');

class Hex {
    constructor ()
    {
        // vertexes start with top-most one (North) as vertex0 and continues clockwise
        Vertexes: ['vertex0', 'vertex1', 'vertex2', 'vertex3', 'vertex4', 'vertex5'];
        // edge0 = vertex0-vertex1, edge1 = vertex1-vertex2, edge2 = vertex2-vertex3, edge3 = vertex3-vertex4, edge4 = vertex4-vertex5, edge5 = vertex5-vertex0
        Edges: ['edge0', 'edge1', 'edge2', 'edge3', 'edge4', 'edge5'];
        // array of objects describing other hex attributes (NOT items placed on top of the Hex)
        Contents: [];
    }
    
    /**
     * Returns this.Vertexs[n]
     * 
     * @param {Number} n between 1-6
     * @returns {String} Vertex id
     * 
     * @memberOf Hex
     */
    getVertex (n) {if (isNaN(n) || n<0 || n>5) {return log.error(`${n} should be between 0-5`)} 
        else 
        return this.Vertexes[n]
    }
    

    getEdge (n) {if (isNaN(n) || n<0 || n>5) {return log.error(`${n} should be between 0-5`)} 
        else
        {return this.Edges[n]}
    }

    getContents ()  {return this.Contents}

}

module.exports = {Hex:Hex};