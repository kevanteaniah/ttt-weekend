/*-------------------------------- Constants --------------------------------*/
const boardEl = document.querySelector('.board')
const player1 = 1
const player2 = -1 

//redo
const winningCombos =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    

]
/*---------------------------- Variables (state) ----------------------------*/

let isWinner, tie, yourTurn

/*------------------------ Cached Element References ------------------------*/
const messageEl = document.querySelector('#message')

// const boardEl = document.querySelector('.board')

const squares = Array.from(document.querySelectorAll('.square'))

const reset = document.querySelector('#reset-button')


// console.log(squares)

/*----------------------------- Event Listeners -----------------------------*/

squares.forEach(square => square.addEventListener('click', handleClick) )

form.addEventListener('reset', reset)

// boardArray[i].indexOf.addEventListener('click', )

// squares.addEventListener('click')

/*-------------------------------- Functions --------------------------------*/
init()
function init(){
// 3.2.1) Initialize the board array to 9 nulls to represent empty squares. 
  

  boardArray = [null, null, null ,null , null, null, null, null, null]
	    // The 9 elements will "map" to each square..
  // messageEl.className = ""
  // squares.classname = ""
  yourTurn = 1 
      
      // 3.2.3) Initialize the winner variable to null.
  isWinner = null
  // console.log(isWinner)
	    // This represents that there is no winner or tie yet. 
	    // The winner variable will hold the player value (1 or -1) if there's a winner. 
	    // The winner will hold a 'T' if there's a tie.

  messageEl.textContent = "X Goes First"

        
        
        handleClick
        render()
      }

      // 3.2.4) Render those state variables to the page by calling a render function.

      function render(){
         // 3.3.1) Loop over the board array (which represents the squares on the page), and for each iteration:
        // 
        for(let i = 0; i < boardArray.length; i++){
          if(squares[i].textContent === ""){

            if(boardArray[i] === 1){
              squares[i].textContent = "X"
              messageEl.textContent = "X, it's your turn"
              } else if(boardArray[i] === -1){
              squares[i].textContent = "O"
              messageEl.textContent = "O, it's your turn"
              } 
          }
          

        }
        
        if(isWinner !== null){
          return `is the winner` // change to messEl
        } 
        


      }

      

    // 5.3) If winner is not null, immediately return because the game is over.
    function handleClick(event){
      
        
      let clicked = parseInt(event.target.id.slice([2]))
      yourTurn = -1 * yourTurn //changing the turn
      boardArray[clicked] = yourTurn
    
      if(yourTurn === 1){
        squares[clicked].textContent= "X"
      } else if(yourTurn === -1){
        squares[clicked].textContent = "O"
      }

      getWinner()
      
    }

    function getWinner(){
      console.log(boardArray)
      winningCombos.forEach(combo => {
        // console.log(combo[0])
        // console.log( combo[1])
        // console.log(combo[2])
        if(boardArray[combo[0]] + boardArray[combo[1]] + boardArray[combo[2]] === 3){
          console.log("X wins")
        } else if(boardArray[combo[0]] + boardArray[combo[1]] + boardArray[combo[2]] === -3){
          console.log("O wins")

        }
        // console.log(boardArray[combo[0]] + boardArray[combo[1]] + boardArray[combo[2]])
      })


        // console.log(])
        // console.log(
      
    
      

    }
	

	// 5.6) Set the winner variable if there's a winner by calling a new function: getWinner.
	  // The getWinner function will...

     // 5.6.1) There are a couple methods you can use to find out if there is a winner.
	   // This is the first, more elegant way that takes advantage of the winningCombos array you wrote above in step 4.
	   // The 5.6.2 step is a little simpler to comprehend, but you'll need to write a lot more code.
	   // The 5.6.2 step also won't take advantage of the winningCombos array, but using it as a reference will help you build a solution.
	   // Choose only one path.
		  // 5.6.1.1) Loop through the each of the winning combination arrays defined.
		  // 5.6.1.2) Total up the three board positions using the three indexes in the current combo.
		  // 5.6.1.3) Convert the total to an absolute value (convert any negative total to positive).
		  // 5.6.1.4) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

		// 5.6.2) This solution is less elegant, but might be easier to write on your own if you're struggling with the 5.6.1.X pseudocode.
		  // 5.6.2.1) For each one of the winning combinations you wrote in step 4, find the total of each winning combination.
		  // 5.6.2.2) Convert the total to an absolute value (convert any negative total to positive)
		  // 5.6.2.3) If the total equals 3, we have a winner! Set the winner variable to the board's value at the index specified by the first index of that winning combination's array by returning that value.

      
		// 5.6.3) Next, If there's no winner, check if there's a tie:

		// 5.6.4) Set the winner varible to "T" if there are no more nulls in the board array by returning the string "T".
	  
		// 5.6.5) Otherwise return null.
    


    function boardCheck(){

    }

    // 

    // winningCombos.forEach((combo)=>{

      // 6) Handle a player clicking the replay button:

	// 6.1) Add a replay button to the HTML document

	// 6.2) Store the new replay button element

	// 6.3) Do steps 4.1 (initialize the state variables) and 4.2 (render).