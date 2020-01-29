var Calendary = function(userLogin){
	this.userLogin = userLogin;
	this.dateToday = new Date();
	this.year=document.getElementById("yearNumber").innerText = this.dateToday.getFullYear();
	this.monthNumber=document.getElementById("monthName").innerText = this.dateToday.getMonth()+1;
	this.monthDecrement=document.getElementById("monthDecrement");
	this.monthIncrement=document.getElementById("monthIncrement");
	var that = this;
	

	//methods
/*	this.checkUser = function(){
		this.userLogin == null ? location.href = "../html/login.html" : true;
	}
*/
	this.calendaryTable = function(){

		var totalDays = new Date(this.year,this.monthNumber,0).getDate(); // this function get to Date object a  total days in month, example Date(2019,02,0).getDate => return 28;
		var calendaryDiv = document.getElementById("calendary");
		
		table = document.createElement("table");
		table.setAttribute("id","calendaryTable");
		table.setAttribute("class","header")	
		
		var day=1;
		for(row=0;row<6;row++){
			var tr = document.createElement('tr');
			tr.setAttribute("class","dayMonth");
			for(column=0;column<7;column++){
				var td = document.createElement('td');
				nameDay = new Date(this.year+" "+this.monthNumber+" "+day).getDay();
				if (column==nameDay && day<=totalDays) {
					td.innerText = day;
					td.setAttribute("id",this.year+""+this.monthNumber+""+day);
					td.setAttribute("class","dayMarkerClassUnselected");
					td.addEventListener("click",this.dayMarker);
					day++;
				}
				tr.appendChild(td);
			}
			table.appendChild(tr);
			calendaryDiv.appendChild(table);
		}
	}

	this.modifCalendary = function(element){
		if (element.target.id=="monthIncrement") {
			that.monthNumber++;
			if (that.monthNumber>12) {
				that.year++;
				that.monthNumber=1;
			}	
		}else if(element.target.id=="monthDecrement"){
			that.monthNumber--;
			if (that.monthNumber<1) {
				that.year--;
				that.monthNumber=12;
			}	
		}
		document.getElementById("monthName").innerText=that.monthNumber;
		document.getElementById("yearNumber").innerText=that.year;
		table = document.getElementById("calendaryTable");
		if (table!=undefined) {
				table.remove();	
		}
		that.calendaryTable(that.year,that.monthNumber);
	}

	/*this.hourPannel = function(){
		//this function create rows and col to hours table (12 hours am/pm)
		var table = document.getElementById("hourPannel-table");
		for(row = 1; row<=12; row ++){
			var tr = document.createElement("tr");
			for(columns = 0; columns<2; columns ++){
				var td =  document.createElement("td");
				td.innerText = row+" : 00 hs";
				tr.appendChild(td);
			}
			table.appendChild(tr);
		}
	}*/

	this.dayMarker = function(element){
		day = parseInt(element.target.textContent);
		month = parseInt(document.getElementById("monthName").textContent);
		year = parseInt(document.getElementById("yearNumber").textContent);
		dayDate = (day+"/"+month+"/"+year);
		
		(element.target.className =="dayMarkerClassSelected") ? element.target.setAttribute("class","dayMarkerClassUnselected") : element.target.setAttribute("class","dayMarkerClassSelected");
	}

	// events
	this.monthDecrement.addEventListener("click",this.modifCalendary);
	this.monthIncrement.addEventListener("click",this.modifCalendary);

}

//var calendary = new Calendary();
//calendary.checkUser();
//calendary.hourPannel();
//calendary.calendaryTable();