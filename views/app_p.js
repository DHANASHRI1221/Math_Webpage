
// function previewImage() {
//     const input = document.getElementById('imp').querySelector('input[type="file"]');
//     const preview = document.getElementById('preview-image');
//     const file = input.files[0];

    

//     if (file) {
//         const reader = new FileReader();

//         reader.onload = function (e) {
//             // Remove the existing image
//             preview.innerHTML = '';
            
//             // Create a new image element
//             const newImage = document.createElement('img');
//             newImage.src = e.target.result;
//             newImage.alt = 'Profile Image';
//             newImage.style.width = '100%';
//             newImage.style.height = '100%';

//             // Append the new image to the preview div
//             preview.appendChild(newImage);
//         };

//         reader.readAsDataURL(file);
//     }
// }


// function createProfile() {
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const location = document.getElementById('location').value;
//     const about = document.getElementById('about').value;

//     // Display the profile information in the container
//     document.querySelector('.profile-name').textContent = name;
//     document.getElementById('preview-image').innerHTML = `<img src="profile-picture.jpg" alt="Profile Picture">`;

//     // Additional logic to store or display the user's profile information as needed
// }

// app2.js

function previewImage() {
    var preview = document.getElementById('preview-image');
    var fileInput = document.querySelector('input[type="file"]');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.innerHTML = ''; // Clear previous content
            var img = document.createElement('img');
            img.src = e.target.result;
            img.height = 200;
            img.width = 200;
            preview.appendChild(img);
        };

        reader.readAsDataURL(file);
    }
}

function createProfile() {
    // Add any additional functionality for creating a profile if needed
    console.log("Profile created!");
}
