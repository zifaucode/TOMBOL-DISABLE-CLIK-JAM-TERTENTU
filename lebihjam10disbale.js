<script type="text/javascript">
window.addEventListener("load", function(){
     var currentTime = new Date();
     var hours = currentTime.getHours();
     var newButton = document.getElementById("btn1");

    if(hours>10) {
     newButton.style.display = "none";
    }
    else {
     newButton.style.display = "block";
    }
}, false);

</script> 
