//шленова лепилова 821

// 464 1
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     let p = document.createElement('p');
//     p.textContent = elem;
//     p.addEventListener('click', function() {
//         let currentValue = parseInt(p.textContent);
//         p.textContent = currentValue + 1;
//     });
//     parent.appendChild(p);
// }

// 465 1
// let arr = [1, 2, 3, 4, 5];
// let ul = document.getElementById('elem');

// arr.forEach(elem => {
//   let li = document.createElement('li');
//   li.textContent = elem;
//   ul.appendChild(li);
// });

// 465 2
// let arr = [1, 2, 3, 4, 5];
// let ul = document.getElementById('elem');
// arr.forEach(elem => {
//   let li = document.createElement('li');
//   li.textContent = elem;
//   li.addEventListener('click', function() {
//     alert(elem);
//   });
//   ul.appendChild(li);
// });

// 465 3
// let arr = [1, 2, 3, 4, 5];
// let ul = document.getElementById('elem');
// arr.forEach(elem => {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener('click', function() {
//         li.textContent += '!';
//     });
//     ul.appendChild(li);
// });

// 465 4
// let arr = [1, 2, 3, 4, 5];
// let ul = document.getElementById('elem');
// arr.forEach(elem => {
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener('click', function() {
//         if (!li.textContent.endsWith('!')) {
//         li.textContent += '!';
//         }
//     });
//     ul.appendChild(li);
// });

// 466 1 /////////////////////////////////////////////////
// let table = document.getElementById('table');
// for (let i = 0; i < 5; i++) {
//     let row = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let cell = document.createElement('td');
//         cell.textContent = Row ${i + 1}, Column ${j + 1};
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }

// 466 2
// let table = document.getElementById('table');
// for (let i = 0; i < 10; i++) {
//     let row = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let cell = document.createElement('td');
//         cell.textContent = Row ${i + 1}, Column ${j + 1};
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }
////////////////////////////////////////////////////////////

// 466 3
// let table = document.getElementById('table');
// for (let i = 0; i < 10; i++) {
//     let row = document.createElement('tr');
//     for (let j = 0; j < 5; j++) {
//         let cell = document.createElement('td');
//         cell.textContent = 'x';
//         row.appendChild(cell);
//     }
//     table.appendChild(row);
// }

// 466 4
// function generateTable() {
//     let width = document.getElementById('widthInput').value;
//     let height = document.getElementById('heightInput').value;
//     let table = document.getElementById('table');
//     table.innerHTML = '';
//     for (let i = 0; i < height; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < width; j++) {
//             let cell = document.createElement('td');
//             cell.textContent = 'x';
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
// }

// 467 1
// function generateTable() {
//     let width = document.getElementById('widthInput').value;
//     let height = document.getElementById('heightInput').value;
//     let table = document.getElementById('table');
//     table.innerHTML = '';
//     let count = 1;
//     for (let i = 0; i < height; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < width; j++) {
//             let cell = document.createElement('td');
//             cell.textContent = count;
//             count++;
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
// }

// 467 2
// function generateTable() {
//     let width = document.getElementById('widthInput').value;
//     let height = document.getElementById('heightInput').value;
//     let table = document.getElementById('table');
//     table.innerHTML = '';
//     let count = 2;
//     for (let i = 0; i < height; i++) {
//         let row = document.createElement('tr');
//         for (let j = 0; j < width; j++) {
//             let cell = document.createElement('td');
//             cell.textContent = count;
//             count += 2;
//             row.appendChild(cell);
//         }
//         table.appendChild(row);
//     }
// }

// 468 1
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.getElementById('arrayTable');
// for (let i = 0; i < arr.length; i++) {
//     let row = table.insertRow();
//     for (let j = 0; j < arr[i].length; j++) {
//         let cell = row.insertCell();
//         cell.textContent = arr[i][j];
//     }
// }

// 468 2
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.getElementById('arrayTable');
// for (let i = 0; i < arr.length; i++) {
//     let row = table.insertRow();
//     for (let j = 0; j < arr[i].length; j++) {
//         let cell = row.insertCell();
//         cell.textContent = arr[i][j] * arr[i][j];
//     }
// }

// 469 1
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('employeesTable');
// let header = table.createTHead();
// let headerRow = header.insertRow();
// for (let key in employees[0]) {
//     let headerCell = headerRow.insertCell();
//     headerCell.textContent = key;
// }
// for (let i = 0; i < employees.length; i++) {
//     let row = table.insertRow();
//     for (let key in employees[i]) {
//         let cell = row.insertCell();
//         cell.textContent = employees[i][key];
//     }
// }

