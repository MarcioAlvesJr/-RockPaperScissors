let selectedHand = 0;

//SELECTION MENU UI ELEMENTS
const
    menu_shapes = document.querySelectorAll('.hand-wheel .back-shape path'),
    menu_hands = document.querySelectorAll(".hand-wheel .hand path"),
    menu_turns = document.querySelectorAll('.turn')



function backornext(n){
    if(n==-1){
        if(selectedHand == 0){
            selectHand(2)
        }else{
            selectHand(selectedHand-1)
        }
    }else{

    }


    function selectHand(idx){
        if(idx != selectHand){
            selectHand = idx
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
        }
}

    menu_turns[0].addEventListener("click", () => backornext(-1))
    menu_turns[1].addEventListener("click", () => backornext(1))