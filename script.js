// script.js - 放在根目录
document.addEventListener('DOMContentLoaded', function () {
    const adviceButton = document.getElementById('adviceButton');
    const adviceDisplay = document.getElementById('adviceDisplay');

    // 无用建议列表
    const adviceList = [
        "重启试试",
        "按F5刷新",
        "换个浏览器",
        "检查网络连接",
        "不要按这个按钮",
        "你已经很努力了",
        "再试一次",
        "休息一下",
        "不要着急",
        "慢慢来"
    ];

    // 获取随机建议
    function getRandomAdvice() {
        return adviceList[Math.floor(Math.random() * adviceList.length)];
    }

    // 点击按钮时显示建议
    adviceButton.addEventListener('click', function () {
        adviceDisplay.textContent = getRandomAdvice();
    });

    // 为导航链接添加功能（可选）
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            // 这里可以添加导航逻辑
            alert('导航到: ' + this.textContent);
        });
    });
});