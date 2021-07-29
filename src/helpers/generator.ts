export function generateRandomNumber(min: number, max: number){
    return Math.floor((Math.random() * (max-min)) + min);
}

export function generateArray(maxNumber: number, minNumber: number, length: number) {
    const array =  new Array<number>(length).fill(1).map(place=>{
      return generateRandomNumber(maxNumber, minNumber);
    });
    return array;
}