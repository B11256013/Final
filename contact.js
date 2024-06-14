// contact.js

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    // 获取表单数据
    const formData = new FormData(this);

    // 发送表单数据到服务器（这里是个示例）
    fetch('https://example.com/submit', {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('表单提交成功！');
            // 清空表单
            document.getElementById('contact-form').reset();
        } else {
            throw new Error('表单提交失败。');
        }
    })
    .catch(error => {
        alert(error.message);
    });
});
