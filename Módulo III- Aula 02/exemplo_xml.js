const xhttp = new XMLHttpRequest();

xhttp.onload = function () {
  if (this.status == 200) {
    const JsonData = JSON.parse(this.responseText);
    console.log(JsonData);
  }
};
xhttp.open("GET", "https://randomuser.me/api/", true);
xhttp.send();

//https://randomuser.me/



