const pool = require('./pool');

const addElf = async () => {
    const elfData = req.body.elfData;
    pool.query(`
    INSERT INTO elves (first_name, last_name)
    VALUES ($1,$2)`, [name,lastName])
    if (error) {
        console.error('Error with inserting package:', error);
    } else {
        console.log('Package addition completed.');
        res.status(200).json("Package addition completed");
    }
}

module.exports = {
    addElf,
}