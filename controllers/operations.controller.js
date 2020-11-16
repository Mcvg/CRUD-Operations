import Operation from '../models/operation';
const { validationResult } = require('express-validator');
const factory = require('../factories/factory');

exports.sum = (req, res, next) => {
  funtionsOperations(req, res, 'Sum', 1);
};

exports.subtraction = (req, res, next) => {
  funtionsOperations(req, res, 'Subtraction', 2);
};

exports.multiplication = (req, res, next) => {
  funtionsOperations(req, res, 'Multiplication', 3);
};

exports.divide = (req, res, next) => {
  funtionsOperations(req, res, 'Divide', 4);
};

async function funtionsOperations (req, res, operationType, id) {
  const errors = validationResult(req);
  validateErrors(errors);

  try {
    const resultOperation = operationResult(req, operationType);
    const { valueOne, valueTwo, id_typeOperation, result } = req.body;
    valueOne = req.body.valueOne;
    let newProject = await Operation.create({
      valueOne,
      valueTwo,
      id_typeOperation: id,
      result: resultOperation,
    },{
      fields:['valueOne','valueTwo' , 'id_typeOperation', 'result']
    });
    if (newProject) {
      res.status(201).json({ message: operationType + " success.", data: { newProject } });
    }

  } catch (e) {
    console.log(e)
    const error = new Error('Validation numbers failed.');
    error.statusCode = 500;
    error.data = e;
    throw error;
  }
};

const operationResult = (req, operationType) => {

  const valueOne = +req.body.valueOne;
  const valueTwo = +req.body.valueTwo;
  const result = factory.assignOperation(operationType, {
    valueOne,
    valueTwo,
  });
  console.log(result)
  return result;
};

function validateErrors(errors) {
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed.');
    error.statusCode = 422;
    error.data = errors.array();
    throw error;
  }
}
