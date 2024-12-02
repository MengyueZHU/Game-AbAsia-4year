// Antibody
let foundAntibody = false;
document.querySelector('.antibody-hotspot').addEventListener('click', function () {
    if (!foundAntibody) {
        foundAntibody = true;
        moveAntibodyIcon();
        checkAllItemsFound();
    }
});

function moveAntibodyIcon() {
    const iconImage = 'images/antibody.png';
    const scaleFactor = 1.2; // 设置抗体图标的缩放比例为 1 倍
    const rotationAngle = 0; // 设置 Package 图标的初始旋转角度
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'antibody-hotspot', 'antibody-box', -1, -1, 0, 0, scaleFactor, rotationAngle);
}

// Ticket
let foundTicket = false;
document.querySelector('.ticket-hotspot').addEventListener('click', function () {
    if (!foundTicket) {
        foundTicket = true;
        moveTicketIcon();
        checkAllItemsFound();
    }
});

function moveTicketIcon() {
    const iconImage = 'images/ticket.png';
    const scaleFactor = 0.85;
    const rotationAngle = 50;
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'ticket-hotspot', 'ticket-box', 0.5, -0.5, 0, 0, scaleFactor, rotationAngle);
}

// Bottle
let foundBottle = false;
document.querySelector('.bottle-hotspot').addEventListener('click', function () {
    if (!foundBottle) {
        foundBottle = true;
        moveBottleIcon();
        checkAllItemsFound();
    }
});

function moveBottleIcon() {
    const iconImage = 'images/bottle.png';
    const scaleFactor = 1.08;
    const rotationAngle = 0;
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'bottle-hotspot', 'bottle-box', 0.1, -0.2, 0, 0, scaleFactor, rotationAngle);
}

// Machine
let foundMachine = false;
document.querySelector('.machine-hotspot').addEventListener('click', function () {
    if (!foundMachine) {
        foundMachine = true;
        moveMachineIcon();
        checkAllItemsFound();
    }
});

function moveMachineIcon() {
    const iconImage = 'images/machine.png';
    const scaleFactor = 1.8;
    const rotationAngle = 0;
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'machine-hotspot', 'machine-box', -5, -4.5, -1, 3, scaleFactor, rotationAngle);
}

// Notebook
let foundNotebook = false;
document.querySelector('.notebook-hotspot').addEventListener('click', function () {
    if (!foundNotebook) {
        foundNotebook = true;
        moveNotebookIcon();
        checkAllItemsFound();
    }
});

function moveNotebookIcon() {
    const iconImage = 'images/notebook.png';
    const scaleFactor = 1.18;
    const rotationAngle = -8;
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'notebook-hotspot', 'notebook-box', 0, 0, 0, 0, scaleFactor, rotationAngle);
}

// Package
let foundPackage = false;
document.querySelector('.package-hotspot').addEventListener('click', function () {
    if (!foundPackage) {
        foundPackage = true;
        movePackageIcon();
        checkAllItemsFound();
    }
});

function movePackageIcon() {
    const iconImage = 'images/package.png';
    const scaleFactor = 1.6;
    const rotationAngle = -2;
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'package-hotspot', 'package-box', -2, -2, 0, 0, scaleFactor, rotationAngle);
}

// PCR
let foundPCR = false;
document.querySelector('.pcr-hotspot').addEventListener('click', function () {
    if (!foundPCR) {
        foundPCR = true;
        movePCRIcon();
        checkAllItemsFound();
    }
});

function movePCRIcon() {
    const iconImage = 'images/pcr.png';
    const scaleFactor = 1.5;
    const rotationAngle = 0;
    const newIcon = createIconElement(iconImage, rotationAngle);
    positionIcon(newIcon, 'pcr-hotspot', 'pcr-box', -5, -3, 0, 0, scaleFactor, rotationAngle);
}

