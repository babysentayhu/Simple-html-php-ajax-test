names = [];

// Invoked during User types into UI (on keystroke)
document.getElementById("search-input").addEventListener("keyup", async (e) => {
  // Search comments
  // Use this API: https://jsonplaceholder.typicode.com/comments?postId=3
  // Display the results in the UI

  // Things to look out for
  // ---
  // Use es6

console.log(names)
  var input, span, div, filter, ul, li, a, i, txtValue;

  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("results");
  li = ul.getElementsByTagName("li");
  span = ul.getElementsByTagName("span");
  div = ul.getElementsByTagName("div");
  for (i = 0; i < div.length; i++) {
    a = div[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      span[i].style.display = "";
      div[i].style.display = "";
    } else {
      li[i].style.display = "none";
      span[i].style.display = "none";
      div[i].style.display = "none";
    }
  }
});

// Invoked on the first loading of the page
function loadData() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    if (this.status == 200) {
      value = JSON.parse(this.responseText);
      for (var i = 0; i < value.length; i++) {
        names.push(value[i]);
      }
      let list = document.getElementById("results");
      names.forEach((item) => {
        let li = document.createElement("li");
        let span = document.createElement("span");
        let div = document.createElement("div");
        
        div.innerText = item.name;
        list.appendChild(div);
        span.innerText = item.email;
        list.appendChild(span);
        li.innerText = item.body;
        list.appendChild(li);
        
      });
    }
  };
  xmlhttp.open("GET", "./php/public/index.php?", true);

  xmlhttp.send();
}
