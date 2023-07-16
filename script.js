console.log("welcome to tic tac toe");
let bgmusic=new Audio("music.mp3");
let turnsound=new Audio("ting.mp3");
let gameover=new Audio("gameover.mp3");
let turn="X";
let over=false;
 
//function to change turn
const changeturn=()=>{
    return turn==="X"?"0" :"X"

}

// function to check for a win
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');

    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    wins.forEach(e =>{
        if((boxtexts[e[0]].innerText == boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText == boxtexts[e[1]].innerText)  && (boxtexts[e[0]].innerText!==''))
        {
            document.querySelector('.info').innerText=boxtexts[e[0]].innerText+"  won";
            over=true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].src="winning-dance.gif";

            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display="inline";
            if(boxtexts[e[0]].innerText =="0")
            document.querySelector('.imgbox').getElementsByTagName('img')[0].src="excited.gif";
            gameover.play();
        

        }
        
    })

}
bgmusic.play();
// game  logic
let boxes=document.getElementsByClassName("box");
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText==''){
            bgmusic.play();
            boxtext.innerText=turn;
            turn=changeturn();
            turnsound.play();
            checkwin();
            if(over==false)
            {

                document.getElementsByClassName("info")[0].innerText=" turn for "+turn;
            }
        }
    })
})

// add onclick listner to  reset button
reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText=""
    });
    turn="X"
    over=false;
    if(over==false)
            {

                document.getElementsByClassName("info")[0].innerText=" turn for "+turn;
            }
            bgmusic.pause();
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.display="none";
    
});

