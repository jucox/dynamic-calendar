const currentDate = document.querySelector('.current-date');
const daysTag = document.querySelector('.days');
const icons = document.querySelectorAll('.icons i')

let date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Agoust',
    'September',
    'October',
    'November',
    'December'
]

const renderCalendar = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let lastDayOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
    let liTag = '';
    
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTag += `<li class="inactive">${lastDayOfLastMonth - i + 1}</li>`;
    }
    
    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? 'active' : '';

        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) {
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }

    currentDate.innerText = `${months[currentMonth]} ${currentYear}`;
    daysTag.innerHTML = liTag;
}

renderCalendar();

icons.forEach(icon => {
    icon.addEventListener('click', () => {
        currentMonth = icon.id === 'prev' ? currentMonth - 1 : currentMonth + 1;

        if (currentMonth < 0 || currentMonth > 11) {
            date = new Date(currentYear, currentMonth);
            currentYear = date.getFullYear();
            currentMonth = date.getMonth();
        } else {
            date = new Date()
        }

        renderCalendar();
    });
});