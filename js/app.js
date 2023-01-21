//============| class |===============//

class Budget {
    constructor(budget){
        this.budget = budget
    }

}


// every thing related to the HTML

class HTML {

    // insert user budget in the html
    insertBudget(amount){
        console.log(budgetTotal);
        console.log(budgetLeft);
        budgetTotal.innerHTML = amount
        budgetLeft.innerHTML = amount

    }


}














//============| variables |===============//


let userBudget;
let budget;
let budgetTotal = document.querySelector('span#total')
let budgetLeft = document.querySelector('span#left')

const addExpenseForm = document.querySelector('#add-expense')

const html = new HTML()









//============| eventlisteners |===============//



eventlisteners()

function eventlisteners() {
    

    // show alert for getting user budget

    document.addEventListener('DOMContentLoaded', function () {
        userBudget = prompt('لطفا بودجه هفته خود را وارد کنید')
        

        // validate user budget

        if (userBudget === null || userBudget === '' || userBudget === '0') {
            window.location.reload()
        } else {
            
            // Instanciate budget class

            budget = new Budget(userBudget)
            console.log(budget);
            html.insertBudget(budget.budget)
        }
    })



    // get values from the foorm when submited
    
    addExpenseForm.addEventListener('submit', function(e) {
        
        e.preventDefault()

   // access to the value of input

   const expense = document.querySelector('#expense').value
   const amount = document.querySelector('#amount').value

        console.log(expense);
        console.log(amount);
    })
}


















