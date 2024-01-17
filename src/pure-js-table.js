//сделать таблицу на чистом js чтобы при клике на ячейку она подсвечивалась, либо подстветка снималась если она есть:

const table = document.getElementById("table");

table.onclick = function (event) {
    let target = event.target;
    target.style.backgroundColor =
        target.style.backgroundColor === "" ? "red" : "";
};

//html для задачи:
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>JavaScript Sandbox</title>
//     <meta charset="UTF-8" />
//     <link rel="stylesheet" href="styles.css">
//   </head>

//   <body>
//     <div id="app"></div>
//         <table id="table">
//           <tr>
//             <th colspan="3">Квадрат 
//             </th>
//           </tr>
//           <tr>
//             <td>1</td>
//             <td>2</td>
//             <td>3</td>
//           </tr>
//           <tr>
//             <td>4</td>
//             <td>5</td>
//             <td>6</td>
//           </tr>
//           <tr>
//             <td>7</td>
//             <td>8</td>
//             <td>9</td>
//           </tr>
//         </table>
//     <script src="./index.js" type="module"></script>
//   </body>
// </html>