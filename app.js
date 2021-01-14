let
    selectedHand = 0,
    wheelRotation = 0;

//SELECTION MENU UI ELEMENTS
const
    menu_shapes = document.querySelectorAll('.hand-wheel .back-shape path'),
    menu_hands = document.querySelectorAll(".hand-wheel .hand path"),
    menu_turns = document.querySelectorAll('.turn'),
    menu_wheel = document.querySelector('.hand-wheel')

// Menu Selection
    function selectHand(idx){
        if(idx != selectedHand){
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

