document.addEventListener('DOMContentLoaded',function(){

    const Add=document.getElementById('Add');

    Add.addEventListener('click',function(){
        var textbox=document.createElement("input");
        textbox.type='text';

        document.getElementById('Addcontainer').appendChild(textbox);
    })
})