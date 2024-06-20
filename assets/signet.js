"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.product-short-description');

    containers.forEach(function(container) {
        const tables = container.querySelectorAll('table');

        tables.forEach(function(table) {
            const wrapper = document.createElement('div');
            wrapper.className = 'table-container';

            // Set CSS styles directly using JavaScript
            wrapper.style.width = '100%';
            wrapper.style.maxWidth = '600px'; // Adjust the width as needed
            wrapper.style.height = '100%'; // Adjust the height as needed
            wrapper.style.overflowX = 'auto';
            wrapper.style.overflowY = 'auto';
            wrapper.style.border = '1px solid #ccc';
            wrapper.style.padding = '10px';
            wrapper.style.boxSizing = 'border-box';

            // Insert the wrapper before the table in the DOM tree
            table.parentNode.insertBefore(wrapper, table);

            // Move the table into the wrapper
            wrapper.appendChild(table);
        });
    });
});
