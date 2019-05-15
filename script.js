var count = 0;
function additem() {
    var item = document.getElementsByTagName('input')[0].value;
    if(item){
        var ul = document.getElementsByTagName('ul')[0];
        var li = document.createElement('li');
        var button = document.createElement('button');
        button.innerHTML = 'X';
        button.setAttribute('onclick', 'removeItem(this)');
        button.setAttribute('id', count++);
        button.setAttribute('class', 'btn');
        li.appendChild(document.createTextNode(item + "  "));
        li.appendChild(button);
        li.setAttribute('class', 'listitem')
        ul.appendChild(li);
        window.scrollTo(0, window.innerHeight);
    }
}
function removeItem(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
}