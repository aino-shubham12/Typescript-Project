class AddressBookApp {
    constructor() {
    }
    start() {
        console.log("Inside start()");
        var buttonBoxContainer = document.getElementsByClassName("button-box")[0];
        var addAddressButton = document.createElement('button');
        addAddressButton.id = "add";
        addAddressButton.value = "submit";
        addAddressButton.className = "btn btn-light";
        addAddressButton.innerText = "Add Address";
        addAddressButton.style.display = "list-item";
        addAddressButton.style.marginBottom = "50px";
        addAddressButton.style.marginLeft = "20px";
        addAddressButton.style.marginTop = "27px";
        buttonBoxContainer.appendChild(addAddressButton);
        var findButton = document.createElement('button');
        findButton.id = "find";
        findButton.value = "submit";
        findButton.className = "btn btn-light";
        findButton.innerText = "Find Address";
        findButton.style.display = "list-item";
        findButton.style.marginBottom = "50px";
        findButton.style.marginLeft = "20px";
        buttonBoxContainer.appendChild(findButton);
        var listButton = document.createElement('button');
        listButton.id = "list";
        listButton.value = "submit";
        listButton.className = "btn btn-light";
        listButton.innerText = "List Address";
        listButton.style.display = "list-item";
        listButton.style.marginBottom = "50px";
        listButton.style.marginLeft = "20px";
        buttonBoxContainer.appendChild(listButton);
        addAddressButton.onclick = function () {
            console.log("Inside addButton");
            mi.personInput.value = '';
            mi.streetInput.value = '';
            mi.cityInput.value = '';
            mi.pincodeInput.value = '';
            mi.p5.innerHTML = '';
            mi.addUI();
        };
        findButton.onclick = function () {
            console.log("Inside findButton");
            findlist.findInput.value = '';
            findlist.find();
        };
        listButton.onclick = function () {
            console.log("Inside listButton");
            addlistui.showTable();
        };
    }
}
class MainUI {
    constructor() {
        this.addContainer = document.getElementsByClassName("add-container")[0];
        this.personInput = document.createElement("input");
        this.streetInput = document.createElement("input");
        this.cityInput = document.createElement("input");
        this.pincodeInput = document.createElement("input");
        this.addButton = document.createElement('button');
        this.p1 = document.createElement('p');
        this.p2 = document.createElement('p');
        this.p3 = document.createElement('p');
        this.p4 = document.createElement('p');
        this.p5 = document.createElement('p');
    }
    get person() {
        return this._person;
    }
    set person(value) {
        this._person = value;
    }
    get street() {
        return this._street;
    }
    set street(value) {
        this._street = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get pincode() {
        return this._pincode;
    }
    set pincode(value) {
        this._pincode = value;
    }
    addUI() {
        console.log("Inside addUI()");
        addlistui.listContainer.innerHTML = '';
        findlist.findcontainer.innerHTML = '';
        this.p5.id = "displayText";
        this.p5.style.marginRight = "auto";
        this.p5.style.marginBottom = "10px";
        this.personInput.type = "text";
        this.personInput.className = "form-control form-group col-md-4";
        this.personInput.placeholder = "Enter Name";
        this.personInput.id = "Pname";
        this.p1.id = "name";
        this.p1.style.marginRight = "auto";
        this.p1.style.marginBottom = "10px";
        this.addContainer.appendChild(this.personInput);
        this.addContainer.appendChild(this.p1);
        this.personInput.onfocus = () => {
            this.personInput.value = '';
            var text_clear1 = document.getElementById("name");
            text_clear1.innerHTML = '';
            var text_clear_success = document.getElementById("displayText");
            text_clear_success.innerHTML = '';
        };
        this.streetInput.type = "text";
        this.streetInput.className = "form-control form-group col-md-4";
        this.streetInput.placeholder = "Enter Street";
        this.streetInput.id = "Street";
        this.p2.id = "sname";
        this.p2.style.marginRight = "auto";
        this.p2.style.marginBottom = "10px";
        this.addContainer.appendChild(this.streetInput);
        this.addContainer.appendChild(this.p2);
        this.streetInput.onfocus = () => {
            this.streetInput.value = '';
            var text_clear2 = document.getElementById("sname");
            text_clear2.innerHTML = '';
        };
        this.cityInput.type = "text";
        this.cityInput.className = "form-control form-group col-md-4";
        this.cityInput.placeholder = "Enter City";
        this.cityInput.id = "City";
        this.p3.id = "cname";
        this.p3.style.marginRight = "auto";
        this.p3.style.marginBottom = "10px";
        this.addContainer.appendChild(this.cityInput);
        this.addContainer.appendChild(this.p3);
        this.cityInput.onfocus = () => {
            this.cityInput.value = '';
            var text_clear3 = document.getElementById("cname");
            text_clear3.innerHTML = '';
        };
        this.pincodeInput.type = "text";
        this.pincodeInput.className = "form-control form-group col-md-4";
        this.pincodeInput.placeholder = "Enter Pincode";
        this.pincodeInput.id = "Pincode";
        this.pincodeInput.maxLength = 6;
        this.p4.id = "piname";
        this.p4.style.marginRight = "auto";
        this.p4.style.marginBottom = "10px";
        this.addContainer.appendChild(this.pincodeInput);
        this.addContainer.appendChild(this.p4);
        this.pincodeInput.onfocus = () => {
            this.pincodeInput.value = '';
            var text_clear4 = document.getElementById("piname");
            text_clear4.innerHTML = '';
        };
        this.addContainer.appendChild(this.p5);
        this.addButton.innerText = "Add";
        this.addButton.id = "btnAdd";
        this.addButton.className = "btn btn-primary";
        this.addButton.style.marginRight = "auto";
        this.addButton.style.width = "10%";
        this.addButton.style.marginLeft = "130px";
        this.addContainer.appendChild(this.addButton);
        this.addButton.onclick = () => {
            this.person = document.getElementById("Pname").value;
            this.street = document.getElementById("Street").value;
            this.city = document.getElementById("City").value;
            this.pincode = document.getElementById("Pincode").value;
            if (this.person == "") {
                var p = document.getElementById("name");
                p.innerHTML = "Name is required";
                p.style.color = "red";
            }
            if (this.street == "") {
                var s = document.getElementById("sname");
                s.innerHTML = "Street is required";
                s.style.color = "red";
            }
            if (this.city == "") {
                var c = document.getElementById("cname");
                c.innerHTML = "City is required";
                c.style.color = "red";
            }
            if (isNaN(this.pincode)) {
                var pi = document.getElementById("piname");
                pi.innerHTML = "Pincode should be an integer";
                pi.style.color = "red";
            }
            if (this.pincode == "") {
                var pi1 = document.getElementById("piname");
                pi1.innerHTML = "Pincode is required";
                pi1.style.color = "red";
            }
            if ((this.person != "") && (this.street != "") && (this.city != "") && (this.pincode != "") && (!isNaN(this.pincode))) {
                var add = new Address();
                add.person = this.person;
                add.street = this.street;
                add.city = this.city;
                add.pincode = this.pincode;
                addlist.addAddress(add);
                mi.showText();
            }
        };
    }
    showText() {
        console.log("Inside showText");
        var text = document.getElementById("displayText");
        text.style.color = "green";
        text.innerHTML = "Address Added successfully";
    }
}
class Addresslist {
    constructor() {
        this.address = [];
    }
    addAddress(add) {
        console.log("Inside addAddress()");
        this.address.push(add);
        console.log(this.address);
    }
    updateAddress(i, add) {
        console.log("Inside updateAddress()");
        this.address.splice(i, 1, add);
        console.log(this.address);
    }
}
class Address {
    get person() {
        return this._person;
    }
    set person(value) {
        this._person = value;
    }
    get street() {
        return this._street;
    }
    set street(value) {
        this._street = value;
    }
    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }
    get pincode() {
        return this._pincode;
    }
    set pincode(value) {
        this._pincode = value;
    }
}
class AddresslistUI {
    constructor() {
        this.listContainer = document.getElementsByClassName("list-container")[0];
        this.tableTag = document.createElement("table");
        this.tr = document.createElement('tr');
        this.thTag1 = document.createElement('th');
        this.thTag2 = document.createElement('th');
        this.thTag3 = document.createElement('th');
        this.thTag4 = document.createElement('th');
    }
    showTable() {
        this.tableTag.innerHTML = '';
        this.tableTag.style.marginTop = "70px";
        this.tableTag.style.marginRight = "360px";
        console.log("Inside show table()");
        mi.addContainer.innerHTML = '';
        findlist.findcontainer.innerHTML = '';
        console.log(addlist.address);
        this.listContainer.appendChild(this.tableTag);
        this.thTag1.innerText = "Person Name";
        this.thTag2.innerText = "Street";
        this.thTag3.innerText = "City";
        this.thTag4.innerText = "Pincode";
        this.tr.appendChild(this.thTag1);
        this.tr.appendChild(this.thTag2);
        this.tr.appendChild(this.thTag3);
        this.tr.appendChild(this.thTag4);
        this.tableTag.appendChild(this.tr);
        var i;
        var j;
        for (i = 0; i < addlist.address.length; i++) {
            var trTag = document.createElement("tr");
            var tdPerson = document.createElement("td");
            var tdStreet = document.createElement("td");
            var tdCity = document.createElement("td");
            var tdPin = document.createElement("td");
            tdPerson.innerHTML = addlist.address[i].person;
            tdStreet.innerHTML = addlist.address[i].street;
            tdCity.innerHTML = addlist.address[i].city;
            tdPin.innerHTML = addlist.address[i].pincode;
            trTag.appendChild(tdPerson);
            trTag.appendChild(tdStreet);
            trTag.appendChild(tdCity);
            trTag.appendChild(tdPin);
            this.tableTag.appendChild(trTag);
        }
        this.tableTag.setAttribute("border", "1");
    }
}
class Findlist {
    constructor() {
        this.findcontainer = document.getElementsByClassName("find-container")[0];
        this.tableTag = document.createElement("table");
        this.tr = document.createElement('tr');
        this.thTag1 = document.createElement('th');
        this.thTag2 = document.createElement('th');
        this.thTag3 = document.createElement('th');
        this.thTag4 = document.createElement('th');
        this.thTag5 = document.createElement('th');
        this.findInput = document.createElement('input');
        this.findButton = document.createElement('button');
        this.deleteButton = document.createElement('button');
        this.editButton = document.createElement('button');
        this.p1 = document.createElement('p');
    }
    find() {
        console.log("Inside find()");
        mi.addContainer.innerHTML = '';
        addlistui.listContainer.innerHTML = '';
        this.findInput.className = "form-control form-group col-md-6";
        this.findInput.placeholder = "Enter person name you want to find in Address Book";
        this.findInput.id = "search";
        this.findcontainer.appendChild(this.findInput);
        this.findInput.onfocus = () => {
            var text_clear5 = document.getElementById("error-msg");
            text_clear5.innerHTML = '';
        };
        this.findButton.id = "findBtn";
        this.findButton.innerText = "Find";
        this.findButton.className = "btn btn-primary";
        this.findButton.style.marginRight = "auto";
        this.findButton.style.width = "10%";
        this.findButton.style.marginLeft = "600px";
        this.findButton.style.marginTop = "-53px";
        this.findButton.style.marginBottom = "20px";
        this.findcontainer.appendChild(this.findButton);
        this.editButton.id = "edit";
        this.editButton.innerText = "Edit";
        this.editButton.className = "btn btn-outline-info";
        this.editButton.style.marginRight = "auto";
        this.editButton.style.width = "30%";
        this.editButton.style.marginLeft = "12px";
        this.editButton.style.marginTop = "4px";
        this.editButton.style.marginBottom = "3px";
        this.deleteButton.id = "delete";
        this.deleteButton.innerText = "Delete";
        this.deleteButton.className = "btn btn-outline-danger";
        this.deleteButton.style.marginRight = "auto";
        this.deleteButton.style.width = "30%";
        this.deleteButton.style.marginLeft = "12px";
        this.deleteButton.style.marginTop = "4px";
        this.deleteButton.style.marginBottom = "3px";
        this.p1.id = "error-msg";
        this.p1.style.marginRight = "auto";
        this.p1.style.marginBottom = "10px";
        this.findcontainer.appendChild(this.p1);
        this.findButton.onclick = () => {
            console.log("Inside findButton");
            this.tableTag.innerHTML = '';
            var searchValue = document.getElementById("search").value;
            console.log(searchValue);
            console.log(addlist.address);
            console.log(addlist.address.length);
            this.tableTag.style.marginRight = "100px";
            this.findcontainer.appendChild(this.tableTag);
            this.thTag1.innerText = "Person Name";
            this.thTag2.innerText = "Street";
            this.thTag3.innerText = "City";
            this.thTag4.innerText = "Pincode";
            this.thTag5.innerText = "Actions";
            this.tr.appendChild(this.thTag1);
            this.tr.appendChild(this.thTag2);
            this.tr.appendChild(this.thTag3);
            this.tr.appendChild(this.thTag4);
            this.tr.appendChild(this.thTag5);
            this.tableTag.appendChild(this.tr);
            var i;
            for (i = 0; i < addlist.address.length; i++) {
                console.log("Inside 1st loop");
                // console.log(addlist.address[i]);
                var byperson = addlist.address[i].person;
                console.log("a :" + byperson);
                if (searchValue == byperson) {
                    console.log("inside if");
                    var errormsg1 = document.getElementById("error-msg");
                    errormsg1.innerHTML = '';
                    console.log(errormsg1);
                    var trTag = document.createElement("tr");
                    var tdPerson = document.createElement("td");
                    var tdStreet = document.createElement("td");
                    var tdCity = document.createElement("td");
                    var tdPin = document.createElement("td");
                    tdPerson.innerHTML = addlist.address[i].person;
                    tdStreet.innerHTML = addlist.address[i].street;
                    tdCity.innerHTML = addlist.address[i].city;
                    tdPin.innerHTML = addlist.address[i].pincode;
                    trTag.appendChild(tdPerson);
                    trTag.appendChild(tdStreet);
                    trTag.appendChild(tdCity);
                    trTag.appendChild(tdPin);
                    trTag.appendChild(this.editButton);
                    trTag.appendChild(this.deleteButton);
                    this.deleteButton.onclick = () => {
                        console.log(i);
                        // console.log(addlist.address[i]);
                        if (confirm('Are you sure to delete this Address ?')) {
                            addlist.address.splice(i, 1); //delete
                            console.log("delete done !");
                            this.tableTag.innerHTML = '';
                        }
                        console.log(addlist.address);
                    };
                    this.editButton.onclick = () => {
                        console.log("Inside edit ");
                        console.log(i);
                        console.log(addlist.address[i]);
                        tdPerson.innerHTML = '';
                        tdStreet.innerHTML = '';
                        tdCity.innerHTML = '';
                        tdPin.innerHTML = '';
                        trTag.removeChild(this.editButton);
                        trTag.removeChild(this.deleteButton);
                        var persontxtbox = document.createElement('input');
                        persontxtbox.type = "text";
                        persontxtbox.className = "form-control col-md-10";
                        persontxtbox.id = "Person";
                        persontxtbox.style.marginLeft = "10px";
                        persontxtbox.value = addlist.address[i].person;
                        var streetxtbox = document.createElement('input');
                        streetxtbox.type = "text";
                        streetxtbox.className = "form-control col-md-10";
                        streetxtbox.id = "Street";
                        streetxtbox.style.marginLeft = "10px";
                        streetxtbox.value = addlist.address[i].street;
                        var citytxtbox = document.createElement('input');
                        citytxtbox.type = "text";
                        citytxtbox.className = "form-control col-md-10";
                        citytxtbox.id = "City";
                        citytxtbox.style.marginLeft = "10px";
                        citytxtbox.value = addlist.address[i].city;
                        var pincodetxtbox = document.createElement('input');
                        pincodetxtbox.type = "text";
                        pincodetxtbox.className = "form-control col-md-10";
                        pincodetxtbox.id = "Pincode";
                        pincodetxtbox.style.marginLeft = "10px";
                        pincodetxtbox.value = addlist.address[i].pincode;
                        tdPerson.appendChild(persontxtbox);
                        tdStreet.appendChild(streetxtbox);
                        tdCity.appendChild(citytxtbox);
                        tdPin.appendChild(pincodetxtbox);
                        var updateButton = document.createElement('button');
                        updateButton.id = "update";
                        updateButton.className = "btn btn-outline-success";
                        updateButton.innerText = "Update";
                        updateButton.style.width = "100px";
                        updateButton.style.marginTop = "7px";
                        updateButton.style.marginBottom = "8px";
                        updateButton.style.marginLeft = "10px";
                        updateButton.style.marginRight = "10px";
                        trTag.appendChild(updateButton);
                        updateButton.onclick = () => {
                            console.log("Inside updateButton");
                            console.log(i);
                            if (confirm('Are you sure to update this Address ?')) {
                                var personValue = document.getElementById("Person").value;
                                var streetValue = document.getElementById("Street").value;
                                var cityValue = document.getElementById("City").value;
                                var pincodeValue = document.getElementById("Pincode").value;
                                var add = new Address();
                                add.person = personValue;
                                add.street = streetValue;
                                add.city = cityValue;
                                add.pincode = pincodeValue;
                                addlist.updateAddress(i, add);
                            }
                        };
                    };
                    this.tableTag.appendChild(trTag);
                    break;
                }
            }
            if (i >= addlist.address.length) {
                console.log("Inside error if");
                var errormsg = document.getElementById("error-msg");
                console.log(errormsg);
                errormsg.innerHTML = "Person not found in Address Book.";
                errormsg.style.color = "red";
            }
            this.tableTag.setAttribute("border", "1");
        };
    }
}
console.log("Outside class");
let app = new AddressBookApp();
app.start();
var mi = new MainUI();
var addlist = new Addresslist();
var addlistui = new AddresslistUI();
var findlist = new Findlist();
//# sourceMappingURL=AddressBookApp.js.map