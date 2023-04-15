const getCroppedImageURL = (
    url: string,
    dimension1: number,
    dimension2: number
) => {
    const index = url.indexOf("media/") + "media/".length;
    return (
        url.slice(0, index) +
        "crop/" +
        dimension1 +
        "/" +
        dimension2 +
        "/" +
        url.slice(index)
    );
};

export default getCroppedImageURL;
