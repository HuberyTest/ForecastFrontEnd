const WeekName = ["Monday","Tuseday","Wednesday","Thursday","Friday","Saturday","Sunday"];
function formatTime(uts) {
    let d = new Date(uts * 1000);
    return WeekName[d.getDay() - 1] + " " + d.getHours() + ":" + d.getMinutes() + " " + (d.getHours() < 12 ? 'AM' : 'PM');
}

export default formatTime;