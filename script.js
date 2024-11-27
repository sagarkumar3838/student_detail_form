

document.getElementById('addInputBtn').addEventListener('click', function() {
    const inputContainer = document.getElementById('inputContainer');

    // Create a new input group
    const newInputGroup = document.createElement('div');
    newInputGroup.className = 'input-group  flex items-center mb-4';

    // Create new input fields for student details
    const newNameInput = document.createElement('input');
    newNameInput.type = 'text';
    newNameInput.name = 'studentName[]';
    newNameInput.placeholder = 'Student Name';
    newNameInput.required = true;
    newNameInput.className = 'border border-gray-300 rounded p-2 mr-2 flex-1'
  

    const newAgeInput = document.createElement('input');
    newAgeInput.type = 'number';
    newAgeInput.name = 'studentAge[]';
    newAgeInput.placeholder = 'Age';
    newAgeInput.required = true;
    newAgeInput.className = 'border border-gray-300 rounded p-2 mr-2 w-20'
 

    const newEmailInput = document.createElement('input');
    newEmailInput.type = 'email';
    newEmailInput.name = 'studentEmail[]';
    newEmailInput.placeholder = 'Email';
    newEmailInput.required = true;
    newEmailInput.className = 'border border-gray-300 rounded p-2 mr-2 flex-1'
  

    const newImageInput = document.createElement('input');
    newImageInput.type = 'file';
    newImageInput.name = 'studentImage[]';
    newImageInput.accept = 'image/*';
    newImageInput.required = true;
    newImageInput.className = 'border border-gray-300 rounded p-2 mr-2'
   

    // Create a remove button
    const removeBtn = document.createElement('button');
    removeBtn.type = 'button';
    removeBtn.className = 'remove-btn bg-red-500 text-white rounded px-4 py-2'
  
    removeBtn.textContent = 'Remove';

    // Append the inputs and button to the new input group
    newInputGroup.appendChild(newNameInput);
    newInputGroup.appendChild(newAgeInput);
    newInputGroup.appendChild(newEmailInput);
    newInputGroup.appendChild(newImageInput);
    newInputGroup.appendChild(removeBtn);

    // Append the new input group to the container
    inputContainer.appendChild(newInputGroup);

    // Add event listener to the remove button
    removeBtn.addEventListener('click', function() {
        inputContainer.removeChild(newInputGroup);
    });
});

// Handle form submission
document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const names = document.getElementsByName('studentName[]');
    const ages = document.getElementsByName('studentAge[]');
    
    const emails = document.getElementsByName('studentEmail[]');
    const images = document.getElementsByName('studentImage[]');

    const tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    tableBody.className = 'max-w-5xl mx-auto table-auto border-b-2 border-gray-300 bg-gray-200 px-14  py-7 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 justify-between'

    // Clear previous table data
    // tableBody.innerHTML = '';

    // Loop through the input fields and add the data to the table
    for (let i = 0; i < names.length; i++) {
        // Validate inputs
        if (!names[i].value || !ages[i].value || !emails[i].value || !images[i].files[0]) {
            alert('Please fill in all fields and upload an image for each student.');
            return; // Stop submission if validation fails
        }

        const newRow = tableBody.insertRow();
        const nameCell = newRow.insertCell(0);
        nameCell.className = 'px-5 py-3  text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 '
        const ageCell = newRow.insertCell(1);
        ageCell.className = 'px-14 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500 ml-8'
        const emailCell = newRow.insertCell(2);
        emailCell.className = 'px-14 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'
        const imageCell = newRow.insertCell(3);
        imageCell.className = 'px-14 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500'

        nameCell.textContent = names[i].value;
        ageCell.textContent = ages[i].value;
        emailCell.textContent = emails[i].value;

        nameCell.className = ''

        // Create an image element for the uploaded image
        const img = document.createElement('img');
        img.src = URL.createObjectURL(images[i].files[0]); // Create a URL for the uploaded file
        img.alt = 'Student Image';

        // Apply Tailwind CSS classes
        img.className = ' mt-2 h-10 w-10 rounded-full object-cover ';
        
        

        imageCell.appendChild(img);
    }





    // Function to add a new row
    function addRow(avatar, name, age, email) {
        const newRow = tableBody.insertRow(); // Create a new row

        // Create and style the cells
        const avatarCell = newRow.insertCell(0);
        avatarCell.className = "px-16 py-2 flex flex-row items-center"; // Apply Tailwind CSS classes
        const img = document.createElement('img');
        img.className = "h-8 w-8 rounded-full object-cover"; // Apply Tailwind CSS classes
        img.src = avatar;
        img.alt = name;
        avatarCell.appendChild(img);

        const nameCell = newRow.insertCell(1);
        nameCell.className = "text-center ml-2 font-semibold"; // Apply Tailwind CSS classes
        nameCell.textContent = name;

        const ageCell = newRow.insertCell(2);
        ageCell.className = "px-16 py-2"; // Apply Tailwind CSS classes
        ageCell.textContent = age;

        const emailCell = newRow.insertCell(3);
        emailCell.className = "px-16 py-2"; // Apply Tailwind CSS classes
        emailCell.textContent = email;

        const imageCell = newRow.insertCell(4);
        imageCell.className = "px-16 py-2"; // Apply Tailwind CSS classes
        imageCell.appendChild(img); // Append the image to the image cell
    }



    // Clear the input fields
    document.getElementById('studentForm').reset();

    // Show a confirmation message
    alert('Student details submitted successfully!');
});


// particlejs code


window.onload = function() {
    Particles.init({
        selector: '.background',
        maxParticles: 300,
        connectParticles: false,
        color: '#99BC85',
        sizeVariation: 3,
        responsive: [
            {
                breakpoint: 768,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                    color:'#FFC196'
                }
            },
            {
                breakpoint: 1000,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                    color:'003161'
                }
            },
            {
                breakpoint: 1224,
                options: {
                    maxParticles: 100,
                    connectParticles: true,
                    color:['000B58','006A67','003161']
                }
            },
        ]
    });

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const canvas = document.querySelector('.background');
    const ctx = canvas.getContext('2d');

    // Function to draw letters
    function drawLetters() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < letters.length; i++) {
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            ctx.font = '30px Arial';
            ctx.fillStyle = '#DA0463';
            ctx.fillText(letters[i], x, y);
        }
    }

    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Draw letters every second
    setInterval(drawLetters, 1000);
};
