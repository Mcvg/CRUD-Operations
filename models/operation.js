import Sequelize from 'sequelize';
import { sequelize }  from '../database/database';

const Operation = sequelize.define('operation',{
    id:{
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    valueOne: {
        type : Sequelize.FLOAT
    },
    valueTwo:{
        type : Sequelize.FLOAT
    },
    id_typeOperation:{
        type : Sequelize.INTEGER
    },
    result:{
        type : Sequelize.FLOAT
    }
}, {
    timestamps: false
});

module.exports = Operation;