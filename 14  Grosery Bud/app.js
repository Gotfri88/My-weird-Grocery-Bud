
let myArr = []
let input = document.getElementById('input')
const submitBtn = document.getElementById('submitBtn')
let outputList = document.getElementById('outputList')
const clearAll = document.getElementById('deleteAll')
const err = document.getElementById('err')
let getFromLocalStorage = JSON.parse(localStorage.getItem('myArr'))

let arrLike = document.getElementById('arrLike')


if(getFromLocalStorage){
    myArr = getFromLocalStorage
    render(myArr)
}

//Push input to localstorage and array
submitBtn.addEventListener('click',function(){
       if(input.value != ''){
        document.location.reload() 
        myArr.push(input.value)
        event.preventDefault()
        localStorage.setItem('myArr', JSON.stringify(myArr))
        input.value = ''
        render(myArr)  
       } else { 
        err.classList.toggle('show')   
        err.innerHTML = `<p class="err">Please submit the value</p>`
       }
        
})
// render data from array
function render(tasks){
    let tasklist = ''
    for(let i = 0; i < tasks.length; i++){  
        tasklist += `<div class="arrLike">
                        <div class="text">${tasks[i]}</div>
                        <div class="btn">
                            <div class="edit">e</div>
                            <div class="delete">x</div>
                        </div>
                    </div>`
    
                }
    outputList.innerHTML = tasklist
}
// Delete selected element
let deleteItem = document.getElementsByClassName('delete')
    for(let i = 0;i < deleteItem.length;i++){
      deleteItem[i].addEventListener('click',function(){
        //   console.log(deleteItem[i].parentElement.parentElement)
          deleteItem[i].parentElement.parentElement.classList.add('remove')
          if(deleteItem[i].length > 1){
            myArr.splice(i,1)
            localStorage.setItem('myArr', JSON.stringify(myArr))  
          } else{
            myArr.pop()
            localStorage.setItem('myArr', JSON.stringify(myArr))  
          }
          
        //   console.log(myArr)
      })
}

// Edit element

let editItem = document.getElementsByClassName('edit')

    for(let i = 0;i < editItem.length;i++){
      editItem[i].addEventListener('click',function(){
        //   console.log(deleteItem[i].parentElement.parentElement)
        let getItem = editItem[i].parentElement.parentElement
        let useItem = getItem.children[0].innerHTML
        input.value = useItem
        deleteItem[i].parentElement.parentElement.classList.add('remove')
          
            myArr.splice(i,1)
            localStorage.setItem('myArr', JSON.stringify(myArr))  
           




        // console.log(getItem)
        console.log(useItem)
          
       
      })
}




// Clear all
clearAll.addEventListener('click', function(){
    localStorage.clear()
    myArr = []
    render(myArr)
})


