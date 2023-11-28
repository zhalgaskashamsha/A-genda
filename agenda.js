const lessonLine = document.getElementById('lessonline');
const floatPopUp = document.getElementById('float');
const closeBtn = document.getElementById('close-btn');

lessonLine.addEventListener('click', () => {
    floatPopUp.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    floatPopUp.classList.remove('active');
})






//Current day display in intro section
function getCurrentDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = String(now.getFullYear()).slice(-2); // Get the last 2 digits of the year

    const formattedDate = `${day}.${month}.${year}`;
    return formattedDate;
}

const currentDateElement = document.getElementById("currentDate");
currentDateElement.textContent = getCurrentDate();
//






