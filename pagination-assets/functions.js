function createPageBtn(i, selector) {
  let pageBtn = document.createElement("button");
  pageBtn.innerHTML = i;
  pageBtn.className = "page";
  pageBtn.id = "pg"+i;
  selector.appendChild(pageBtn);
}
function displayPage(pgNo){
    parseInt(pgNo)
    let getTableCont = document.getElementById("table")
    getTableCont.innerHTML = "";
    if(pgNo < totalPgs){
        let start = (pgNo - 1) * rowsPerPage;
        let end = start + rowsPerPage;
        createTable(totalRows.slice(start, end), getTableCont);
    }else{
        let start = (pgNo - 1) * rowsPerPage;
        let end = start + (totalRows.length - start);
        createTable(totalRows.slice(start, end), getTableCont);
    }

}
function createBodyRows(selector, data){
    data.forEach(rowdata => {
        let tr = document.createElement("tr");
        for (const key in rowdata) {
            let td = document.createElement("td");
            td.innerHTML = rowdata[key];
            tr.appendChild(td);
        }
        selector.appendChild(tr);
    });

}
function createHeadRows(selector, data){
    let tr = document.createElement("tr");
    data.forEach(cellData => {
        let th = document.createElement("th");
        th.innerHTML = cellData;
        tr.appendChild(th);
        selector.appendChild(tr);
    });
    selector.appendChild(tr);
}
function createTable(chosenData, selector) {
    let table = document.createElement("table")
        table.className = "table"
        selector.appendChild(table)

    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")

    table.appendChild(thead)
    table.appendChild(tbody)
    createHeadRows(thead, Object.keys(chosenData[0]))
    createBodyRows(tbody, chosenData)
}

function createPaginationBtns(){
            let btnCont = document.getElementById("buttons")

            createPageBtn("Previous", btnCont);

            for (let i = 1; i <= totalPgs; i++) {
                if (i !== totalPgs) {
                    let start = (i - 1) * rowsPerPage;
                    let end = start + rowsPerPage;
                    let chosenData = totalRows.slice(start, end);
                    createPageBtn(i, btnCont);
                } else {
                    let start = (i - 1) * rowsPerPage;
                    let end = start + (totalRows.length - start);
                    let chosenData = totalRows.slice(start, end);
                    createPageBtn(i, btnCont); 
                }
            }

            createPageBtn("Next", btnCont);
            
            let getTableCont = document.getElementById("table")
            createTable(totalRows.slice(0, rowsPerPage), getTableCont);
            
            let prevBtn = document.getElementById("pgPrevious")
                prevBtn.disabled = true;
            let pgOne = document.getElementById("pg1")
                pgOne.className = "page active";
                pgOne.disabled = true;
            
        }