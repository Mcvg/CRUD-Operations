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
});

TypeOperation.hasMany(Operation, { foreingKey: 'id_typeOperation', sourceKey:'id'});
Operation.belongsTo(TypeOperation, { foreingKey: 'id_typeOperation', sourceKey: 'id'});
export default TypeOperation;