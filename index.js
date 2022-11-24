// Write your solution in this file!
const employee = {
  name:"My",
  streetAddress:"Nobal Park"
}

function updateEmployeeWithKeyAndValue(employee,key,value){
  const newEmployee = {...employee}
  newEmployee[key] = value
  return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  employee[key]=value
}

function deleteFromEmployeeByKey(employee,key){
  const newEmployee = {...employee}
  delete newEmployee[key]
  return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
  delete employee[key]
}

// destructivelyDeleteFromEmployeeByKey
console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)
console.log(destructivelyDeleteFromEmployeeByKey(employee,"name"))
console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)
console.log(destructivelyDeleteFromEmployeeByKey(employee,"streetAddress"))
console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)

// deleteFromEmployeeByKey
// console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)
// console.log(deleteFromEmployeeByKey(employee,"name"))
// console.log(deleteFromEmployeeByKey(employee,"streetAddress"))
// console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)


// destructivelyUpdateEmployeeWithKeyAndValue
// console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)
// destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","You")
// console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)


// function updateEmployeeWithKeyAndValue(employee,key,value)
// console.log(updateEmployeeWithKeyAndValue(employee,"name","You"))
// console.log(`employee = ${employee.name}, street name = ${employee.streetAddress}`)


