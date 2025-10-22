// 预设一批“无用建议”（可自行扩充）
const adviceList = [
    "如果觉得累了，建议休息一下",
    "解决失眠的好方法：不失眠",
    "想减肥？可以试试少吃点",
    "忘记带钥匙时，记得下次带上",
    "多喝水，尤其是渴的时候",
    "考试想考高分？建议多考几分",
    "手机没电了？可以充电",
    "找不到东西时，试着找找看"
];
// 获取元素
const adviceBtn = document.getElementById('adviceBtn');
const adviceBox = document.getElementById('adviceBox');
const adviceText = document.getElementById('adviceText');
const clickSound = document.getElementById('clickSound');
const notifySound = document.getElementById('notifySound');

// 按钮点击事件
adviceBtn.addEventListener('click', handleClick);

// 键盘事件（支持空格/回车触发）
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault(); // 阻止空格默认滚动行为
        handleClick();
    }
});
function handleClick() {
    // 1. 播放点击音效
    clickSound.currentTime = 0; // 重置音效（避免重复点击音效叠加）
    clickSound.play();

    // 2. 随机获取一条建议
    const randomIndex = Math.floor(Math.random() * adviceList.length);
    adviceText.textContent = adviceList[randomIndex];

    // 3. 显示建议框（淡入）+ 播放提示音效
    setTimeout(() => { // 稍等点击音效播放后再显示建议
        adviceBox.style.opacity = '1';
        adviceBox.style.pointerEvents = 'auto'; // 允许点击背景（可选）
        notifySound.currentTime = 0;
        notifySound.play();
    }, 300);

    // 4. 5秒后隐藏建议框（淡出），回到初始状态
    setTimeout(() => {
        adviceBox.style.opacity = '0';
        adviceBox.style.pointerEvents = 'none';
    }, 5000);
}