        let fname = document.getElementById("first-name")
        let lname = document.getElementById("last-name")
        let addInp = document.getElementById("address");
        let pincode = document.getElementById("pincode");
        let state = document.getElementById("state");
        let country = document.getElementById("country");
        let genderVal = document.getElementsByName('gender');
        let foodVal = document.getElementsByName('food');
        let form = document.getElementById("form")
        
        form.addEventListener("submit",  function(e){
            e.preventDefault();
            let data = getInpValues();
            console.log(data);
            createTableRow(data);
            clearInpForms();
        })

        function clearInpForms(){
            console.log("clear function");
            fname.value = "";
            lname.value = "";
            addInp.value = "";
            pincode.value = "";
            state.value = "";
            country.value = "";
            for (var t = 0; t < genderVal.length; t++){
                genderVal[t].checked = false;
            }
            for (var r = 0; r < genderVal.length; r++){
                foodVal[r].checked = false;
            }
        }

        function createTableRow(inpdata){
            let tblBody = document.getElementById("tbody");
            let tr = document.createElement("tr");
            inpdata.forEach(rowdata => {
                let td = document.createElement("td");
                td.innerHTML = rowdata;
                tr.appendChild(td);
            });
            tblBody.appendChild(tr);
        }

        function getInpValues() {
            let tmpObject = []
            tmpObject.push(fname.value)
            tmpObject.push(lname.value)
            tmpObject.push(addInp.value)
            for (i = 0; i < genderVal.length; i++) {
                if (genderVal[i].checked) {
                    tmpObject.push(genderVal[i].value)
                }
            }
            for (j = 0; j < foodVal.length; j++) {
                if (foodVal[j].checked) {
                    tmpObject.push(foodVal[j].value)
                }
            }
            tmpObject.push(pincode.value)
            tmpObject.push(state.value)
            tmpObject.push(country.value)
            return tmpObject;
        }
