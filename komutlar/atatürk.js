var request = require('request');

request('http://i.sozcu.com.tr/wp-content/uploads/2016/11/ataturk-sli.jpg', function (error, response, body) {
    if (error) return console.log('Hata:', error); // Hata olursa, konsola göndersin,
    else if (!error) { // Eğer hata yoksa;
        var info = JSON.parse(body); // info değişkeninin içerisine JSON'ı ayrıştırsın,
        msg.channel.send(info.link); // ve konsola çıktıyı versin.
    }
});