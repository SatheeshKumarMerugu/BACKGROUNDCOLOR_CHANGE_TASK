let color = document.getElementById("color");
color.oninput = function () {
  document.body.style.backgroundColor = this.value;
};

// this is bgcl