// Helper function to create a new icon element
function createIconElement(iconImage, rotationAngle = 0) {
    const newIcon = document.createElement('img');
    newIcon.src = iconImage;
    newIcon.classList.add('moving');
    newIcon.style.objectFit = 'contain';
    newIcon.style.transform = `rotate(${rotationAngle}deg)`;
    newIcon.style.zIndex = '50'; // 确保图标显示在较高层级
    document.querySelector('.game-container').appendChild(newIcon);
    return newIcon;
}

// Helper function to position the icon based on custom offsets and sizes
function positionIcon(newIcon, hotspotClass, boxId, topOffset, leftOffset, widthOffset, heightOffset, scaleFactor, rotationAngle = 0) {
    const targetBox = document.getElementById(boxId);
    const targetImage = targetBox.querySelector('img');
    const hotspot = document.querySelector(`.${hotspotClass}`);
    const hotspotRect = hotspot.getBoundingClientRect();
    const container = document.querySelector('.game-container');
    const containerRect = container.getBoundingClientRect();

    const topPercent = (hotspotRect.top - containerRect.top) / containerRect.height * 100;
    const leftPercent = (hotspotRect.left - containerRect.left) / containerRect.width * 100;
    const widthPercent = hotspotRect.width / containerRect.width * 100;
    const heightPercent = hotspotRect.height / containerRect.height * 100;

    newIcon.style.position = 'absolute';
    newIcon.style.top = (topPercent + topOffset) + '%';
    newIcon.style.left = (leftPercent + leftOffset) + '%';
    newIcon.style.width = (widthPercent * scaleFactor + widthOffset) + '%';
    newIcon.style.height = (heightPercent * scaleFactor + heightOffset) + '%';
    newIcon.style.transform = `rotate(${rotationAngle}deg)`; // 设置初始旋转角度

    const targetRect = targetImage.getBoundingClientRect();
    const targetTopPercent = (targetRect.top - containerRect.top) / containerRect.height * 100;
    const targetLeftPercent = (targetRect.left - containerRect.left) / containerRect.width * 100;
    const targetWidthPercent = targetRect.width / containerRect.width * 100;
    const targetHeightPercent = targetRect.height / containerRect.height * 100;

    setTimeout(() => {
        newIcon.style.transition = 'all 1.5s ease-in-out';
        newIcon.style.top = targetTopPercent + '%';
        newIcon.style.left = targetLeftPercent + '%';
        newIcon.style.width = targetWidthPercent + '%';
        newIcon.style.height = targetHeightPercent + '%';
        newIcon.style.transform = 'rotate(0deg)'; // 旋转至0度
    }, 100);

    setTimeout(() => {
        targetBox.classList.add('success');
        document.querySelector('.game-container').removeChild(newIcon);
    }, 1600);
}

function checkAllItemsFound() {
    // 检查是否所有物品都已找到的逻辑
    if (foundAntibody && foundTicket && foundBottle && foundMachine && foundNotebook && foundPackage && foundPCR) {
        setTimeout(() => {  // 延迟 2 秒显示弹窗
            Swal.fire({
                title: 'Congratulations!',
                html: '<p>You have completed the Treasure Hunt!</p><p>Fill out the form for an additional lottery chance.</p>',
                icon: 'success',
                showCancelButton: true,  // 显示取消按钮
                confirmButtonText: 'Back to Main Page',  // 主页面按钮文本
                cancelButtonText: 'Fill Out Form',  // 填写表单按钮文本
                customClass: {
                    popup: 'swal-custom-popup',
                    title: 'swal-custom-title',
                    htmlContainer: 'swal-custom-text',
                    confirmButton: 'swal-custom-button',
                    cancelButton: 'swal-custom-button'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    // 跳转到主页面
                    localStorage.setItem("game2Completed", "true"); // 标记游戏二已完成
                    window.location.href = '../mainpage.html'; // 返回主页面
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    // 跳转到邮箱填写表单
                    document.querySelector('.container').style.display = 'none';
                    document.getElementById('form-container').style.display = 'block';
                }
            });
        }, 2000); // 2000 毫秒即 2 秒延迟
    }
}



