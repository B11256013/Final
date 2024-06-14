document.addEventListener('DOMContentLoaded', function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('type');

    if (category) {
        document.getElementById('category-title').innerText = category.toUpperCase() + '美食';
        fetchFoods(category);
    } else {
        document.getElementById('category-title').innerText = '美食类别';
        document.querySelector('.foods').innerHTML = '<p>未找到相关美食。</p>';
    }

    // 添加事件监听器以显示和隐藏下拉菜单
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropdownBtn.addEventListener('mouseenter', function() {
        dropdownContent.style.display = 'block';
    });

    dropdownBtn.addEventListener('mouseleave', function() {
        dropdownContent.style.display = 'none';
    });
});

function fetchFoods(category) {
    // 这里可以根据美食类别获取相应的美食数据，并动态生成美食列表
    // 此处为示例，假设获取美食数据的 API 地址为 /api/foods?type={category}
    fetch(`/api/foods?type=${category}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('网络请求失败！');
            }
            return response.json();
        })
        .then(data => {
            const foodsContainer = document.querySelector('.foods');
            if (data.length === 0) {
                foodsContainer.innerHTML = '<p>暂无相关美食。</p>';
            } else {
                foodsContainer.innerHTML = '';
                data.forEach(food => {
                    const foodElement = document.createElement('div');
                    foodElement.classList.add('food');
                    foodElement.innerHTML = `
                        <h3>${food.name}</h3>
                        <p>${food.description}</p>
                        <p>地址：${food.address}</p>
                        <a href="${food.link}" target="_blank">查看详情</a> <!-- 添加 target="_blank" 以在新窗口中打开链接 -->
                    `;
                    foodsContainer.appendChild(foodElement);
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
