var list=document.getElementById("list");

function addTodo(){
    var todoItem=document.getElementById("todo-item");
    var li=document.createElement('li');
    var liText=document.createTextNode(todoItem.value);
    li.appendChild(liText);

    var delBtn=document.createElement('button');
    var delText=document.createTextNode("DELETE");
    delBtn.setAttribute("class","btn");
    delBtn.setAttribute("onclick","delItem(this)");
    delBtn.appendChild(delText);

    var editBtn=document.createElement('button');
    var editText=document.createTextNode("EDIT");
    editBtn.setAttribute("class","btn");
    editBtn.appendChild(editText);
    editBtn.setAttribute("onclick","editItem(this)");


    li.appendChild(delBtn);
    li.appendChild(editBtn);

    list.appendChild(li);
    todoItem.value="";
}

function delItem(e){
    e.parentNode.remove();
}

function delAll(){
    list.innerHTML="";
}

function editItem(e){
    var editValue=prompt("Enter edit",e.parentNode.firstChild.nodeValue);
    e.parentNode.firstChild.nodeValue=editValue;
}