// 469 2
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('employeesTable');
// let header = table.createTHead();
// let headerRow = header.insertRow();
// for (let key in employees[0]) {
//     let headerCell = headerRow.insertCell();
//     headerCell.textContent = key;
// }
// for (let i = 0; i < employees.length; i++) {
//     let row = table.insertRow();
//     for (let key in employees[i]) {
//         let cell = row.insertCell();
//         cell.textContent = employees[i][key];
//         if (key === 'age') { // если ячейка содержит возраст
//             cell.setAttribute('data-age', employees[i][key]); // добавляем атрибут data-age со значением возраста
//             cell.addEventListener('click', function() { // добавляем обработчик события клика
//                 let currentAge = parseInt(this.getAttribute('data-age')); // получаем текущее значение возраста из атрибута
//                 this.textContent = currentAge + 1; // увеличиваем значение возраста на 1 и обновляем содержимое ячейки
//                 this.setAttribute('data-age', currentAge + 1); // обновляем значение атрибута data-age
//             });
//         }
//     }
// }

// 469 3
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('employeesTable');
// let header = table.createTHead();
// let headerRow = header.insertRow();
// for (let key in employees[0]) {
//     let headerCell = headerRow.insertCell();
//     headerCell.textContent = key;
// }
// for (let i = 0; i < employees.length; i++) {
//     let row = table.insertRow();
//     for (let key in employees[i]) {
//         let cell = row.insertCell();
//         cell.textContent = employees[i][key];
//         if (key === 'age') {
//             cell.setAttribute('data-age', employees[i][key]);
//             cell.addEventListener('click', function() {
//                 let currentAge = parseInt(this.getAttribute('data-age'));
//                 this.textContent = currentAge + 1;
//                 this.setAttribute('data-age', currentAge + 1);
//             });
//         }
//         if (key === 'salary') {
//             cell.setAttribute('data-salary', employees[i][key]);
//             cell.addEventListener('click', function() {
//                 let currentSalary = parseInt(this.getAttribute('data-salary'));
//                 this.textContent = currentSalary + (currentSalary * 0.1);
//                 this.setAttribute('data-salary', currentSalary + (currentSalary * 0.1));
//             });
//         }
//     }
// }

// 470 1
// let table = document.getElementById('table');
// document.getElementById('addRow').addEventListener('click', function() {
//     let tr = document.createElement('tr');
//     for (let i = 1; i <= 3; i++) {
//         let td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     table.appendChild(tr);
// });

// 470 2 ////////////////////////////////////////////////////////////////////////
// let table = document.getElementById('table');
// document.getElementById('addRow').addEventListener('click', function() {
//     let tr = table.getElementsByTagName('tr');
//     for (let i = 0; i < tr.length; i++) {
//         let td = document.createElement('td');
//         tr[i].appendChild(td);
//     }
//     if (tr.length === 1) {
//         let tr = document.createElement('tr');
//         for (let i = 0; i < tr[0].getElementsByTagName('td').length; i++) {
//             let td = document.createElement('td');
//             tr.appendChild(td);
//         }
//     table.appendChild(tr);
//     }
// });

// 471 1
// document.getElementById('doubleNumbers').addEventListener('click', function() {
//     let cells = document.querySelectorAll('#table td');
//         cells.forEach(cell => {
//             let number = parseInt(cell.textContent);
//             cell.textContent = number * 2;
//         });
//     });

// 472 1
// document.getElementById('button').addEventListener('click', function() {
//     let newLi = document.createElement('li');
//     newLi.textContent = document.querySelectorAll('#elem li').length + 1;
//     document.getElementById('elem').appendChild(newLi);
//     newLi.addEventListener('click', function() {
//         this.remove();
//     });
// });
// document.querySelectorAll('#elem li').forEach(li => {
//     li.addEventListener('click', function() {
//         this.remove();
//     });
// });

// 473 1
// document.getElementById('deleteLink').addEventListener('click', function() {
//     document.getElementById('elem').remove();
// });

// 474 1
// let listItems = document.getElementById('list').getElementsByTagName('li');
// for (let i = 0; i < listItems.length; i++) {
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Delete';
//     deleteLink.addEventListener('click', function() {
//         this.parentNode.remove();
//     });
//     listItems[i].appendChild(deleteLink);
// }

