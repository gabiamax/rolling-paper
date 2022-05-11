const HTMLElementPrint = (id, width, height, title) => {
  const tempWin = window.open('', 'PRINT', `width=${width},height=${height}`);

  tempWin.document.write(`
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

  tempWin.document.close();
  tempWin.focus();

  tempWin.addEventListener('load', () => {
    tempWin.print();
    tempWin.close();
  });
};

export default HTMLElementPrint;
