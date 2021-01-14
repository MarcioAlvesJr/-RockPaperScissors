// 0 = Scissors
// 1 = Paper
// 2 = Rock

let
    selectedHand = Math.floor(Math.random() * 3),
    wheelRotation = 0;

//SELECTION MENU UI ELEMENTS
const
    menu_shapes = document.querySelectorAll('.hand-wheel .back-shape path'),
    menu_hands = document.querySelectorAll(".hand-wheel .hand path"),
    menu_turns = document.querySelectorAll('.turn'),
    menu_wheel = document.querySelector('.hand-wheel'),
    menu_playBtn = document.querySelector('.play-btn').addEventListener('click', startGame)

// Menu Selection
    function selectHand(idx, first){
        if(idx != selectedHand || first == true){
            rotateWheel();
            menu_shapes.forEach(shape=>{
                shape.parentElement.classList.remove('active')
            })
            menu_hands.forEach(hand=>{
                hand.parentElement.classList.remove('active')
            })
            menu_shapes[idx].parentElement.classList.add('active')
            menu_hands[idx].parentElement.classList.add('active')
        
            const handwheel = document.querySelector('.hand-wheel')

            handwheel.classList.remove('paper')
            handwheel.classList.remove('rock')

            if(idx == 1 ){
                handwheel.classList.add('paper')
            }else if(idx == 2 )
            {
                handwheel.classList.add('rock')
            }
            }
            selectedHand = idx
        }
    function rotateWheel(){
        menu_wheel.style.transform = `rotate(${wheelRotation}deg)`
    }

        menu_turns[1].addEventListener("click", () => {
            wheelRotation = wheelRotation +120
            if(selectedHand == 0){
                selectHand(2)
            }else{
                selectHand(selectedHand-1)
            }
        })
        menu_turns[0].addEventListener("click", () => {
            wheelRotation = wheelRotation -120

            if(selectedHand == 2){
                selectHand(0)
            }else{
                selectHand(selectedHand+1)
            }
        })
// VS area
function startGame(){
    const
        comp = numToHand(Math.floor(Math.random() * 3)),
        player = numToHand(selectedHand)
    //HIDE MENU ELEMENTS
    document.querySelector(".select-to-play").classList.toggle("hidden")

    //SHOW NEXT SCREEN ELEMENTS
    document.querySelector('.background').classList.toggle('vs-screen')
    document.querySelector('.vs-screen-game').classList.toggle('active')

    //SHOW SELECTED HANDS
    document.querySelectorAll(".hand.enemy .wrapper *")[2].style.opacity =  0
    document.querySelectorAll(".hand.player .wrapper *")[2].style.opacity =  0

    document.querySelectorAll(".hand.enemy .wrapper *").forEach(hand =>
        {if(hand.classList.contains(comp)){
            hand.style.opacity =  1}})
    document.querySelectorAll(".hand.player .wrapper *").forEach(hand =>
        {if(hand.classList.contains(player)){
            hand.style.opacity =  1}})
    //SHOW WINNING/LOSING/ANIMATION
    console.log(`
    Computer: ${comp}
    Player: ${player}
    `)

    const
        vs_screen_hands = document.querySelectorAll(".vs-screen-game .hand"),
        background = document.querySelector('.background.vs-screen ')


    if(theWinneIs(player,comp) == "even"){
        console.log("The game is even ")
        background.style.filter=" blur(4px)"
        vs_screen_hands.forEach(hand => {
            hand.style.filter=" blur(4px)"
        })

    }else if(theWinneIs(player,comp) == "player"){
        console.log("You won!")
        vs_screen_hands[0].style.filter=" blur(4px)"
    }else{
        console.log("You lost!")  
        vs_screen_hands[1].style.filter=" blur(4px)"
    }
    
}

function theWinneIs(player,comp){
    if(player == comp){
        return "even"
    }else 
    if(player == "scissors"){
        if(
        comp == "paper"){
        return "player"
        }
        if(
        comp == "rock"){
        return "comp"
        }
    }else 
    if(player == "paper"){
        if(
        comp == "scissors"){
        return "comp"
        }
        if(
        comp == "rock"){
        return "player"
        }
    }else{
        if(
        comp == "scissors"){
        return "player"
        }
        if(
        comp == "paper"){
        return "comp"
        }
    }

    
}

function numToHand(num){
    switch(num){
        case 0:
            return "scissors"
            break
        case 1:
            return "paper"
            break
        case 2:
            return "rock"
    }
}

//SELECT RANDOM HAND ON LOAD

if(selectedHand == 1){
    wheelRotation = wheelRotation -120
}else if(selectedHand == 2){
    wheelRotation = wheelRotation +120
}else{
    wheelRotation = wheelRotation +360
}
rotateWheel()
selectHand(selectedHand,true)


