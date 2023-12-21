const pool = require('./pool');

const addPackage = async (req,res) => {

 const name = req.body.packageName;
    console.log(name)
    pool.query(`
    INSERT INTO packages (name,status)
    VALUES ($1,'unpacked')`,[name]);
    
}


module.exports = {
    addPackage,

}