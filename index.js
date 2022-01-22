var expenseCategories= new Array(); 
var expenseValue=new Array();
function CalculateBuget()
{
   
    var totalExpenseValue=0;
var temp=0;
    for( i=0; i<expenseCategories.length;i++)
    {
temp=parseInt(expenseValue[i]);
totalExpenseValue= temp+totalExpenseValue;
    }
    console.log("Total expense"+totalExpenseValue);
    console.log("initial Array is"+expenseCategories.toString());
console.log("initial expense is"+expenseValue.toString());

   // var expense= document.getElementById("Expense").value;

}

function addExpense()
{
var newItem=document.getElementById('inputCategory').value;

var newExpense=document.getElementById('inputValue').value;

console.log("The input value"+newItem);
console.log("The input amount"+newExpense);
expenseCategories.push(newItem);
expenseValue.push(newExpense);
console.log("The new Array is"+expenseCategories.toString());
console.log("The new Array of expense is"+expenseValue.toString());

}

function delItem(itemNum)
{
    expenseCategories.splice(itemNum,1);
    expenseValue.splice(itemNum,1);
    displayFinalTable();


}
function displayFinalTable()
{
    var totalExpenseValue=0;
    var temp=0;
        for( k=0; k<expenseCategories.length;k++)
        {
    temp=parseInt(expenseValue[k]);
    totalExpenseValue= temp+totalExpenseValue;
        }
        console.log("Total expense"+totalExpenseValue);
        console.log("initial Array is"+expenseCategories.toString());
        console.log("initial expense is"+expenseValue.toString());
    

    var expenseTable = document.getElementById('expenseTable');

    expenseTable.innerHTML = '';
    var tempTable="";

    for(let i = 0; i < expenseCategories.length; i++){
        
        var count=i+1;
        tempTable =tempTable+"<tr><td>"+count+"</td><td>"+expenseCategories[i]+"</td><td>"+expenseValue[i]+"</td> <td> <input type='button' class='button' value='Delete' id='delItem' onClick='delItem("+i+")'></td></tr>";
        console.log("innerHtml"+expenseTable.innerHTML);
    }
    expenseTable.innerHTML=tempTable+"<tr><td></td> <td></td><td id='totalValue' ></td><td></td></tr>"

                  document.getElementById("totalValue").innerHTML=""+totalExpenseValue;
    }


function calculateTotal()
{
    var totalExpenseValue=0;
    var temp=0;
        for( k=0; k<expenseCategories.length;k++)
        {
    temp=parseInt(expenseValue[k]);
    totalExpenseValue= temp+totalExpenseValue;
        
}
document.getElementById("totalValue").innerHTML=totalExpenseValue;
    }

function updateExpense()
{
    console.log("the updated item is now being calculated");
    CalculateBuget();
     
}


function updateExpense()
{
    console.log("the updated item is now being calculated");
    CalculateBuget();
     
}
function deleteExpense()
{
var id =prompt("enter number");
expenseCategories.splice(id,1);
expenseValue.splice(id,1);
CalculateBuget();
}



