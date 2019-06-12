var http = require('http');
var qs = require('querystring');
var fs = require('fs');

function send(res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(data));
    res.end();
}

var server = http.createServer(function (req, res) {

    if (req.method ==="GET") {
        if (req.url === '/dist/')
            req.url = "/dist/index.html";
        fs.readFile('..' + req.url, function (err, data) {
            if (err)
                res.writeHead(404);
            else {
                res.writeHead(200);
                res.write(data);
            }
            res.end();
        });
    } else if (req.url === '/') { //check the URL of the current request
        if (req.method === 'POST') {
            var body = '';

            req.on('data', function (data) {
                body += data;

                // Too much POST data, kill the connection!
                // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
                if (body.length > 1e6) {
                    req.connection.destroy();
                }
            });

            req.on('end', function () {
                var post = qs.parse(body);

                if (post['from'] === "Київ" && post['to'] === "Львів") {
                    send(res, {"data":{"list":[
                        {"num":"015О","category":0,"isTransformer":0,"travelTime":"6:22","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Харків-Пас","date":"четвер, 13.06.2019","time":"01:17","sortTime":1560377820,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Рахів","date":"четвер, 13.06.2019","time":"07:39","sortTime":1560400740},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"015К","category":0,"isTransformer":0,"travelTime":"6:22","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Харків-Пас","date":"четвер, 13.06.2019","time":"01:17","sortTime":1560377820,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Рахів","date":"четвер, 13.06.2019","time":"07:39","sortTime":1560400740},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"111О","category":0,"isTransformer":0,"travelTime":"11:11","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Харків-Пас","date":"четвер, 13.06.2019","time":"05:15","sortTime":1560392100,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"четвер, 13.06.2019","time":"16:26","sortTime":1560432360},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"073А","category":0,"isTransformer":0,"travelTime":"9:38","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Москва Киевская","date":"четвер, 13.06.2019","time":"05:38","sortTime":1560393480,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"четвер, 13.06.2019","time":"15:16","sortTime":1560428160},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"705К","category":1,"isTransformer":0,"travelTime":"5:09","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"06:00","sortTime":1560394800,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Пшемисль","date":"четвер, 13.06.2019","time":"11:09","sortTime":1560413340},"types":[{"id":"С1","title":"Сидячий першого класу","letter":"С1","places":12}],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"715К","category":1,"isTransformer":0,"travelTime":"6:55","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"06:50","sortTime":1560397800,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Пшемисль","date":"четвер, 13.06.2019","time":"13:45","sortTime":1560422700},"types":[{"id":"С1","title":"Сидячий першого класу","letter":"С1","places":60}],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"142П","category":0,"isTransformer":0,"travelTime":"14:54","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Бахмут","date":"четвер, 13.06.2019","time":"13:36","sortTime":1560422160,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"п'ятниця, 14.06.2019","time":"04:30","sortTime":1560475800},"types":[{"id":"Л","title":"Люкс","letter":"Л","places":12}],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"749К","category":0,"isTransformer":0,"travelTime":"5:50","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"14:07","sortTime":1560424020,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Івано-Франківськ","date":"четвер, 13.06.2019","time":"19:57","sortTime":1560445020},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"749Д","category":0,"isTransformer":0,"travelTime":"5:50","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"14:07","sortTime":1560424020,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"четвер, 13.06.2019","time":"19:57","sortTime":1560445020},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"013К","category":0,"isTransformer":0,"travelTime":"9:07","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"17:11","sortTime":1560435060,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Солотвино 1","date":"п'ятниця, 14.06.2019","time":"02:18","sortTime":1560467880},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"743Л","category":1,"isTransformer":0,"travelTime":"5:10","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Дарниця","date":"четвер, 13.06.2019","time":"17:33","sortTime":1560436380,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"четвер, 13.06.2019","time":"22:43","sortTime":1560454980},"types":[{"id":"С1","title":"Сидячий першого класу","letter":"С1","places":21}],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"743К","category":0,"isTransformer":0,"travelTime":"5:10","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Дарниця","date":"четвер, 13.06.2019","time":"17:33","sortTime":1560436380,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"четвер, 13.06.2019","time":"22:43","sortTime":1560454980},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"743Ш","category":0,"isTransformer":0,"travelTime":"5:10","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Дарниця","date":"четвер, 13.06.2019","time":"17:33","sortTime":1560436380,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"четвер, 13.06.2019","time":"22:43","sortTime":1560454980},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"081Д","category":0,"isTransformer":0,"travelTime":"9:12","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"18:30","sortTime":1560439800,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Чоп","date":"п'ятниця, 14.06.2019","time":"03:42","sortTime":1560472920},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"081К","category":0,"isTransformer":0,"travelTime":"9:12","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"18:30","sortTime":1560439800,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Ужгород","date":"п'ятниця, 14.06.2019","time":"03:42","sortTime":1560472920},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"244П","category":0,"isTransformer":0,"travelTime":"7:43","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Бердянськ","date":"четвер, 13.06.2019","time":"19:06","sortTime":1560441960,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Івано-Франківськ","date":"п'ятниця, 14.06.2019","time":"02:49","sortTime":1560469740},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"043К","category":0,"isTransformer":0,"travelTime":"7:43","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"19:06","sortTime":1560441960,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Івано-Франківськ","date":"п'ятниця, 14.06.2019","time":"02:49","sortTime":1560469740},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"049К","category":0,"isTransformer":0,"travelTime":"8:26","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"20:12","sortTime":1560445920,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Трускавець","date":"п'ятниця, 14.06.2019","time":"04:38","sortTime":1560476280},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"150О","category":0,"isTransformer":0,"travelTime":"9:56","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Кременчук","date":"четвер, 13.06.2019","time":"20:19","sortTime":1560446340,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Ворохта","date":"п'ятниця, 14.06.2019","time":"06:15","sortTime":1560482100},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"029К","category":0,"isTransformer":0,"travelTime":"6:48","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"21:08","sortTime":1560449280,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Ужгород","date":"п'ятниця, 14.06.2019","time":"03:56","sortTime":1560473760},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"017О","category":0,"isTransformer":0,"travelTime":"6:41","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Харків-Пас","date":"четвер, 13.06.2019","time":"22:09","sortTime":1560452940,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Ужгород","date":"п'ятниця, 14.06.2019","time":"04:50","sortTime":1560477000},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"017К","category":0,"isTransformer":0,"travelTime":"6:41","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Харків-Пас","date":"четвер, 13.06.2019","time":"22:09","sortTime":1560452940,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Ужгород","date":"п'ятниця, 14.06.2019","time":"04:50","sortTime":1560477000},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"007К","category":0,"isTransformer":0,"travelTime":"6:41","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"22:22","sortTime":1560453720,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Івано-Франківськ","date":"п'ятниця, 14.06.2019","time":"05:03","sortTime":1560477780},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"091К","category":0,"isTransformer":0,"travelTime":"7:23","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Київ-Пасажирський","date":"четвер, 13.06.2019","time":"22:37","sortTime":1560454620,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Львів","date":"п'ятниця, 14.06.2019","time":"06:00","sortTime":1560481200},"types":[{"id":"Л","title":"Люкс","letter":"Л","places":9}],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1},
                        {"num":"046Д","category":0,"isTransformer":0,"travelTime":"9:20","from":{"code":"2200001","station":"Київ-Пасажирський","stationTrain":"Лисичанськ","date":"четвер, 13.06.2019","time":"22:47","sortTime":1560455220,"srcDate":"2019-06-13"},"to":{"code":"2218000","station":"Львів","stationTrain":"Ужгород","date":"п'ятниця, 14.06.2019","time":"08:07","sortTime":1560488820},"types":[],"child":{"minDate":"2005-06-14","maxDate":"2019-06-10"},"allowStudent":1,"allowBooking":1,"isCis":0,"isEurope":0,"allowPrivilege":0,"disabledPrivilegeByDate":1}]}});
                } else {
                    send(res, {"data":{"warning":"По заданому Вами напрямку місць немає.","list":[]}});
                }
            });
        } else{
            res.writeHead(405);
            res.end();
        }
    } else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(5000);