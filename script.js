let amount = 100;
let monday = [
    ['Write a tutorial', 180],
    ['Some web development', 120]
];
let tuesday = [
    ['Keep writing that tutorial', 240],
    ['Some more web development', 360],
    ['A whole lot of nothing', 240]
];
// Для элементов массивов monday и tuesday необходимо выполнить следующие методы:

// Сконвертировать время потраченное на выполнение задач в часы, вместо минут.
// Оставить только те задачи, на выполнение которых нужно более 2 - х часов.
// Умножить результат на часовую ставку(amount) и добавить полученное значение в качестве третъего элемента в массив.
// Вывести в html таблицу, которая состоит из ячеек с задачами в виде:
// <tr>
//     <td>Task name: Write a tutorial</td>
//     <td>Taks duration: 3 hours</td>
//     <td>Task amount: $300</td>
// </tr>
// Используем только методы concat / forEach / map / filter / join(по надобности, все не нужно).

function minutes(arr) {
    arr.forEach(function (num) {
        num[1] = num[1] / 60
    });
}

minutes(monday);

minutes(tuesday);

function hours(arr) {
    arr = arr.filter(function (num) {
        return num[1] > 2
    });
    return arr;
}

monday = hours(monday);

tuesday = hours(tuesday);

function multiplication(arr) {
    arr = arr.filter(function (num) {
        return num[2] = num[1] * amount
    });
    return arr;
}

monday = multiplication(monday);

tuesday = multiplication(tuesday);

let mass = monday.concat(tuesday);

mass = mass.map(function (num) {
    return num = `
   <tr>
   <td>Task name: ${num[0]}</td>
   <td>Taks duration: ${num[1]} hours</td>
   <td>Task amount: $${num[2]}</td>
   </tr>
`
});

document.write(`
<table>
${mass.join("")}
</table>`
);