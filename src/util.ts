export const clamp = (num: number, min: number, max: number) => {
    //return num <= min ? min : num >= max ? max : num;
    return Math.min(Math.max(num, min), max);
}