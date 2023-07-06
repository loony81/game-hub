const getCroppedImageUrl = (url: string) => {
    if(!url) return ''
    const media = 'media/'
    
    const firstPart = url.slice(0, url.indexOf(media)+ media.length)
    const lastPart = url.slice(firstPart.length)
    return firstPart + 'crop/600/400/' + lastPart
}

export default getCroppedImageUrl