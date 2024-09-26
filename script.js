document.getElementById('wannaTry').addEventListener('click', function() {
    createImageWithText("Aap cutee hooo");
  });
  
  document.getElementById('ignoring').addEventListener('click', function() {
    createImageWithText("Aap still cutee ho");
  });
  
  function createImageWithText(textContent) {
    const structure = document.getElementById('structure');
    structure.innerHTML = ''; // Clear existing content
  
    // Create the image element
    const img = document.createElement('img');
    img.src = '/mnt/data/image.png'; // Link to the uploaded image
    img.id = 'image';
  
    // Create the text element
    const text = document.createElement('div');
    text.id = 'text';
    text.textContent = textContent;
  
    // Append the image and text to the structure
    structure.appendChild(img);
    structure.appendChild(text);
  
    // Trigger the text animation after a short delay
    setTimeout(() => {
      text.classList.add('text-show');
    }, 500);
  }
  