const Employee = require ('../models/employee');

const employeeCtrl = {};

employeeCtrl.getEmployees = async (req,res) => {
    const employees = await Employee.find();
    res.json(employees);
};

employeeCtrl.createEmployees = async (req,res) => {
    const employee = new Employee(req.body);
    await employee.save();
    res.json({'Status' : 'Employee Saved'});
    console.log(employee);
};

employeeCtrl.getEmployee = async (req,res) => {
    
    const employee = await Employee.findById(req.params.id);

    res.json(employee);

};

employeeCtrl.editEmployee = async (req,res) => {

    const { id } = req.params; //quiero el id dentro de req.params

    const employee = {
        name: req.body.name,
        position : req.body.position,
        office : req.body.office,
        salary :req.body.salary
    };

    await Employee.findByIdAndUpdate(id, {$set: employee}, {new:true}); /*con el SET busca el dato que ya existe y lo actualiza; si no existe el dato tb lo actualiza, que esté en blanco o algo así*/
    res.json({status : "Employee UPDATED"});
};

employeeCtrl.deleteEmployee = async (req,res) => {

    await Employee.findByIdAndRemove(req.params.id);
    res.json({status : "Employee DELETED"});

};

module.exports = employeeCtrl;