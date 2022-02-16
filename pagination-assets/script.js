let rowsPerPage = 9, activePage = 1, totalPgs = Math.ceil(totalRows.length/rowsPerPage);

        createPaginationBtns();

        let pageBtns = document.querySelectorAll(".page")

        pageBtns.forEach(function (pageBtn) {
            pageBtn.addEventListener("click", function () {
                pageBtns.forEach(function(d){
                    d.className = "page";
                    d.disabled = false;
                })
                if(this.innerHTML === "Previous"){
                    activePage -= 1
                    document.getElementById("pg" + activePage).click();
                    if (activePage === 1) {
                        this.disabled = true;
                    }
                }else if(this.innerHTML === "Next"){
                    activePage += 1
                    document.getElementById("pg" + activePage).click();
                    if (activePage === totalPgs) {
                        this.disabled = true;
                    }
                }else{
                    this.className = "page active";
                    this.disabled = true;
                    activePage = parseInt(this.innerHTML);
                    if (parseInt(this.innerHTML) === 1) {
                        document.getElementById("pgPrevious").disabled = true;      
                    }else if(parseInt(this.innerHTML) === totalPgs){
                        document.getElementById("pgNext").disabled = true;  
                    }
                    displayPage(this.innerHTML);
                }
            });
        });