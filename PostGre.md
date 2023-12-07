PostGreSQL & Sequelize

1. PostGreSQL
    Download local server: https://www.enterprisedb.com/downloads/postgres-postgresql-downloads
        Setup: 
            "Applications'd like to install": Database Server - > PostgreSQL 16. 
            Other: Default.

        Default Setup: 
            username:   postgres
            password:   <user setup when create database>
            database:   postgres
            host:       localhost - port 5432

        Interaction:
            pg-admin4:  Interface
            psql:       terminal (could use local cmd (after setup system path))   


2. Sequelize: (Window knowledge)
    Ref: https://blog.devgenius.io/building-dynamic-web-applications-exploring-next-js-f77f25bbae09
    
    Download:
        npm install pg pg-hstore (Download sequelize, pg, pg-hstore)
        npm install -g sequelize-cli (cli- tool, install globally)
        npm install dotenv  (Used .env file)
    * dependencies saved in package.json: npm install <package-name> --save
    * for clone/pull: npm install/npm update (update with dependencies)
    * dependencies err: delete node_modules/

    Steps:
        1. Create root/.sequelizerc (define the setup structure)
        2. Initialize:
            sequelize init  (create: /config    /models     /seeders      /migrations)
        3. Create model:
            sequelize model:generate --name User --attributes firstName:string,lastName:string email:string
        4. Create migration:
            sequelize migration:generate --name addColumnToUser

        * QUERYINTERFACE(): https://doc.esdoc.org/github.com/sequelize/sequelize/class/lib/query-interface.js~QueryInterface.html

        5. Migrate and seed (used to test connection + seed sample data)
            - sequelize db:migrate
            - sequelize db:seed:all

    Further explanation about other file:
        * /models/index.js: 
            1. Connect to postgres server:
        """
            let sequelize;
            if (config.use_env_variable) {
            sequelize = new Sequelize(process.env[config.use_env_variable], config);
            } else {
            sequelize = new Sequelize(config.database, config.username, config.password, config);
            }
        """
            2. Objectify models:
        """
            db.receivers = require("./receivers.js")(sequelize, Sequelize.DataTypes);
        """
        ==> using in API: import { receiver } = require(".../models")
            interact as using object: 
                receiver.create() ->  POST
                receiver.findAll() -> GET

    Query using sequelize with models as object:
        ref: https://sequelize.org/docs/v6/core-concepts/model-querying-basics/ 
        
        INSERT: model_name.create()
        SELECT: model_name.findAll()
        UPDATE: model_name.update()
        DELETE: model_name.destroy()

    Association:
       ref: https://sequelize.org/docs/v6/core-concepts/assocs/ (have not read)

