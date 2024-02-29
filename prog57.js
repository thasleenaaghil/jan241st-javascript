//nested array

//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name
employee.forEach(names => {
    console.log(names[1])
});
console.log('------------another method----------------------')
employee.map((emp)=>emp[1]).forEach(element=>{console.log(element)})
console.log('--------------------------------------------------')
//print total numbers of employee
total=employee.reduce(employe=>employee.length)
console.log(total)
console.log('--------------------------------------------------')
//print developer employee details
employee.filter(num1=>num1[2]=='developer').forEach(element=>console.log(element))

console.log('--------------------------------------------------')
//print employee whose salary > 30000
employee.filter(num1=>num1[4]>30000).forEach(element=>console.log(element))

console.log('--------------------------------------------------')
// print details of employee Laisha
employee.filter(name1=>name1[1]=='Laisha').forEach(laisha=>console.log(laisha))
console.log('...............another method.........................')
laisha=employee.find(emp=>emp[1]=='Laisha')
console.log(laisha)
console.log('--------------------------------------------------')
//sort employee based on their salary in descending order

//sort employee based on their experience in ascending order

//print the employ name whose have the higest salary

highestsalary=employee.reduce((emp1,emp2)=>emp1[4]>emp2[4]?emp1:emp2)
console.log(highestsalary[1])

//print the employ name whose have the lowest salary
lowestsalary=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowestsalary[1])

//print the total salary expence of the company
salaryexpense = employee.map(item=>item[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(salaryexpense)