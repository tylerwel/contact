// add mouseover event listener to headings
  // email
  document.getElementById("email").addEventListener("mouseover", mouseoverHeading);
  // git
  document.getElementById("git").addEventListener("mouseover", mouseoverHeading);
  // fb
  document.getElementById("fb").addEventListener("mouseover", mouseoverHeading);

// add mouseout event listener to headings
  // email
  document.getElementById("email").addEventListener("mouseout", mouseoutHeading);
  // git
  document.getElementById("git").addEventListener("mouseout", mouseoutHeading);
  // fb
  document.getElementById("fb").addEventListener("mouseout", mouseoutHeading);

// when mouseover a heading,
function mouseoverHeading() {
  // get all spans
  var spans = document.getElementsByTagName("span");
  // for each span
  for(var i = 0; i < spans.length; i++) {
    // add hidden class
    spans[i].classList.add("hidden");
  }
  // get spans that have a classname equal to the ID of the heading,
  var spans = document.getElementsByClassName(this.id);
  // for each span,
  for(var i = 0; i < spans.length; i++) {
    // remove the hidden class
    spans[i].classList.remove("hidden");
    // add the respective "mouseover" class to those elements
    spans[i].classList.add("mouseover-" + this.id)
  }
  // if this.id equals git,
  if(this.id == "git") {
    // change @ to /
    document.getElementById("symbol").textContent = "/";
  }
}

// when mouseout a heading,
function mouseoutHeading() {
  // get all spans
  var spans = document.getElementsByTagName("span");
  // for each span
  for(var i = 0; i < spans.length; i++) {
    // add hidden class
    spans[i].classList.add("hidden");
  }
  // get all "name" spans
  var spans = document.getElementsByClassName("name");
  // for each span,
  for(var i = 0; i < spans.length; i++) {
    // remove the hidden class
    spans[i].classList.remove("hidden");
  }
  // get spans that have a classname equal to the ID of the heading,
  var spans = document.getElementsByClassName(this.id);
  // for each span,
  for(var i = 0; i < spans.length; i++) {
    // remove the respective "mouseover" class from those elements
    spans[i].classList.remove("mouseover-" + this.id)
  }
  // if this.id equals git,
  if(this.id == "git") {
    // change / to @
    document.getElementById("symbol").textContent = "@";
  }
}
