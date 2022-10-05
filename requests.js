document.addEventListener("DOMContentLoaded", getRobotData, false);

let data, table, sortCol;
let sortAsc = false;

//function to get data and map data into table
async function getRobotData() {
  table = document.querySelector("#table tbody");
  let response = await fetch(
    "https://60c8ed887dafc90017ffbd56.mockapi.io/robots"
  );

  data = await response.json();
  renderTable();

  //listen for sort clicks
  document.querySelectorAll("#table thead tr th").forEach((t) => {
    t.addEventListener("click", sort, false);
  });
}

function renderTable() {
  // create html
  let result = "";
  data.forEach((robot) => {
    result += `<tr>
           <td>${robot.robotId}</td>
           <td>${robot.batteryLevel}</td>
           <td>${robot.y}</td>
           <td>${robot.x}</td>
           </tr>`;
  });
  table.innerHTML = result;
}
//sort

function sort(e) {
  let thisSort = e.target.dataset.sort;
  if (sortCol === thisSort) sortAsc = !sortAsc;
  sortCol = thisSort;
  data.sort((a, b) => {
    let aSortCol = parseFloat(a[sortCol]);
    let bSortCol = parseFloat(b[sortCol]);
    if (aSortCol < bSortCol) return sortAsc ? 1 : -1;
    if (aSortCol > bSortCol) return sortAsc ? -1 : 1;
    return 0;
  });
  renderTable();
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
