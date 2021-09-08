const formatTime = (dateStr) =>{
    const time = dateStr.split("T")[1].split(".")[0].slice(0,5)
    return time;
 }
 export default formatTime;