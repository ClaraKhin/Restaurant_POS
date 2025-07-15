export const getRandomColor = () => {
    const colors = [
        "#ff6b100", // yellow
        "#2e4a40", // green
        "#664a04", // brown
        "#DC2F2F", // red
        "#4A90E2", // blue
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}

export const getBgColor = () => {
    const bgArr = ["#b73e3e", "#5b45b0", "#7f167f", "#735f32", "#1d2569", "#285430"]
    const randomBg = Math.floor(Math.random() * bgArr.length);
    const color = bgArr[randomBg];
    return color
}