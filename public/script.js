 fetch(`http://localhost:4000/get-messages`)
        .then((data) => data.json())
        .then((data) => displayMessageDetails(data));

      function displayMessageDetails(datas) {
        let list = document.getElementById("table-data");
        list.innerHTML = "";
        for (let i = 0; i < datas.length; i++) {
          const row = document.createElement("tr");
          row.innerHTML = `<td>${datas[i].NAME}</td> <td>${datas[i].Message}</td>  <td>${datas[i].Date}</td>`;
          list.appendChild(row);
        }
      }