const { use } = require("chai");
const User   = require("../models/user.js");
const { string } = require("joi");


//DFS function to check wether a component is Bipartite or not.

function dfs( node, vis, matrix, level) {
    
    //Write your code here.

}

const canDivideFriends = async (req, res) => {

    try{
       //Write your code here.

       //Modify the responseMessage
       let responseMessage;

        res.status(200).json({
            status: 'success',
            message : responseMessage
        });
    }catch(err){
        
        res.status(500).json({
            status: 'fail',
            message: 'Something went wrong'
        });
    }
}


module.exports = { canDivideFriends };
