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