export const calculateReadingTime = (content:any) => {
    const wordsPerMinute = 180;
    const numberOfWords = content?.split(/\s/g).length;
    const minutes = numberOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    return readTime;
};