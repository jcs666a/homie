
export const arrayDivider = (arr, chunkLen) => {
    let i, j, temparray,
        newArray = [];
    for(i = 0, j = arr.length; i < j; i += chunkLen) {
        temparray = arr.slice(i, i + chunkLen);
        newArray.push(temparray);
    }

    return newArray;
};

export const priceFormater = price => price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
