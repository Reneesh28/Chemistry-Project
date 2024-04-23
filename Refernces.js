document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.category-button');
    const references = document.querySelectorAll('.reference-list');    
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', function() {
        const category = this.dataset.category;
        references.forEach(referenceList => {
          if (referenceList.id === category) {
            referenceList.style.display = 'block';  
          } else {
            referenceList.style.display = 'none';
          }
        });
      });
    });
});