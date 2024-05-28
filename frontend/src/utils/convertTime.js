/* eslint-disable no-unused-vars */
const convertTime = (time) => {
    const timeParts = time.split(":");
    let hr=parseInt(timeParts[0]);
    let min=parseInt(timeParts[1]);
    let hours = hr > 12 ? hr - 12 : hr;
    let minutes = min < 10 ? `${min}` : min;
    let period = hr >= 12 ? "PM" : "AM";
    hours = hours === 0 ? 12 : hours;
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return hours.toString().padStart(2)  + ":" + minutes.toString().padStart(2, "0") + " " + period;
}
export default convertTime;