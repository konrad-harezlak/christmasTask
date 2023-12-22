const pool = require('./pool');

const addPackage = async (req) => {
    const name = req.params.name;

    try {
        await pool.query(`
            INSERT INTO packages (name, status)
            VALUES ($1, 'unpacked')`, [name]);

        return "PACKAGE ADDED";
    } catch (error) {
        console.error("Error adding package:", error);
        throw error;
    }
}

const signPackage = async (req) => {
    const idPackage = req.params.idPackage;
    const idElf = req.params.idElf;

    try {
        await pool.query(`
            UPDATE elves 
            SET assigned_packages_id = $1
            WHERE id = $2`, [idPackage, idElf]);

        return "PACKAGE SIGNED";
    } catch (error) {
        console.error("Error signing package:", error);
        throw error;
    }
}

module.exports = {
    addPackage,
    signPackage
};
