document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('type');

    if (category) {
        document.getElementById('category-title').innerText = category.toUpperCase() + '';
        displayFoodCards(category);
    } else {
        document.getElementById('category-title').innerText = '美食类别';
        document.querySelector('.foods').innerHTML = '<p>未找到相关美食。</p>';
    }

   
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownBtn.addEventListener('mouseenter', function () {
        dropdownContent.style.display = 'block';
    });

    dropdownBtn.addEventListener('mouseleave', function () {
        dropdownContent.style.display = 'none';
    });
});

function displayFoodCards(category) {
    const foodCards = document.querySelectorAll('.food-card');

    foodCards.forEach(card => {
        card.style.display = 'none'; 
    });

    if (category === 'breakfast') {
        document.getElementById('food-1').style.display = 'block';
          
    }
   
    if (category === 'Local dishes') {
        document.getElementById('food-2').style.display = 'block';
           
    }

    if (category === 'coffee') {
        document.getElementById('food-3').style.display = 'block';
          
    }
    
    if (category === 'dinner') {
        document.getElementById('food-4').style.display = 'block';
           
    }
}