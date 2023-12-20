var form=document.getElementById('addForm');
var itemsList=document.getElementById('items');
var del=document.querySelectorAll('#deleteBtn')
var countID=0;
form.addEventListener('submit',addExpense);
itemsList.addEventListener('click',editExpense);

itemsList.addEventListener('click',removeExpense);

function addExpense(e)
{
    countID++;
    e.preventDefault();
    let category=document.getElementById('category');
    let amount=document.getElementById('amount');
    let description=document.getElementById('description');

   
    localStorage.setItem('category',document.getElementById('category').value);
    localStorage.setItem('amount',document.getElementById('amount').value);
    localStorage.setItem('description',document.getElementById('description').value);

    console.log(localStorage.getItem('category'));
    console.log(localStorage.getItem('amount'));
    console.log(localStorage.getItem('description'));

    //create new expense
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';
    li.id='item'+countID;

    var str=localStorage.getItem('category') +"-" +localStorage.getItem('description')+"-" +localStorage.getItem('amount');
    li.textContent=str;
   // li.
    //add text node
    //li.appendChild(document.createTextNode(str));

        
    //create delete button
   // var deleteBtn=document.createElement('button');
    var input=document.createElement('input');

    //CREATE DELEET BUTTON
    //add class name for button
    //deleteBtn.className="btn btn-danger btn-sm float-right delete";
    input.type="button";
    input.className="btn btn-danger btn-sm float-right delete";
    input.id="deleteBtn";
    input.value="DELETE";

    //CREATE EDIT BUTTON
    var edit=document.createElement('input');
    edit.type="button";
    edit.className="btn btn-danger btn-sm float-right edit";
    edit.id="editBtn";
    edit.value="EDIT";

    //append text node to button
    //deleteBtn.appendChild(document.createTextNode('Delete'));
    //input.appendChild(document.create)


    //deleteBtn.appendChild(document.setAttribute('onclick'));


    //append button to li
    //li.appendChild(deleteBtn);
    li.appendChild(input);
    li.appendChild(edit);


    itemsList.appendChild(li);

    console.log(li);


}

function editExpense(e)
{
    console.log("in edit");
    if(e.target.classList.contains('edit'))
    {
        console.log("in edit2");

        //get the target li
        var li=e.target.parentElement;
        var itemID=e.target.parentElement.id;
        console.log(document.getElementById(itemID).textContent);
        console.log("id is "+e.target.parentElement.id);

        //store the text in a string array
        var s=new Array();
        s=document.getElementById(itemID).textContent.split('-');
        console.log(s);

        //populate the input boxes
        document.getElementById('category').value=s[0];
        document.getElementById('amount').value=s[2];
        document.getElementById('description').value=s[1];


        //delete the list
        itemsList.removeChild(li);

    }
    
}

function removeExpense(e)
{
    console.log("1");

    if(e.target.classList.contains('delete'))
    {
        //console.log(2);
        if(confirm('Are you sure?'))
        {
            var li=e.target.parentElement;
            itemsList.removeChild(li);
        }

    }

}