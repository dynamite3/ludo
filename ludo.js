console.log("hi")
var Rpath=[20,21,22,23,24,16,13,10,7,4,1,2,3,6,9,12,15,18,37,38,39,40,41,42,48,54,53,52,51,50,49,57,60,63,66,69,72,71,70,67,64,61,58,55,36,35,34,33,32,31,25,26,27,28,29,30]
var Bpath=[6,9,12,15,18,37,38,39,40,41,42,48,54,53,52,51,50,49,57,60,63,66,69,72,71,70,67,64,61,58,55,36,35,34,33,32,31,25,19,20,21,22,23,24,16,,13,10,7,4,1,2,5,8,11,14,17]
var Gpath=[67,64,61,58,55,36,35,34,33,32,31,25,19,20,21,22,23,24,16,13,10,7,4,1,2,3,6,9,12,15,18,37,38,39,40,41,42,48,54,53,52,51,50,49,57,60,63,66,69,72,71,68,65,62,59,56]
var Ypath=[53,52,51,50,49,57,60,63,66,69,72,71,70,67,64,61,58,55,36,35,34,33,32,31,25,19,20,21,22,23,24,16,13,10,7,4,1,2,3,6,9,12,15,18,37,38,39,40,41,42,48,47,46,45,44,43]
var dicearr=[1,2,3,4,5,6]

var trn=3

var turn=["R","B","Y","G"]

diccolarray=["tomato","lightblue","PaleGoldenRod","lightgreen"]

btiles=[6,5,8,11,14,17]
rtiles=[20,26,27,28,29,30]
gtiles=[67,68,65,62,59,56]
ytiles=[53,47,46,45,44,43]

for(i=0;i<btiles.length;i++)
{
    val=btiles[i]
    ele=document.getElementById(val)
    ele.setAttribute("style","background-color:lightblue")
    
}

for(i=0;i<btiles.length;i++)
{
    val=gtiles[i]
    ele=document.getElementById(val)
    ele.setAttribute("style","background-color:lightgreen")
}

for(i=0;i<btiles.length;i++)
{
    val=ytiles[i]
    ele=document.getElementById(val)
    ele.setAttribute("style","background-color:PaleGoldenRod")
}

for(i=0;i<btiles.length;i++)
{
    val=rtiles[i]
    ele=document.getElementById(val)
    ele.setAttribute("style","background-color:tomato")
}





prevR=[0,0,0,0,0]
prevB=[0,0,0,0,0]
prevY=[0,0,0,0,0]
prevG=[0,0,0,0,0]



function rollDICE(){

    trn=(trn+1)%1;
    val=Math.floor(Math.random() * 6) + 1;
    document.getElementById("doutput").innerText=""
    di=document.createElement("h4")
    di.innerText=val + turn[trn];
    fillbackground()
    di.style.fontSize="20px";
    document.getElementById("doutput").appendChild(di)

    npr=Array.from(prevR)
    npb=Array.from(prevB)
    npy=Array.from(prevY)
    npg=Array.from(prevG)

    console.log(npr)
    

    if(trn===0){
        
        if( (prevR[1]+val)<=57){
            document.getElementById("R100").addEventListener("click",R1 );
        }
        if( (prevR[2]+val)<=57 ){
            document.getElementById("R200").addEventListener("click",R2 );
        }
        if( (prevR[3]+val)<=57 ){
            document.getElementById("R300").addEventListener("click",R3 );
        }
        if( (prevR[4]+val)<=57 ){
            document.getElementById("R400").addEventListener("click",R4 );
        }
        
        function R1()   {   RemoveR("R100",1)           }
        function R2()   {   RemoveR("R200",2)           }
        function R3()   {   RemoveR("R300",3)           }
        function R4()   {   RemoveR("R400",4)           }

        function RemoveR(R,indx){
            console.log("")
            console.log(R)
            console.log(indx)
            var div = document.getElementById(R);
            div.remove()
            selectcandidateR(val,npr,indx);
        }
    }
    
    
    if(trn===1){
        
        if((prevB+val)<=57){
            RemoveB1()
            //document.getElementById("B1").addEventListener("click", RemoveB1);
            function RemoveB1(){
             
                var div = document.getElementById("B1");
                div.remove();
                selectcandidateB(val,npb);
            }
        }
   }

    if(trn===2){
        
        if((prevY+val)<=57){
            RemoveY1()
            //document.getElementById("Y1").addEventListener("click", RemoveY1);
            function RemoveY1(){
             
                var div = document.getElementById("Y1");
                div.remove();
                selectcandidateY(val,npy);    
            }
         }
    }
    if(trn===3){
        
        if((prevG+val)<=57){
            RemoveG1()
            //document.getElementById("G1").addEventListener("click", RemoveG1);
            function RemoveG1(){
             
                var div = document.getElementById("G1");
                div.remove();
                selectcandidateG(val,npg);
            }
        }
    }

    console.log(" ")
    
}

