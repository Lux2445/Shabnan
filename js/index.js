// var slideIndex = 1

// function currentSlide(n) {
//     showSlide(slideIndex = n)
// }

// function nextSlide(n) {
//     showSlide(slideIndex += n)
// }

// function showSlide(n) {
//     const dots = document.querySelectorAll('.dot');
//     const slides = document.querySelectorAll('.mySlide');

//     if (n < 1) {
//         slideIndex = slides.length;
//     }

//     if (n > slides.length) {
//         slideIndex = 1;
//     }

//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; // Скрываем все слайды
//     }

//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove("active"); // Убираем класс active с точек
//     }

//     slides[slideIndex - 1].style.display = 'block'; // Отображаем текущий слайд
//     slides[slideIndex - 1].classList.add("fade"); // Добавляем эффект плавного перехода
//     dots[slideIndex - 1].classList.add('active'); // Выделяем текущую точку

// }


// document.querySelector('.prev').addEventListener('click', function() {
//     nextSlide(-1);
// })

// document.querySelector('.next').addEventListener('click', function() {
//     nextSlide(1);
// })


// const dots = document.querySelectorAll('.dot');
// dots.forEach(function(dot,index) {
//     dot.addEventListener('click', function() {
//         currentSlide(index + 1);
//     });
// })

// showSlide(slideIndex);

// const array = [1,2,3]
// const array1 = [2,3,4]

// const array2 = [...array, ...array1]


// function sum(a,b, ...elements) {
//     return a + b + elements.reduce((acumulator, currentValue) => acumulator + currentValue,0)
// }

// sum(2,3,...array)