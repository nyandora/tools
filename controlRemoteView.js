document.addEventListener("keydown", e => {
  if ((e.ctrlKey
      && (e.keyCode === 83
        || e.keyCode === 70
        || (e.shiftKey && e.keyCode === 79)
        || e.keyCode === 33
        || e.keyCode === 34
    ))
    || e.keyCode === 114
    || e.keyCode === 115
    || e.keyCode === 116
    || e.keyCode === 123
  ) {
    e.preventDefault();
  }
  return false;
})