//red
function selectcandidateR(val,puranaR,indx){
    cpvalR=val
    val=val+puranaR
    cpR=Rpath[val-1]

    console.log("before win val "+val)
    console.log("before win prevRis "+prevR)

    if(val===57){
        var winm=document.createElement("h5")
        winm.innerText="PLAYER RED HAS WON"

        document.getElementById("instruction").appendChild(winm) 
        if(prevR[indx]>0){
            prevR[indx]=prevR[indx]+cpvalR
        }
    }
        console.log("current placin at " +cpR)
        
        if(cpR<73)
        {
            var postion=document.createElement("img")
            postion.setAttribute("src",'img_players/redplayer'+indx+'.png')
            postion.setAttribute("id",'R'+indx*100+'')
            postion.style.marginLeft="12px";
            postion.style.marginRight="12px";
            
            document.getElementById(cpR).appendChild(postion)
            prevR[indx]=prevR[indx]+cpvalR 
        }
   
}

/*
//blue
function selectcandidateB(val,puranaB){
    
    cpvalB=val
    val=val+puranaB
    cpB=Bpath[val-1]

    console.log("before win val "+val)
    console.log("before win prevRis "+prevB)
    if(val===57){
        var winm=document.createElement("h5")
        winm.innerText="PLAYER BLUE HAS WON"
        document.getElementById("instruction").appendChild(winm) 
        if(prevB>0)
                document.getElementById(Bpath[prevB-1]).innerText=""
                prevB=prevB+cpvalB
    }

        console.log("current placin at " +cpB)
        if(cpB<73)
        {
            var postion=document.createElement("img")
            postion.setAttribute("src","img_players/blueplayer1.png")
            postion.setAttribute("id","B1")
            postion.style.backgroundColor="blue";
            postion.style.marginLeft="12px";
            postion.style.marginRight="12px";
            
            document.getElementById(cpB).appendChild(postion)
            prevB=prevB+cpvalB
        }
    
    

   
}


//yellow
function selectcandidateY(val,puranaY){
    
    cpvalY=val
    val=val+puranaY
    cpY=Ypath[val-1]

    console.log("before win val "+val)
    console.log("before win prevRis "+prevY)

    if(val===57){
        var winm=document.createElement("h5")
        winm.innerText="PLAYER YELLOW HAS WON"
        document.getElementById("instruction").appendChild(winm) 
        if(prevY>0)
                document.getElementById(Ypath[prevY-1]).innerText=""
                prevY=prevY+cpvalY
    }
    

        console.log("current placin at " +cpY)
        if(cpY<73)
        {
            var postion=document.createElement("img")
            postion.setAttribute("src","img_players/yellowplayer1.png")
            postion.setAttribute("id","Y1")
            postion.style.backgroundColor="yellow";
            postion.style.marginLeft="12px";
            postion.style.marginRight="12px";
            
            document.getElementById(cpY).appendChild(postion)
            prevY=prevY+cpvalY 
        }
    
    

   
}


//green
function selectcandidateG(val,puranaG){
    
    cpvalG=val
    val=val+puranaG
    cpG=Gpath[val-1]

    console.log("before win val "+val)
    console.log("before win prevRis "+prevG)
    if(val===57){
        var winm=document.createElement("h5")
        winm.innerText="PLAYER GREEN HAS WON"
        document.getElementById("instruction").appendChild(winm) 
        if(prevG>0)
                document.getElementById(Gpath[prevG-1]).innerText=""
                prevG=prevG+cpvalG
    }
   

        console.log("current placin at " +cpG)
        if(cpG<73)
        {
            var postion=document.createElement("img")
            postion.setAttribute("src","img_players/greenplayer1.png")
            postion.setAttribute("id","G1")
            postion.style.backgroundColor="green";
            postion.style.marginLeft="12px";
            postion.style.marginRight="12px";
            
            document.getElementById(cpG).appendChild(postion)
            prevG=prevG+cpvalG
        }

}
*/

function fillbackground(){
    var ele=document.getElementById("bgrnd")
    ele.style.backgroundColor=diccolarray[trn]
}

