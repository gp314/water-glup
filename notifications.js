let now = new Date()
if(now.getHours()>=21){
setInterval(beba_agua, 60000)
}

function beba_agua() {

    if (Notification.permission !== "granted") {        //Se a permição não for garantida, ele vai pedir notificação de novo
    Notification.requestPermission();
    alert("Permita as notificações e vamos te lembrar de beber agua :)") //Isso so vai aparecer se não aceitarem as notificações 
}   
    else {    
        let notificacao = new Notification("Já bebeu água hoje?", {
        icon: 'water.jpg', //img
        body: 'Beba água'  // msg
        });

    notificacao.onclick = function () {
        window.open('http://google.com/'); //site direcionado

    };       
}
}
beba_agua();
