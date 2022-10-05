// get button element by id
const loadData = document.getElementById("load");

const tbody = document.getElementById("robots");
const list = document.createDocumentFragment();

// // event listener for button
loadData.addEventListener("click", getRobotData);

//load data on page
window.onload = () => {
  getRobotData();
};

//function to get data and map data into table
function getRobotData() {
  fetch("https://60c8ed887dafc90017ffbd56.mockapi.io/robots")
    .then((response) => response.json())
    .then((data) => {
      let robots = data;

      robots.map((robot) => {
        let row = document.createElement("tr");
        let id = document.createElement("td");
        let battery = document.createElement("td");
        let y = document.createElement("td");
        let x = document.createElement("td");

        id.innerHTML = `${robot.robotId}`;
        battery.innerHTML = `${robot.batteryLevel}`;
        y.innerHTML = `${robot.y}`;
        x.innerHTML = `${robot.x}`;

        row.appendChild(id);
        row.appendChild(battery);
        row.appendChild(y);
        row.appendChild(x);

        list.appendChild(row);
      });
    });

  tbody.appendChild(list);
}

//search by ID function
const searchById = () => {
  let input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search");
  filter = input.value;
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

// sort by id

//sort by battery level

//sort by y

//sort by x
