body{
    margin: 0;
    padding: 0;
}

.grass:hover , .dirt:hover , .sky:hover , .stone:hover{
   border : 1px orange solid;
}
.container{
  
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: 100% 100%;

    display: flex; 
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    align-content: center;
    justify-content: center;
}
.canvas{
    width: 80%;
    height: 100vh;
  
    margin: 0;
    padding: 0;
    

}
.sidebar{
    width: 20%;
    height: calc(100vh-1px);
    
    border: 1px solid black;
}

.sidebar div{
  border: solid black 1px;
  height: 90px;
}

.screen{

 width: 100%;
 height: 100vh;
 margin: 0;
padding: 0;
}
#down{
    display: flex; 
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
}
#upper{
    display: flex; 
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
}

.row{
    width: 100%;
    height: 10%;
    display: flex;

}
.grass{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("./images/grass.png");    
}

.dirt{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("./images/dirt.png");
}

.wood{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("./images/wood.png");
}

.stone{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-image: url("./images/stone.png");
}
.sky{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-color: rgb(94, 247, 247) ;
}

.cloud{
    width: 100%;
    height: 100%;
    background-color:white ;
    border: 1px solid black;

}

.tools{
    display: block;
    
    align-items: center;
}

#shovel:active{
     cursor: url("./cursors/shovel.cur");
     background-color: blue;
     opacity: 0.5;
    }

#axe:active {
     cursor: url("./cursors/axe.cur"),pointer;
     background-color: blue;
     opacity: 0.5;
}

#pickAxe:active {
     cursor: url("./cursors/pickAxe.cur"),pointer;
     background-color: blue;
     opacity: 0.5;
}

