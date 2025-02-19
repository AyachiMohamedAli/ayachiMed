function Addtodo(){
    let name=document.getElementById("name").value.trim();
    let content=document.getElementById("content").value.trim();

    if(name === "" || content ==="") return;

    let todoitem=document.createElement("div");
    todoitem.classList.add("todo-item");

    let todoinput=document.createElement("input");
    todoinput.type="text";
    todoinput.value=name +" : "+content;
    todoinput.readOnly=true;
    let deltebtn=document.createElement("button");
    deltebtn.innerHTML = '&#128465;';
    deltebtn.classList.add("delete-btn");
    deltebtn.onclick= function(){
        todoitem.remove();
    };  


    todoitem.appendChild(todoinput);
    todoitem.appendChild(deltebtn);
    
    document.getElementById("todo-List").appendChild(todoitem);
    document.getElementById("name").value='';
    document.getElementById("content").value='';


}

