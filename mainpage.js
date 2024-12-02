document.addEventListener("DOMContentLoaded", function () {
    // 检查 localStorage 中的进度
    const game1Completed = localStorage.getItem("game1Completed") === "true";
    const game2Completed = localStorage.getItem("game2Completed") === "true";
    const game3Completed = localStorage.getItem("game3Completed") === "true";
    const game4Completed = localStorage.getItem("game4Completed") === "true";

    // 根据进度解锁按钮
    if (game1Completed) {
        document.getElementById("game2").disabled = false;
        document.getElementById("game2").style.cursor = "pointer";
    }
    if (game2Completed) {
        document.getElementById("game3").disabled = false;
        document.getElementById("game3").style.cursor = "pointer";
    }
    if (game3Completed) {
        document.getElementById("game4").disabled = false;
        document.getElementById("game4").style.cursor = "pointer";
    }
    if (game4Completed) {
        Swal.fire({
            title: 'Congratulations!',
            text: 'You have completed all games!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});

function startGame(level) {
    switch (level) {
        case 1:
            window.location.href = "AbAsia101/abasia101.html";
            break;
        case 2:
            window.location.href = "TreasureHunt/treasurehunt.html";
            break;
        case 3:
            window.location.href = "WordSearch/wordsearch.html";
            break;
        case 4:
            window.location.href = "CrossWord/crossword.html";
            break;
    }
}