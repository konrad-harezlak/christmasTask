const pool = require('./pool');

const addElf = async (req) => {
    const firstName = req.params.firstName;
    const lastName = req.params.lastName;
    
    try {
        await pool.query(`
            INSERT INTO elves (first_name, last_name)
            VALUES ($1, $2)`, [firstName, lastName]);
        
        return "ELF ADDED";
    } catch (error) {
        console.error("Error adding elf:", error);
        throw error;
    }
}

const removeElf = async (req) => {
    const idElf = req.params.idElf;
    
    try {
        await pool.query(`
            DELETE FROM elves
            WHERE id = $1
        `, [idElf]);

        return "ELF REMOVED";
    } catch (error) {
        console.error("Error removing elf:", error);
        throw error;
    }
}

const setFree = async (req) => {
    const idElf = req.params.idElf;
    
    try {
        await pool.query(`
            UPDATE elves
            SET free = true
            WHERE id = $1
        `, [idElf]);
    } catch (error) {
        console.error("Error setting elf free:", error);
        throw error;
    }
}

const setMaternityLeave = async (req) => {
    const idElf = req.params.idElf;
    
    try {
        await pool.query(`
            UPDATE elves
            SET maternity_leave = true
            WHERE id = $1
        `, [idElf]);
    } catch (error) {
        console.error("Error setting elf on maternity leave:", error);
        throw error;
    }
}

module.exports = {
    addElf,
    removeElf,
    setFree,
    setMaternityLeave
};
