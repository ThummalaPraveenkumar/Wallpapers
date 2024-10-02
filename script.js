// Mobile Menu Toggle
const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');
const closeIcon = document.querySelector('.close-icon');

icon.addEventListener('click', () => {
    menu.classList.add('open');
    icon.style.display = 'none';
    closeIcon.style.display = 'block';
});

closeIcon.addEventListener('click', () => {
    menu.classList.remove('open');
    icon.style.display = 'block';
    closeIcon.style.display = 'none';
});

// Wallpaper Preview Functionality



// Download Button (Optional Placeholder)
document.getElementById('download-button').addEventListener('click', () => {
    const previewImage = document.getElementById('preview-image');
    if (previewImage.src) {
        alert('Downloading ' + previewImage.src);
    } else {
        alert('Please select a wallpaper first!');
    }
});

function showWallpaperPreview(imageSrc) {
    const wallpaperPreview = document.getElementById('wallpaperPreview');
    const previewImage = document.getElementById('previewImage');
    const downloadButton = document.getElementById('downloadButton');

    // Set the image source for preview
    previewImage.src = imageSrc;
    downloadButton.href = imageSrc; // Set download link to the image source

    // Display the wallpaper preview
    wallpaperPreview.style.display = 'flex';
}

function closeWallpaperPreview() {
    const wallpaperPreview = document.getElementById('wallpaperPreview');
    wallpaperPreview.style.display = 'none'; // Hide the wallpaper preview
}
