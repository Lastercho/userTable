export const dateTimeUtils = (date) =>{

    const dateold =  new Date(date)
    const datenew = dateold.toLocaleString(`en-US`, {year: 'numeric', month:'short', day: 'numeric'});
    return datenew;
}




