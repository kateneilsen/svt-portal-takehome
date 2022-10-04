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

// sort by id

//sort by battery level

//sort by y

//sort by x
