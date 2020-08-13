var ranks = ["1","2","3","4"];
var image1_rank = "-1";
var image2_rank = "-1";
var image3_rank = "-1";
var image4_rank = "-1";
var votername = "";
function inputName(){
    votername = window.prompt("Who is Voting ?");
    if(votername==null || votername==""){
        inputName();
    }
}
function CloseForm(){
    var x = document.getElementById("submitbutton");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
    var y = document.getElementById("hide");
    if (y.style.display === "none") {
        y.style.display = "block";
    } 
    else {
        y.style.display = "none";
    }
    y = document.getElementById("marqueehide");
    if (y.style.display === "none") {
        y.style.display = "block";
    } 
    else {
        y.style.display = "none";
    }
    y = document.getElementById("div1");
    if (y.style.display === "none") {
        y.style.display = "block";
    } 
    else {
        y.style.display = "none";
    }
    y = document.getElementById("div2");
    if (y.style.display === "none") {
        y.style.display = "block";
    } 
    else {
        y.style.display = "none";
    }
    var z = document.getElementById("endmarqueeh1");
    z.innerHTML = "Thank You! We have recorded your valuable response successfully "
}

function submit(){
    if(image1_rank!=-1 && image2_rank!=-1 && image3_rank!=-1 && image4_rank!=-1){
        var firebaseConfig = {
            apiKey: "AIzaSyCI5l4eAYymh3hu8NVe4YTYpnT3C5Gp_lY",
            authDomain: "sfcjscjmjc.firebaseapp.com",
            databaseURL: "https://sfcjscjmjc.firebaseio.com",
            projectId: "sfcjscjmjc",
            storageBucket: "sfcjscjmjc.appspot.com",
            messagingSenderId: "346452933411",
            appId: "1:346452933411:web:aff00969ee33f6504d6a96"
        };
        firebase.initializeApp(firebaseConfig);
        var db = firebase.database();
        var Ref = db.ref();
        var data = Ref.child("/").child(votername);
        data.push({"image1":image1_rank,"image2":image2_rank,"image3":image3_rank,"image4":image4_rank});
        CloseForm();
    }
    else{
        alert("Please rank ALL the logos in your preffered order.")
    }
}


function image1(){
    if(image1_rank=="-1"){
        for(i=0;i<4;i++){
            if(ranks[i]!="-1"){
                image1_rank=ranks[i];
                ranks[i]="-1";
                break;
            }
        }
        document.getElementById("selector1").innerHTML = "Assigned Rank : " + image1_rank;
    }
    else{
        ranks[parseInt(image1_rank)-1] = image1_rank;
        image1_rank="-1";
        document.getElementById("selector1").innerHTML = "";
    }
}
function image2(){
    if(image2_rank=="-1"){
        for(i=0;i<4;i++){
            if(ranks[i]!="-1"){
                image2_rank=ranks[i];
                ranks[i]="-1";
                break;
            }
        }
        document.getElementById("selector2").innerHTML = "Assigned Rank : " + image2_rank;
    }
    else{
        ranks[parseInt(image2_rank)-1] = image2_rank;
        image2_rank="-1";
        document.getElementById("selector2").innerHTML = "";
    }
}function image3(){
    if(image3_rank=="-1"){
        for(i=0;i<4;i++){
            if(ranks[i]!="-1"){
                image3_rank=ranks[i];
                ranks[i]="-1";
                break;
            }
        }
        document.getElementById("selector3").innerHTML = "Assigned Rank : " + image3_rank;
    }
    else{
        ranks[parseInt(image3_rank)-1] = image3_rank;
        image3_rank="-1";
        document.getElementById("selector3").innerHTML = "";
    }
}function image4(){
    if(image4_rank=="-1"){
        for(i=0;i<4;i++){
            if(ranks[i]!="-1"){
                image4_rank=ranks[i];
                ranks[i]="-1";
                break;
            }
        }
        document.getElementById("selector4").innerHTML = "Assigned Rank : " + image4_rank;
    }
    else{
        ranks[parseInt(image4_rank)-1] = image4_rank;
        image4_rank="-1";
        document.getElementById("selector4").innerHTML = "";
    }
}