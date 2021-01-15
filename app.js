// 0 = Scissors
// 1 = Paper
// 2 = Rock


let
    wheelRotation = 0,
    selectedHand = Math.floor(Math.random() * 3)




//SELECTION MENU UI ELEMENTS
const
    menu_shapes = document.querySelectorAll('.hand-wheel .back-shape path'),
    menu_hands = document.querySelectorAll(".hand-wheel .hand path"),
    menu_turns = document.querySelectorAll('.turn'),
    menu_wheel = document.querySelector('.select-to-play .hand-wheel'),
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
    setTimeout(()=>{; 
        document.querySelector('.background').classList.toggle('vs-screen')
        document.querySelector('.vs-screen-game').classList.toggle('active')
        
        hitHit()
        setTimeout(hitHit, 1000)
        setTimeout(()=>{
            if(theWinneIs(player,comp) == "even"){
                //console.log("The game is even ")
                setTimeout(()=>{document.querySelectorAll(".hand .wrapper *").forEach(hand =>{
                    hand.classList.toggle('hit')
                })
                }, 500)
                setTimeout(()=>{document.querySelectorAll(".hand .wrapper *").forEach(hand =>{
                    hand.classList.toggle('hit')
                })
                }, 850)
        
            }else if(theWinneIs(player,comp) == "player"){
                //console.log("You won!")
                setTimeout(()=>{document.querySelectorAll(".hand.player .wrapper *").forEach(hand =>{
                    hand.classList.toggle('hit')
                })
                }, 500)
                setTimeout(()=>{document.querySelectorAll(".hand.player .wrapper *").forEach(hand =>{
                    hand.classList.toggle('hit')
                })
                }, 850)

            }else{
                //console.log("You lost!")
                setTimeout(()=>{document.querySelectorAll(".hand.enemy .wrapper *").forEach(hand =>{
                    hand.classList.toggle('hit')
                })
                }, 500)
                setTimeout(()=>{document.querySelectorAll(".hand.enemy .wrapper *").forEach(hand =>{
                    hand.classList.toggle('hit')
                })
                }, 850)
            }
            
        }
        
            , 2000)
      
        setTimeout(()=>{
            //SHOW SELECTED HANDS
            document.querySelectorAll(".hand.enemy .wrapper *")[2].style.opacity =  0
            document.querySelectorAll(".hand.player .wrapper *")[2].style.opacity =  0
        
            document.querySelectorAll(".hand.enemy .wrapper *").forEach(hand =>
                {if(hand.classList.contains(comp)){
                    hand.style.opacity =  1}})
            document.querySelectorAll(".hand.player .wrapper *").forEach(hand =>
                {if(hand.classList.contains(player)){
                    hand.style.opacity =  1}})
                }, 
        2000);
        setTimeout(()=>{


        //SHOW WINNING/LOSING/ANIMATION
    
    
        // console.log(`
        // Computer: ${comp}
        // Player: ${player}
        // `)
    
        const
            vs_screen_hands = document.querySelectorAll(".vs-screen-game .hand"),
            background = document.querySelector('.background.vs-screen ')
    
    
        if(theWinneIs(player,comp) == "even"){
            background.style.filter="brightness(0.8)  blur(4px)"
            vs_screen_hands.forEach(hand => {
                hand.style.filter="blur(4px)"
                hand.style.opacity="0.6"
            })
    
        }else if(theWinneIs(player,comp) == "player"){
            background.style.filter="brightness(0.8)"
            background.style.top = "-100vh"
            vs_screen_hands[0].style.filter=" blur(4px)"
            vs_screen_hands[0].style.opacity="0.6"
        }else{
            background.style.top = "0vh"
            background.style.filter="brightness(0.8)"  
            vs_screen_hands[1].style.filter=" blur(4px)"
            vs_screen_hands[1].style.opacity="0.6"
        }
        
        }, 2950);
    
        
    }, 1000)
    
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
function hitHit(){
    setTimeout(()=>{document.querySelectorAll(".hand .wrapper *").forEach(hand =>{
        hand.classList.toggle('hit')
    })
    }, 500)
    setTimeout(()=>{document.querySelectorAll(".hand .wrapper *").forEach(hand =>{
        hand.classList.toggle('hit')
    })
    }, 850)
}

//SELECT RANDOM HAND ON LOAD
setTimeout(() =>{
    menu_wheel.style.filter = "blur(0px)"
    menu_wheel.style.opacity = "1"

}, 150);


if(Math.floor(Math.random() * 2) == 1){
    wheelRotation = 10000
    }else{
    wheelRotation = -10000
    }

rotateWheel()

wheelRotation = 0



if(selectedHand == 1){
    wheelRotation = wheelRotation -120
}else if(selectedHand == 2){
    wheelRotation = wheelRotation +120
}else{
    wheelRotation = wheelRotation +360
}

menu_shapes.forEach(shape=>{
    shape.parentElement.classList.remove('active')})

setTimeout(() =>{rotateWheel()
    selectHand(selectedHand,true)}, 200);



