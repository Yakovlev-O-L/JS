import './style.scss'
// Задание 1 Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
// let name = prompt('Введите свое имя')
// console.log('Привет,', name,'!')

// Задание 2 Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат.
//            Текущий год укажите в коде как константу.
const thisYear = 2024
let YearOfBorn = 1981
let yearsOld = thisYear-YearOfBorn
console.log('Вам', yearsOld, 'лет (года).')

// Задание 3 Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let sideOfSquare = 6
console.log('Периметр квадрата', sideOfSquare*4)

// Задание 4 Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const pi = 3.14
let r = 8
console.log(pi*r*r)

// Задание 5 Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
//            Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distance = 80
let time = 2
console.log(distance/time)

// Прпактика 3.1 Вывести # столько раз, сколько указал пользователь.
let count = 8
while (count > 0){
  count--
  console.log('#,')
}

// Практика 3.2 Пользователь ввел число, а на экран вывелись все числа от введенного до 0
let num = 9
while (num > 0){
  console.log(num)
  num--
}

// Практика 3.3 Запросить число и степень. Возвести число в указанную степень и вывести результат.
let number = 2
let degree = 4
let result = 1
while (degree >= 2){
  result = result*number
  degree--
}
console.log(result)

// Практика 3.4 Запросить 2 числа и найти все общие делители.
let num1 = 10
let num2 = 5
let min = 0
let dividers = ' '
num1>num2?min=num2:min=num1
while(min > 0){
  if (num1 % 2 == 1 && num2 % 2 == 1){
    dividers += min + '_'
  }
  min--

}


// Практика 3.5 Посчитать факториал введенного пользователем числа.
let n = 5
result = 1
while (n>0){
  result*=n
  n--
}
console.log(result)