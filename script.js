
function insert_Row() {
    //Write your code here

const button = document.querySelector('input');
const tableRow = document.querySelector('tr');
const  table = document.querySelector('#sampleTable');

//     let Newrow = document.createElement('tr');
//     table.appendChild(Newrow);

//   let Newtd1 = document.createElement('td');
// 	let Newtd2 = document.createElement('td');
//     Newtd1.textContent = `New Cell1`;
//     Newtd2.textContent = `New Cell2`;
// 	Newrow.appendChild(Newtd1);
// 	Newrow.appendChild(Newtd2);
//     // Newrow.append(Newtd1);


    let row = table.insertRow(0);
    let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
    //   let c3 = row.insertCell(2);

      c1.innerText = "New Cell1";
      c2.innerText = "New Cell2";
}
