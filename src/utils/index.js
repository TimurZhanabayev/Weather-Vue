export const captializeFirstLetter = (str) => {
    if (!str) return '';

    return str[0].toUpperCase() + str.slice(1);
}

export const getTime = (seconds) => { 
    return new Date(seconds * 1000).toLocaleTimeString('ru-RU', {timeZone: 'Atlantic/Reykjavik'});
}