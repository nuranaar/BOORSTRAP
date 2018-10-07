var adate = new Date(2018, 8, 8, 14, 30);
var ndate = new Date();
function hd(hour) {
    hour = Math.ceil((ndate.getTime() - adate.getTime()) / 3600000);
    if (hour < 24) {
        return hour + " " + "saat evvel";
    }
    else if (hour < (7 * 24)) {
        return "Bu hefte";
    }
    else if (hour < (4 * 7 * 24)) {
        return hour = Math.ceil(hour / (7 * 24)) + " " + "hefte evvel";
    }
    else {
        return adate;
    }

    return hour;

}
console.log(hd());

