//Get values
let Name = document.getElementById('Name');
let College = document.getElementById('Colleg');
let Course = document.getElementById('Course');

//Get Buttons
let Delete = document.querySelector('.Delete');
let Add = document.querySelector('.Add');
let Submite = document.querySelector('#Submit');

//Fields Clear
function Clear() {
    Name.value = "";
    College.value = "";
    Course.value = "";
}

//Validation
Submite.addEventListener('click', (e) => {
    e.preventDefault();
    let tbody = document.querySelector('tbody');


    if (Name.value == null || Name.value == "" || College.value == null || College.value == "" || Course.value == null || Course.value ==
        "") {
        alert("please Fill Fields")
    }
    else {
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${Name.value}</td>
                            <td>${College.value}</td>
                            <td>${Course.value}</td>
                            <td class="td">
                                <button class="Add" >
                                    Add
                                </button>
                                <button  class="Delete" >
                                    Delete
                                </button>
                            </td>
            `
        Clear()
        tbody.append(tr);
    }
})

//Delete Function 

let tbody = document.querySelector('tbody');
tbody.addEventListener('click', (e) => {
    e.preventDefault();
    target = e.target;
    let SelectedRow = target.parentElement.parentElement;
    if (target.classList.contains("Delete")) {
        target.parentElement.parentElement.remove()
    }
    if (target.classList.contains("Add")) {
        if (Name.value == null || Name.value == "" || College.value == null || College.value == "" || Course.value == null || Course.value ==
            "") {
            return false
        }
        else {
            SelectedRow.children[0].innerHTML = `<td>${Name.value}</td>`
            SelectedRow.children[1].innerHTML = `<td>${College.value}</td>`
            SelectedRow.children[2].innerHTML = `<td>${Course.value}</td>`
        }
    }

})