"use strict";

const table = document.querySelector('table');

const rows = [...table.querySelectorAll('tbody tr')];

const array = rows.map((elem) => {
    return [...elem.querySelectorAll('td')].map((td) => {
        return (!isNaN(td.textContent)) ? +td.textContent : td.textContent;
    });
});

const tableHTML = array.map((row) => {
    const content = row.map((elemRow) => {
        return `<td>${elemRow}</td>`;
    }).join(' ');
    return `<tr>${content}</tr>`;
}).join(' ');

const tableBody = table.querySelector('tbody');

tableBody.innerHTML = tableHTML;

function sortTable(columnIndex) {
    const sortedArray = array.sort((a, b) => a[columnIndex] < b[columnIndex] ? -1 : 1);
    const sortedTableHTML = sortedArray.map((row) => {
        const content = row.map((elemRow) => {
            return `<td>${elemRow}</td>`;
        }).join(' ');
        return `<tr>${content}</tr>`;
    }).join(' ');
    tableBody.innerHTML = sortedTableHTML;
}