// 100+ 条无用建议
const suggestions = [
  "重启试试。", "拔掉电源再插上。", "换个浏览器。", "清空缓存。", "更新到最新版本。",
  "重装系统。", "换个鼠标试试。", "拍打一下设备。", "等它自己好。", "换个插座。",
  "检查网线有没有插紧。", "多按几次回车。", "等明天再试。", "换个账号登录。", "重启路由器。",
  "把屏幕擦干净。", "换个字体大小。", "调整一下屏幕亮度。", "等系统自动修复。", "换个时间段操作。",
  "多喝热水。", "早点睡觉。", "别想太多。", "顺其自然。", "深呼吸三次。",
  "出去走走。", "听点音乐。", "吃点甜的。", "洗个热水澡。", "告诉自己问题不大。",
  "数到十再决定。", "等心情好了再说。", "换个环境。", "做点别的事情分散注意力。", "告诉自己你是最棒的。",
  "对着镜子笑一笑。", "喝杯牛奶。", "做几个深蹲。", "整理一下房间。", "看看窗外。",
  "数一数天上的云。", "给植物浇浇水。", "做几个伸展运动。", "泡杯茶慢慢喝。", "找个舒服的姿势。",
  "把烦恼写下来然后扔掉。", "拥抱一下自己。", "唱首歌。", "跳个舞。", "看看老照片。",
  "明天再做。", "先玩一会。", "问问别人。", "上网搜一下。", "换个思路。",
  "从简单的开始。", "先休息十分钟。", "列个清单。", "换个座位。", "喝杯咖啡。",
  "吃点零食。", "把手机放远点。", "定个闹钟。", "奖励自己一下。", "换个笔试试。",
  "整理一下桌面。", "换个应用。", "先做别的科目。", "等灵感来了再说。", "相信你的直觉。",
  "微笑面对。", "装作没听见。", "转移话题。", "先道歉。", "送个小礼物。",
  "写张纸条。", "发个表情包。", "点个赞。", "等对方冷静。", "找个中间人。",
  "请吃顿饭。", "发个红包。", "夸夸对方。", "保持沉默。", "换个时间再谈。",
  "多喝温水。", "早点起床。", "按时吃饭。", "别熬夜。", "保持好心情.",
  "适当运动。", "多吃蔬菜。", "少玩手机。", "晒晒太阳。", "挺直腰板。",
  "眨眨眼睛。", "转转脖子。", "按摩头皮。", "泡个脚。", "相信明天会更好。"
];

// 获取 DOM 元素
const suggestBtn = document.getElementById('suggestBtn');
const overlay = document.getElementById('overlay');
const suggestionText = document.getElementById('suggestionText');

// 点击按钮：显示随机建议卡片
suggestBtn.addEventListener('click', () => {
  const randomSuggestion = suggestions[Math.floor(Math.random() * suggestions.length)];
  suggestionText.textContent = randomSuggestion;
  overlay.classList.add('active');
  document.body.classList.add('no-scroll');
  suggestBtn.style.display = 'none'; // 隐藏按钮
});

// 点击遮罩（非卡片区域）：关闭卡片
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    suggestBtn.style.display = 'block'; // 显示按钮
  }
});

// 点击卡片内部：不关闭（防误触）
suggestionText.addEventListener('click', (e) => {
  e.stopPropagation(); // 阻止事件冒泡到遮罩层
});