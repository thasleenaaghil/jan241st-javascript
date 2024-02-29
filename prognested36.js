
//nested function

function parent(){
    const parent='parent'
    console.log(`variable inside the parent function is ${parent}`)

    function child(){
        const childvariable ='child'
        console.log(`variable inside the child function is ${childvariable}` )
        console.log(`variable inside the parent function is ${parent}`)

    }
    child()
}

 parent()