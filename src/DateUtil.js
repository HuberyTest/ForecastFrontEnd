const WeekName = ["Monday","Tuseday","Wednesday","Thursday","Friday","Saturday","Sunday"];
function formatTime(uts) {
    let d = new Date(uts * 1000);
    return WeekName[d.getDay() - 1] + " " + pad(d.getHours(), 2) + ":" + pad(d.getMinutes(), 2) + " " + (d.getHours() < 12 ? 'AM' : 'PM');
}

function pad(num, n) {
    return Array(n>num?(n-(''+num).length+1):0).join(0)+num;
}
export default formatTime;