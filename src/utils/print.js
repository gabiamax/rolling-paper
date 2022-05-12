const HTMLElementPrint = (id, width, height, title) => {
  const printWindow = window.open('', 'PRINT', `width=${width},height=${height}`);

  printWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
        <style>
          ${[...document.querySelectorAll('style')].map((el) => el.innerHTML).join('')}
        </style>
        <style>
          .no-print{
            display: none !important;
          }
        </style>
      </head>
      <body>
        ${window.document.getElementById(id).outerHTML}
      </body>
    </html>
  `);

  printWindow.document.close();
  printWindow.focus();

  printWindow.addEventListener('load', () => {
    printWindow.print();
  });

  printWindow.addEventListener('afterprint', () => {
    printWindow.close();
  });
};

export default HTMLElementPrint;
