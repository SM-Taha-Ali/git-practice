var inpTodo = document.getElementById("inpTodo");
var parent_ul = document.getElementById("parent-ul");

function add(){
    // Create li and Append TextNode in it also append it in ul
    var inpValue = inpTodo.value;
    var contBtn = document.createElement('div');
    var todoLi = document.createElement('li');
    var liTxt = document.createTextNode(inpValue);
    var switchBtn = document.getElementById('switchCheck');

    if (switchBtn.checked){
        todoLi.setAttribute('class','list-group-item d-flex flex-row justify-content-between align-items-center bg-lol text-white border-white')
    } else {
        todoLi.setAttribute('class','list-group-item d-flex flex-row justify-content-between align-items-center bg-white text-black border-secondary')
    }
    todoLi.appendChild(liTxt);
    parent_ul.appendChild(todoLi);
    inpTodo.value = ''

    // Create button and append it in li

    var delBtn = document.createElement('button');
    var editBtn = document.createElement('button');

    var delTxt = document.createTextNode('Delete');
    var editTxt = document.createTextNode('Edit');

    delBtn.setAttribute('class','btn btn-danger mx-1');
    delBtn.setAttribute('onclick','del(this)');
    editBtn.setAttribute('class','btn btn-primary mx-1');
    editBtn.setAttribute('onclick','edit(this)');

    delBtn.appendChild(delTxt);
    editBtn.appendChild(editTxt);

    contBtn.appendChild(editBtn);
    contBtn.appendChild(delBtn);

    todoLi.appendChild(contBtn);
}

function del(element){
    element.parentNode.parentNode.remove();
}

function edit(element){
    element.parentNode.parentNode.firstChild.nodeValue = prompt('Enter text to edit')
}

function clearAll(){
    parent_ul.innerHTML = '';
}

function dark(){
    var switchBtn = document.getElementById('switchCheck');
    var switchLabel = document.getElementById('switchLabel');
    var body = document.getElementsByTagName('body')[0];
    var mainCont = document.getElementById('main');
    var label = document.getElementById('label_add');
    var heading = document.getElementById('heading');
    var navBar = document.getElementById('nav-bar');
    if (switchBtn.checked){
        navBar.setAttribute('class','navbar navbar-expand-lg navbar-dark bg-dark')
        switchLabel.setAttribute('class','text-white')
        body.setAttribute('class','bg-lol')
        mainCont.setAttribute('class','container bg-lol')
        label.setAttribute('class','text-white')
        inpTodo.setAttribute('class', 'form-control bg-lol text-white')
        inpTodo.addEventListener("focus", function () {
            this.style.backgroundColor = "#31363b";
            this.style.color = "#FFFFFF"  
          });
        inpTodo.focus();
        heading.setAttribute('class','my-3 text-white')
        for (var i=0; i<parent_ul.children.length; i++){
            parent_ul.children[i].setAttribute('class','list-group-item d-flex flex-row justify-content-between align-items-center bg-lol text-white border-white')
        }
    } else {
        navBar.setAttribute('class','navbar navbar-expand-lg navbar-light bg-light')
        switchLabel.setAttribute('class','text-dark')
        body.setAttribute('class','bg-white')
        mainCont.setAttribute('class','container bg-white')
        label.setAttribute('class','text-black')
        inpTodo.setAttribute('class', 'form-control bg-white text-black')
        inpTodo.addEventListener("focus", function () {
            this.style.backgroundColor = "#FFFFFF";
            this.style.color = "#000000"  
          });
        inpTodo.focus();
        heading.setAttribute('class','my-3 text-black')
        for (var i=0; i<parent_ul.children.length; i++){
            parent_ul.children[i].setAttribute('class','list-group-item d-flex flex-row justify-content-between align-items-center bg-white text-black border-secondary')
        }
    }
}