export function formatDate(dateObj,format){
    var date = dateObj.getDate();
    var month = dateObj.getMonth() + 1;
    var year = dateObj.getFullYear();
    month = String(month).length === 1 ? ("0"+month) : month;
    if(format === 1){
        return date+"-"+month+"-"+year
    }
}