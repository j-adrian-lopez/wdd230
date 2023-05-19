const add = document.getElementById("add");
const list = document.getElementById("list");


add.addEventListener('click', () =>{
    let chapter = document.getElementById("favchap").value;
    x = chapter;
    const order = document.createElement("li");
    const item = document.createElement("span");
    const del = document.createElement("button");

    item.textContent = x;
    item.setAttribute("value", x);
    
    del.textContent = '❌';
    del.setAttribute("class", "delete");
    
    order.appendChild(item);
    order.appendChild(del);

    list.appendChild(order);

    document.getElementById("favchap").focus();
    document.getElementById("favchap").value = '';

    del.addEventListener("click", function() {
        order.remove()
     });

});
