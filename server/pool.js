const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://ayaogfbj:Q88UcpQGQlBD4yeq3YtxvtI44HSfm2VZ@ella.db.elephantsql.com/ayaogfbj'
})

module.exports = pool;