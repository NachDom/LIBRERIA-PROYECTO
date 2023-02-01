const Employee = require ('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees)
};

employeeCtrl.createEmployees = async (req,res) => {
    console.log(req.body);
    res.json('recibido');
};

employeeCtrl.getEmployee = function () {

};

employeeCtrl.editEmployee = function () {

};

employeeCtrl.deleteEmployee = function () {

};

module.exports = employeeCtrl;