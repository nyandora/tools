document.addEventListener("keydown", e => {
  if ((e.ctrlKey
      && (e.keyCode === 83 // Ctrl + S
        || e.keyCode === 70 // Ctrl + F
        || e.keyCode === 78 // Ctrl + N
        || e.keyCode === 79 // Ctrl + O
        || e.keyCode === 84 // Ctrl + T
        || (e.shiftKey && e.keyCode === 79) // Ctrl + Shift + o
        || e.keyCode === 33 // PgUp
        || e.keyCode === 34 // PgDn
    ))
    || e.keyCode === 93 // コンテキストメニューボタン
    || e.keyCode === 114 // F3
    || e.keyCode === 115 // F4
    || e.keyCode === 116 // F5
    || e.keyCode === 123 // F12
  ) {
    e.preventDefault();
  }

  return false;
});