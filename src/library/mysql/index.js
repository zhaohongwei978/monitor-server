import knex from 'knex'
import mysqlConfig from '~/src/configs/mysql'
const Knex = knex({
    client: 'mysql',
    connection: {
      host: mysqlConfig.host,
      port: mysqlConfig.port,
      database: mysqlConfig.database,
      user: mysqlConfig.user,
      password: mysqlConfig.password
    },
    debug: false,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 100,
      reapIntervalMillis: 150
    },
    acquireConnectionTimeout: 60000,
    log: {
      error (message) {
          console.log('mysql',message)
      }
    }
  })
  
  export default Knex