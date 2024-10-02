// Function to show live preview of the selected wallpaper
function showPreview(wallpaper) {
    const previewImage = document.getElementById('preview-image');
    const previewVideo = document.getElementById('preview-video');
    const downloadButton = document.getElementById('download-button');
    
    // Hide video and image by default
    previewImage.style.display = 'none';
    previewVideo.style.display = 'none';
    downloadButton.style.display = 'none'; // Hide download button initially

    // Display the correct media type and enable the download button
    if (wallpaper.image.endsWith('.mp4')) {
        previewVideo.src = wallpaper.image;
        previewVideo.style.display = 'block';
        downloadButton.style.display = 'block';
        downloadButton.onclick = () => downloadFile(wallpaper.image, 'video/mp4');
    } else {
        previewImage.src = wallpaper.image;
        previewImage.style.display = 'block';
        downloadButton.style.display = 'block';
        downloadButton.onclick = () => downloadFile(wallpaper.image, 'image/jpeg');
    }
}

//
