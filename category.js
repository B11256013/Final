document.addEventListener('DOMContentLoaded', function () {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('type');

    if (category) {
        document.getElementById('category-title').innerText = category.toUpperCase() + '美食';
        displayFoodCards(category);
    } else {
        document.getElementById('category-title').innerText = '美食类别';
        document.querySelector('.foods').innerHTML = '<p>未找到相关美食。</p>';
    }

    // 添加事件监听器以显示和隐藏下拉菜单
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
        card.style.display = 'none'; // 默认隐藏所有卡片
    });

    if (category === 'breakfast') {
        document.getElementById('food-1').style.display = 'block';
        document.getElementById('food-2').style.display = 'block';
        // 添加其他与该类别匹配的卡片
    }
    // 可以为其他类别添加更多条件
}