import Sequelize from 'sequelize';
import { sequelize }  from '../database/database';
import Operation from './operation';

const TypeOperation = sequelize.define('typeOperation',{
    id:{
        type : Sequelize.INTEGER,
        primaryKey: true
    },
    description: {
        type : Sequelize.TEXT
    }
}, {
    timestamps: false
});

TypeOperation.hasMany(Operation, { foreingkey: 'id_typeOperation', sourceKey:'id'});
Operation.belongsTo(TypeOperation, { foreingkey: 'id_typeOperation', targetId: 'id'});
module.exports = TypeOperation;