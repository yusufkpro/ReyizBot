var request = require('request');

request('Bir adamın ayakları tutulmuş, sonra da kulakları kiralanmış.', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        msg.channel.send(info.link); // ve konsola çıktıyı versin.
    }
});