// 474 2
// let tableRows = document.getElementById('table').getElementsByTagName('tr');
// for (let i = 0; i < tableRows.length; i++) {
//     if (i === 0) {
//         continue;
//     }
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Delete';
//     deleteLink.addEventListener('click', function() {
//         this.parentNode.parentNode.remove();
//     });
//     let newCell = tableRows[i].insertCell(-1);
//     newCell.appendChild(deleteLink);
// }

// 475 1
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.addEventListener('input', function() {
//     elem.textContent = this.value;
// });

// 475 2
// document.getElementById('elem').addEventListener('click', function() {
//     let input = document.createElement('input');
//     input.setAttribute('id', 'input');
//     document.getElementById('parent').appendChild(input);
//     input.addEventListener('input', function() {
//         document.getElementById('elem').textContent = this.value;
//     });
// });

// 476 1 /////////////////////////
// document.getElementById('elem').addEventListener('click', function() {
//     let input = document.createElement('input');
//     input.setAttribute('id', 'input');
//     input.setAttribute('type', 'text');
//     input.value = document.getElementById('elem').textContent;
//     document.getElementById('parent').replaceChild(input, document.getElementById('elem'));
//     input.addEventListener('blur', function() {
//         document.getElementById('parent').replaceChild(document.getElementById('elem'), input);
//         document.getElementById('elem').textContent = this.value;
//     });
// });

// 477 1
// let listItems = document.querySelectorAll('#list li');
// listItems.forEach(function(item) {
//     item.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.setAttribute('type', 'text');
//         input.value = item.textContent;
//         item.textContent = '';
//         item.appendChild(input);
//         input.addEventListener('blur', function() {
//             item.textContent = this.value;
//         });
//     });
// });

// 477 2
// let cells = document.querySelectorAll('#table td');
// cells.forEach(function(cell) {
//     cell.addEventListener('click', function() {
//         let input = document.createElement('input');
//         input.setAttribute('type', 'text');
//         input.value = cell.textContent;
//         cell.textContent = '';
//         cell.appendChild(input);
//         input.addEventListener('blur', function() {
//             cell.textContent = this.value;
//         });
//     });
// });

// 478 1
// let paragraphs = document.querySelectorAll('#parent p');
// paragraphs.forEach(function(paragraph) {
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Удалить';
//     deleteLink.onclick = function() {
//         paragraph.remove();
//         return false;
//     };
//     paragraph.appendChild(deleteLink);
// });
// let spans = document.querySelectorAll('#parent span');
// spans.forEach(function(span) {
//     span.onclick = function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         input.focus();
//         input.onblur = function() {
//             span.textContent = input.value;
//         };
//     };
// });

// 478 2
// let paragraphs = document.querySelectorAll('#parent p');
// paragraphs.forEach(function(paragraph) {
//     let span = document.createElement('span');
//     span.textContent = paragraph.textContent;
//     paragraph.textContent = '';
//     paragraph.appendChild(span);
// });
// let spans = document.querySelectorAll('#parent span');
// spans.forEach(function(span) {
//     span.onclick = function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         input.focus();
//         input.onblur = function() {
//             span.textContent = input.value;
//         };
//     };
// });
// paragraphs.forEach(function(paragraph) {
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Удалить';
//     deleteLink.onclick = function() {
//         paragraph.remove();
//         return false;
//     };
//     paragraph.appendChild(deleteLink);
// });

// 479 1
// let paragraphs = document.querySelectorAll('#parent p');
// paragraphs.forEach(function(paragraph) {
//     let span = document.createElement('span');
//     span.textContent = paragraph.textContent;
//     paragraph.textContent = '';
//     paragraph.appendChild(span);
//     let underlineLink = document.createElement('a');
//     underlineLink.href = '#';
//     underlineLink.textContent = 'Перечеркнуть';
//     underlineLink.onclick = function() {
//         if (span.style.textDecoration === 'line-through') {
//             span.style.textDecoration = 'none';
//         } else {
//             span.style.textDecoration = 'line-through';
//         }
//         return false;
//     };
//     paragraph.appendChild(underlineLink);
// });
// let spans = document.querySelectorAll('#parent span');
// spans.forEach(function(span) {
//     span.onclick = function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         input.focus();
//         input.onblur = function() {
//             span.textContent = input.value;
//         };
//     };
// });
// paragraphs.forEach(function(paragraph) {
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Удалить';
//     deleteLink.onclick = function() {
//         paragraph.remove();
//         return false;
//     };
//     paragraph.appendChild(deleteLink);
// });

// 479 2
// let paragraphs = document.querySelectorAll('#parent p');
// paragraphs.forEach(function(paragraph) {
//     let span = document.createElement('span');
//     span.textContent = paragraph.textContent;
//     paragraph.textContent = '';
//     paragraph.appendChild(span);
//     let underlineLink = document.createElement('a');
//     underlineLink.href = '#';
//     underlineLink.textContent = 'Перечеркнуть';
//     underlineLink.onclick = function() {
//         if (span.style.textDecoration === 'line-through') {
//             span.style.textDecoration = 'none';
//         } else {
//             span.style.textDecoration = 'line-through';
//         }
//         underlineLink.remove(); 
//         return false;
//     };
//     paragraph.appendChild(underlineLink);
//     span.onclick = function() {
//         let input = document.createElement('input');
//         input.value = span.textContent;
//         span.textContent = '';
//         span.appendChild(input);
//         input.focus();
//         input.onblur = function() {
//             span.textContent = input.value;
//         };
//     };
//     let deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Удалить';
//     deleteLink.onclick = function() {
//         paragraph.remove();
//         return false;
//     };
//     paragraph.appendChild(deleteLink);
// });

// 479 3
// let highlightLinks = document.querySelectorAll('.highlightLink');
// highlightLinks.forEach(function(link) {
//     link.onclick = function() {
//         let row = this.parentNode.parentNode;
//         row.style.backgroundColor = 'lightgreen';
//         return false;
//     };
// });

// 479 4
// let highlightLinks = document.querySelectorAll('.highlightLink');
// highlightLinks.forEach(function(link) {
//     link.addEventListener('click', function(event) {
//         let row = this.parentNode.parentNode;
//         if (row.classList.contains('highlighted')) {
//             row.classList.remove('highlighted');
//         } else {
//             row.classList.add('highlighted');
//         }
//         event.preventDefault();
//     });
// });

// 480 1
// let elem = document.querySelector('#elem'); 
// let toggle = document.querySelector('#toggle'); 
// let isHidden = false;
// toggle.addEventListener('click', function() { 
//     if (isHidden) {
//         elem.classList.remove('hidden');
//         isHidden = false;
//     } else {
//         elem.classList.add('hidden');
//         isHidden = true;
//     }
// });

// 481 1
// let buttons = document.querySelectorAll('button'); 
// for (let button of buttons) { 
//     button.addEventListener('click', function() { 
//         let elem = document.querySelector('#' + this.dataset.elem); 
//         elem.classList.toggle('hidden'); 
//     }); 
// }

// 481 2
// let buttons = document.querySelectorAll('button'); 
// let elems   = document.querySelectorAll('p'); 
// buttons.forEach((button, i) => {
//     button.addEventListener('click', () => {
//         elems[i].classList.toggle('hidden');
//     });
// });

// 481 3
// let buttons = document.querySelectorAll('button');
// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         button.previousElementSibling.classList.toggle('hidden');
//     });
// });

// 482 1
// let listItems = document.querySelectorAll('ul li');
// listItems.forEach((item) => {
//     item.addEventListener('click', () => {
//         item.style.backgroundColor = 'red';
//     });
// });

// 482 2
// document.addEventListener('DOMContentLoaded', function() {
//     let listItems = document.querySelectorAll('ul li');
//     listItems.forEach(function(item) {
//         item.addEventListener('click', function() {
//             if (item.classList.contains('active')) {
//             item.classList.remove('active');
//             } else {
//             listItems.forEach(function(li) {
//                 li.classList.remove('active');
//             });
//             item.classList.add('active');
//             }
//         });
//     });
// });

// 483 1
// const lis = document.querySelectorAll('ul li');
// let color = 'color1';
// for (let li of lis) {
//     li.addEventListener('click', function() {
//         if (color === 'color1') {
//             li.classList.remove('color2');
//             li.classList.add('color1');
//             color = 'color2';
//         } else {
//             li.classList.remove('color1');
//             li.classList.add('color2');
//             color = 'color1';
//         }
//     });
// }

// 483 2
// -

// 484 1
// const array = ['apple', 'banana', 'orange', 'grape'];
// const list = document.getElementById('list');
// array.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     list.appendChild(listItem);
// });

// 484 2
// const array = ['apple', 'banana', 'orange', 'grape'];
// const list = document.getElementById('list');
// array.forEach(item => {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     listItem.addEventListener('click', function() {
//         const input = document.createElement('input');
//         input.value = listItem.textContent;
//         listItem.textContent = '';
//         listItem.appendChild(input);
//         input.focus();
//         input.addEventListener('blur', function() {
//             listItem.textContent = input.value;
//         });
//     });
//     list.appendChild(listItem);
// });

// 484 3
// const array = ['apple', 'banana', 'orange', 'grape'];
// const list = document.getElementById('list');
// array.forEach(item => {
//     const listItem = createListItem(item);
//     list.appendChild(listItem);
// });
// function createListItem(item) {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     listItem.addEventListener('click', function() {
//         const input = document.createElement('input');
//         input.value = listItem.textContent;
//         listItem.textContent = '';
//         listItem.appendChild(input);
//         input.focus();
//         input.addEventListener('blur', function() {
//             listItem.textContent = input.value;
//         });
//     });
//     return listItem;
// }
// function addItem() {
//     const addItemInput = document.getElementById('addItemInput');
//     const newItem = addItemInput.value;
//     if (newItem) {
//         const listItem = createListItem(newItem);
//         list.appendChild(listItem);
//         addItemInput.value = '';
//     }
// }

// 484 4
// const array = ['apple', 'banana', 'orange', 'grape'];
// const list = document.getElementById('list');
// array.forEach(item => {
//     const listItem = createListItem(item);
//     list.appendChild(listItem);
// });
// function createListItem(item) {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     const deleteLink = document.createElement('a');
//     deleteLink.textContent = 'удалить';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', function() {
//         listItem.remove();
//     });
//     listItem.appendChild(deleteLink);
//     listItem.addEventListener('click', function() {
//         const input = document.createElement('input');
//         input.value = listItem.textContent;
//         listItem.textContent = '';
//         listItem.appendChild(input);
//         input.focus();
//         input.addEventListener('blur', function() {
//             listItem.textContent = input.value;
//         });
//     });
//     return listItem;
// }
// function addItem() {
//     const addItemInput = document.getElementById('addItemInput');
//     const newItem = addItemInput.value;
//     if (newItem) {
//         const listItem = createListItem(newItem);
//         list.appendChild(listItem);
//         addItemInput.value = '';
//     }
// }

// 484 5
// const array = ['apple', 'banana', 'orange', 'grape'];
// const list = document.getElementById('list');
// array.forEach(item => {
//     const listItem = createListItem(item);
//     list.appendChild(listItem);
// });
// function createListItem(item) {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;
//     const deleteLink = document.createElement('a');
//     deleteLink.textContent = 'удалить';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', function() {
//         listItem.remove();
//     });   
//     listItem.appendChild(deleteLink); 
//     const strikeLink = document.createElement('a');
//     strikeLink.textContent = 'перечеркнуть';
//     strikeLink.href = '#';
//     strikeLink.addEventListener('click', function() {
//         listItem.style.textDecoration = 'line-through';
//     });  
//     listItem.appendChild(strikeLink);  
//     listItem.addEventListener('click', function() {
//         const input = document.createElement('input');
//         input.value = listItem.textContent;
//         listItem.textContent = '';
//         listItem.appendChild(input);
//         input.focus();
//         input.addEventListener('blur', function() {
//             listItem.textContent = input.value;
//         });
//     });  
//     return listItem;
// }
// function addItem() {
//     const addItemInput = document.getElementById('addItemInput');
//     const newItem = addItemInput.value;
//     if (newItem) {
//         const listItem = createListItem(newItem);
//         list.appendChild(listItem);
//         addItemInput.value = '';
//     }
// }

// 484 6
// const employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeTable = document.getElementById('employeeTable');
// employees.forEach(employee => {
//     const row = employeeTable.insertRow(-1);
//     const nameCell = row.insertCell(0);
//     const ageCell = row.insertCell(1);
//     const salaryCell = row.insertCell(2);
//     nameCell.textContent = employee.name;
//     ageCell.textContent = employee.age;
//     salaryCell.textContent = employee.salary;
// });

// 484 7
// const employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeTable = document.getElementById('employeeTable');
// employees.forEach((employee, index) => {
//     const row = employeeTable.insertRow(-1);
//     const nameCell = row.insertCell(0);
//     const ageCell = row.insertCell(1);
//     const salaryCell = row.insertCell(2);
//     nameCell.innerHTML = <input type="text" value="${employee.name}" id="name${index}">;
//     ageCell.innerHTML = <input type="number" value="${employee.age}" id="age${index}">;
//     salaryCell.innerHTML = <input type="number" value="${employee.salary}" id="salary${index}">;
// });

// 484 8
// const employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeTable = document.getElementById('employeeTable');
// employees.forEach((employee, index) => {
//     const row = employeeTable.insertRow(-1);
//     const nameCell = row.insertCell(0);
//     const ageCell = row.insertCell(1);
//     const salaryCell = row.insertCell(2);
//     const actionCell = row.insertCell(3);
//     nameCell.innerHTML = <input type="text" value="${employee.name}" id="name${index}">;
//     ageCell.innerHTML = <input type="number" value="${employee.age}" id="age${index}">;
//     salaryCell.innerHTML = <input type="number" value="${employee.salary}" id="salary${index}">;
//     actionCell.innerHTML = <a href="#" onclick="deleteRow(${index})">Delete</a>; // Delete link
// });
// function deleteRow(index) {
//     employeeTable.deleteRow(index + 1)
// };

// 484 9
// const employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeTable = document.getElementById('employeeTable');
// employees.forEach((employee, index) => {
//     const row = employeeTable.insertRow(-1);
//     const nameCell = row.insertCell(0);
//     const ageCell = row.insertCell(1);
//     const salaryCell = row.insertCell(2);
//     const actionCell = row.insertCell(3); // New cell for delete link
//     nameCell.innerHTML = <input type="text" value="${employee.name}" id="name${index}">;
//     ageCell.innerHTML = <input type="number" value="${employee.age}" id="age${index}">;
//     salaryCell.innerHTML = <input type="number" value="${employee.salary}" id="salary${index}">;
//     actionCell.innerHTML = <a href="#" onclick="deleteRow(${index})">Delete</a>;
// });
// function deleteRow((index) {
//     employeeTable.deleteRow(index + 1); // +1 to account for table header row
// });

// 484 10
// const employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeList = document.getElementById('employeeList');
// employees.forEach((employee) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary};
//     employeeList.appendChild(listItem);
// });

// 484 11
// const employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeList = document.getElementById('employeeList');
// employees.forEach((employee) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary};
//     listItem.addEventListener('click', () => {
//         const nameInput = document.createElement('input');
//         nameInput.value = employee.name;
//         listItem.appendChild(nameInput);     
//         const ageInput = document.createElement('input');
//         ageInput.value = employee.age;
//         listItem.appendChild(ageInput);     
//         const salaryInput = document.createElement('input');
//         salaryInput.value = employee.salary;
//         listItem.appendChild(salaryInput);
//         nameInput.addEventListener('change', () => {
//             employee.name = nameInput.value;
//         }); 
//         ageInput.addEventListener('change', () => {
//             employee.age = ageInput.value;
//         });
//         salaryInput.addEventListener('change', () => {
//             employee.salary = salaryInput.value;
//         });
//     });
//     employeeList.appendChild(listItem);
// });

// 484 12
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// const employeeList = document.getElementById('employeeList');
// employees.forEach((employee) => {
//     const listItem = document.createElement('li');
//     listItem.textContent = Name: ${employee.name}, Age: ${employee.age}, Salary: ${employee.salary};
//     const deleteLink = document.createElement('a');
//     deleteLink.textContent = 'Delete';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', () => {
//         employeeList.removeChild(listItem);
//     });
//     listItem.appendChild(deleteLink);
//     employeeList.appendChild(listItem);
// });

// 484 13
// const addEmployeeForm = document.getElementById('addEmployeeForm');
// const nameInput = document.getElementById('name');
// const ageInput = document.getElementById('age');
// const salaryInput = document.getElementById('salary');
// addEmployeeForm.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const newEmployee = {
//         name: nameInput.value,
//         age: parseInt(ageInput.value),
//         salary: parseInt(salaryInput.value)
//     };
//     employees.push(newEmployee);
//     const listItem = document.createElement('li');
//     listItem.textContent = Name: ${newEmployee.name}, Age: ${newEmployee.age}, Salary: ${newEmployee.salary};
//     const deleteLink = document.createElement('a');
//     deleteLink.textContent = 'Delete';
//     deleteLink.href = '#';
//     deleteLink.addEventListener('click', () => {
//         employeeList.removeChild(listItem);
//     });
//     listItem.appendChild(deleteLink);
//     employeeList.appendChild(listItem);
//     nameInput.value = '';
//     ageInput.value = '';
//     salaryInput.value = '';
// });