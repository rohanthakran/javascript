 // BUDGET CONTOLLER
var budgetController = (function(){
    
    class Expense {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }
    class Income {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }

   var allExpenses = [];
   var Incomes = [];
   var totalExpenses = 0;

   var data = {
        allItem: {
             exp : [],
            inc : [] 
        },
        totals: {
            exp: 0,
            inc: 0
        }
        
    
   }
   return {
       addItem : function(type, des, val){
            var ID;
        if ( data.allItem[type].length > 0){
            ID = data.allItem[type][data.allItem[type].length = 1].id + 1;
        }
        else{
            ID = 0;
        }
    
        
           if(type === 'exp'){
            var newItem = new Expense(ID, des, val);
           }else if (type === 'inc'){
            var newItem = new Income(ID, des, val);
           }
           data.allItem[type].push(newItem);

           return newItem;
         
       },
    
      testing  : function(){
       console.log(data);
   }
   
}

})();

//UI CONTROLLER

var UIContoller = (function(){

    var DOMstring = {
        inputType : ".add__type",
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton : '.add__btn'

    }
   
    // public controller
    return {
        getinput: function(){
            return {
                type: document.querySelector(DOMstring.inputType).value, //will be inc or exp
                description: document.querySelector(DOMstring.inputDescription).value,
                value : document.querySelector(DOMstring.inputValue).value
                }
        },
        getDOMstrings : function(){
            return DOMstring;
        }
    }
})();

// GLOBALE APP CONTROLLER
var contoller = (function(budetCtrl,UICtrl){
    
    var setupEventListeners = function(){
        var Dom = UICtrl.getDOMstrings();
        document.querySelector(Dom.inputButton).addEventListener('click', ctrlAddItem); 
    document.addEventListener('keypress', function(event){

        if(event.keyCode === 13 || event.which === 13 ){
            ctrlAddItem();
        }
    })
    }
    
    var ctrlAddItem = function(){
        var input, newItem;
        //1. Get the filled input data
        var input = UICtrl.getinput();
        // 2. Add the item  to the budget controller
        var newItem = budetCtrl.addItem(input.type, input.description, input.value);
        //3. Add the item to the UI

        //4. Calculate the budget


        //5. Display the budget on the UI
        
    }
     
    return {
        init: function(){
            console.log("Application has Started");
            setupEventListeners();
        }
    }

})(budgetController, UIContoller);

contoller.init();