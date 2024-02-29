//[ no, district,  +ve cases,  death rate,  curred rate,  1st dose vaccine,  2nd dose vaccine]
covid_data = [
    [1,  'Ernakulam',  34000,  2000,  23000,  20000,  2000],
    [2,  'Idukki',     14000,  3000,  25000,  30000,  1000],
    [3,  'Thrissur',   24000,  4000,  33000,  24000,  2500],
    [4,'Pathanamthitta',20000, 2000,  45000,  22000,  1500],
    [5,  'Kozhikode',   44000,  5000,  12000, 21000,  500],
    [6,  'Palakkad',   12000,  1000,  20000,  23000,  3400],
    [7,  'Kottayam',  27000,  1500,  27000,  14000,  1000],
    [8,  'Kollam',    14000,  2500,  25000,  18000,  2700]

]
//1. district having Highest +ve case 
console.log('..................Highest +ve case .....................')
highest=covid_data.reduce((a,b)=>a[2]>b[2]?a:b)
console.log(highest[1])
console.log('.................Highest 1st dose vaccine.......................')
//2. district having Highest 1st dose vaccine
high=covid_data.reduce((a,b)=>a[5]>b[5]?a:b)
console.log(high[1])
console.log('..................lowest death rate......................')
//3. district having lowest death rate
low=covid_data.reduce((a,b)=>a[3]<b[3]?a:b)
console.log(low[1])
console.log('................+ve case in descending order........................')
//4. sort data with +ve case in descending order
covid_data.sort((a,b)=>b[2]-a[2]).forEach((item=>console.log(item)))
console.log('.................district with +ve cases > 15000.......................')
//5. is district with +ve cases > 15000
positive=covid_data.some((a,b)=>a[2]>15000)
console.log(positive?'yes':'no')
console.log('.................1st dose vaccine ascending order.......................')
//6. sort data with 1st dose vaccine ascending order
covid_data.sort((a,b)=>a[5]-b[5]).forEach(item=>console.log(item))
console.log('.................Thrissur details.......................')
//7. Print Thrissur details
covid_data.filter((item)=>item[1]=='Thrissur').forEach(element=>console.log(element))
console.log('.................total number of positive cases.......................')
//8. Print total number of positive cases
total=covid_data.map(item=>item[2]).reduce((a,b)=>a+b)
console.log(total)
console.log('..................total number of curred cases......................')
//9. Print total number of curred cases
cure=covid_data.map(item=>item[4]).reduce((a,b)=>a+b)
console.log(cure)
console.log('................... curred cases in Idukki.....................')
//10. Print curred cases in Idukki
covid_data.filter((item)=>item[1]=='Idukki').forEach(element=>console.log(element[4]))
console.log('........................................')