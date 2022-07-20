function add(){// add list item 
    let toDoInputValue=document.getElementById("text_input").value;
    if(toDoInputValue===""){
        window.alert("You must write your to do task before adding!");
    }else{
        let li=document.createElement("li");// create li node
        let textNodeOf_li=document.createTextNode(toDoInputValue);// reate text node for li
        li.appendChild(textNodeOf_li);// add text node to li node
        document.getElementById("text_input").value="";
        let span=document.createElement("span");
        let spanText=document.createTextNode("\u00D7");
        span.className="close";
        span.addEventListener("click",delete_list);// add event listner on close button
        span.appendChild(spanText);
        li.appendChild(span);
        let checkInput=document.createElement("input");
        checkInput.addEventListener("click",checked_task);
        checkInput.setAttribute("type","checkbox");
        checkInput.className="checkBox";
        li.appendChild(checkInput);
        document.getElementById("listOfToDo").appendChild(li);
        totalTaskLeft(1);
    }
    
}
function delete_list(){// delete li node 
 this.parentElement.style.display="none";
 totalTaskLeft(-1);// subtract 1 from initially total task

}
function checked_task(){
    if(this.checked==true){
        this.parentElement.style.textDecoration="line-through";
        totalTaskLeft(-1);// subtract 1 from initially total task
    }else{
        this.parentElement.style.textDecoration="none";
         totalTaskLeft(1);// add 1 in initially total task
    }
}
function totalTaskLeft(add){// update total task left
    let initiallyTotalTask=document.getElementById("taskCount").innerText;
    let updatedTotalTask=parseInt(initiallyTotalTask)+add;
    document.getElementById("taskCount").innerText=updatedTotalTask;
}
document.getElementById("add_to_do_button").addEventListener("click",add);


