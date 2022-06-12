/* When the menu is in mobile view - hides the links inm a hamburger menu, or displays them whgen the user clicks the menu.*/
function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "navigation") {
    x.className += " responsive"; /* Showes the links */
  } else {
    x.className = "navigation"; /* closes the menu */
  }
}
