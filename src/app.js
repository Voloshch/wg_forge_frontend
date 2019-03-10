// this is an example of improting data from JSON
//import 'orders' from '../data/orders.json';

//export default (function () {
    // YOUR CODE GOES HERE
    // next line is for example only
    //document.getElementById("app").innerHTML = "<h1>Hello WG Forge</h1>";
//}());

const xxhr=new XMLHttpRequest();
xxhr.open("GET", 'api/users.json', true);
var dataUser, ddd;
xxhr.onload=function(){
    dataUser= JSON.parse(this.responseText);
    ddd=this.responseText;
}
xxhr.send(null);
const xxxhr=new XMLHttpRequest();
xxxhr.open("GET", 'api/companies.json', true);
var dataCompanies;
xxxhr.onload=function(){
    dataCompanies= JSON.parse(this.responseText);
}
xxxhr.send(null);
var app=document.getElementById('app');

const xhr=new XMLHttpRequest();
xhr.open("GET", 'api/orders.json', true);
var data, flag=0, tbody=app.children[0].children[1], tr, a, aa, th, user={}, div, p, img, theadTr=app.children[0].children[0].children[0];

xhr.onload=function()
{
    data= JSON.parse(this.responseText);
    for (let i=0;i<data.length;i++){
    	tr=document.createElement('tr');
    	tbody.appendChild(tr);
    	for (let j=0;j<7;j++){
    		th=document.createElement('td');
    		switch(j){
    			case 0: th.innerHTML=data[i].transaction_id;
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			});

    			break;
    			case 1: user=loadUsers(data[i].user_id, dataUser, dataCompanies); a=document.createElement('a'); th.appendChild(a);a.setAttribute("href", "#"); a.innerHTML=user.name;
    			a.addEventListener('click', function(e){
    				e.preventDefault();
	                let div = this.nextSibling;
	                if(div.style.display == "none")div.style.display = "block";
	                else div.style.display = "none";
    			})
    			div=document.createElement('div'); th.appendChild(div);	div.setAttribute("class", "user-details"); div.style.display = "none"; 
    			for(let k=0;k<4;k++){
    				p=document.createElement('p');
    				switch(k){
    					case 0: var full_years=getYears(user.birthday);var months ={}, days={}, day, hours, minutes, seconds;//console.log(numb%4);
    			switch(full_years%4){
    				case 0: days=getDays(user.birthday, full_years%4, full_years);	day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 0);hours = getHMN(user.birthday);break;
    				case 1: days=getDays(user.birthday, full_years%4, full_years); day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 0);hours = getHMN(user.birthday);break;
    				case 2: days=getDays(user.birthday, full_years%4, full_years); day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 1);hours = getHMN(user.birthday);break;//visok
    				case 3: days=getDays(user.birthday, full_years%4, full_years); day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 0);hours = getHMN(user.birthday);break;
    			}
    			//console.log(String(months.numMonth).length);
    			if(String(months.remOfDays).length==1)months.remOfDays="0"+String(months.remOfDays);
    			if(String(months.numMonth).length==1)months.numMonth="0"+String(months.numMonth);
    			if(String(hours.hours).length==1)hours.hours="0"+String(hours.hours);
    			if(String(hours.minutes).length==1)hours.minutes="0"+String(hours.minutes);
    			if(String(hours.seconds).length==1)hours.seconds="0"+String(hours.seconds);


    					p.innerHTML=`Birthday: ${months.remOfDays}/${months.numMonth}/${1970+full_years}, ${hours.hours}:${hours.minutes}:${hours.seconds}  ${hours.format}`;break;
    					case 1: img=document.createElement('img'); p.appendChild(img); img.setAttribute("width", "100px"); img.setAttribute("src", `${user.avatar}`);break;
    					case 2: p.innerHTML=`Company: `; aa=document.createElement('a'); p.appendChild(aa); aa.setAttribute("href", `${user.href}`); aa.innerHTML=`${user.nameCompany}`;
    					aa.addEventListener('click', function(e){
    						e.preventDefault();
    						window.open(this.href);

    					})
    					break;
    					case 3: p.innerHTML=`Industry: ${user.nameIndustry}`;break;
    				}
    				div.appendChild(p);
    			}
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			});

    		    break;
    			case 2: var full_years=getYears(data[i].created_at);var months ={}, days={}, day, hours, minutes, seconds;//console.log(numb%4);
    			switch(full_years%4){
    				case 0: days=getDays(data[i].created_at, full_years%4, full_years);	day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 0);hours = getHMN(data[i].created_at);break;
    				case 1: days=getDays(data[i].created_at, full_years%4, full_years); day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 0);hours = getHMN(data[i].created_at);break;
    				case 2: days=getDays(data[i].created_at, full_years%4, full_years); day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 1);hours = getHMN(data[i].created_at);break;//visok
    				case 3: days=getDays(data[i].created_at, full_years%4, full_years); day=Number(days.dayInYears)+Number(days.dayOutYear);months=getMonths(days.dayOutYear, 0);hours = getHMN(data[i].created_at);break;
    			}
    			//console.log(String(months.numMonth).length);
    			if(String(months.remOfDays).length==1)months.remOfDays="0"+String(months.remOfDays);
    			if(String(months.numMonth).length==1)months.numMonth="0"+String(months.numMonth);
    			if(String(hours.hours).length==1)hours.hours="0"+String(hours.hours);
    			if(String(hours.minutes).length==1)hours.minutes="0"+String(hours.minutes);
    			if(String(hours.seconds).length==1)hours.seconds="0"+String(hours.seconds);
    			//console.log(months.remOfDays);
    			th.innerHTML=`${months.remOfDays}/${months.numMonth}/${1970+full_years}, ${hours.hours}:${hours.minutes}:${hours.seconds}  ${hours.format}`;
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			})
    			break;
    			case 3: th.innerHTML=data[i].total;
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			})
    			break;
    			case 4: let cardNumber=String(data[i].card_number), cardNum="";
    			for (let i=0;i<cardNumber.length;i++){
    				if(i<2||i>=cardNumber.length-4)cardNum=cardNum+String(cardNumber[i]);
    				else cardNum=cardNum+"*";
    			}
    			th.innerHTML=cardNum;
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			})
    			break;
    			case 5: th.innerHTML=data[i].card_type;
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			})
    			break;
    			case 6: th.innerHTML=`${data[i].order_country} (${data[i].order_ip})`;
    			theadTr.children[j].addEventListener('mouseover',function(){
    				this.style.cursor = 'pointer';
    			})

    			break;
    		}
    		tr.appendChild(th);
    	}
    }

};

xhr.send(null);

function getYears (data){
	return Math.floor(data/(60*60*24*365.25));
}
function getDays (data, rem, years){
	let numDayInYears=(years-rem)*365.25+365*rem;
	return {dayOutYear:Math.floor(data/(60*60*24)-numDayInYears),
		DayInYears:numDayInYears};
}
function getMonths (days, vis){
	let numOfMonth=1, dayInMonths=0;
	let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

	for (let i=0;i<months.length;i++){
		if(days-months[i]<0)break;
		if(i==1){days=days-months[i]-vis;dayInMonths=dayInMonths+months[i]+vis}
		else {days=days-months[i];dayInMonths=dayInMonths+months[i]}
		numOfMonth++;
	}
	return {
		numMonth: numOfMonth,
		remOfDays: days,
		dayInMonths:dayInMonths
	}
}
function getHMN (data){
	let format="";
	let hours = Math.floor(Math.floor(data-Math.floor(data/(3600*24))*3600*24)/3600);
	let minutes = Math.floor((Math.floor(data-Math.floor(data/(3600*24))*3600*24)-hours*3600)/60);
	let seconds = Math.floor((Math.floor(data-Math.floor(data/(3600*24))*3600*24)-hours*3600))-minutes*60;
	if(hours>12){
		hours=hours-12;
		format="PM";
	}else{
		format="AM";
	}
	return {hours: hours,
		minutes:minutes,
		seconds:seconds,
		format:format};
}

function loadUsers (userId, userData, dataCompanies){
	let user={};
	for (let i=0;i<userData.length;i++){
		//console.log(userData[i].id);
		if(userData[i].id==userId){
			if(userData[i].gender=="Male"){user.name=`Mr. ${userData[i].first_name} ${userData[i].last_name}`;}else{
				user.name=`Ms. ${userData[i].first_name} ${userData[i].last_name}`;
			}
			user.birthday=userData[i].birthday;
			user.avatar=userData[i].avatar;
			for (let j=0;j<dataCompanies.length;j++){
				if(userData[i].company_id==dataCompanies[j].id){
					user.href=dataCompanies[j].url;
					user.nameCompany=dataCompanies[j].title;
					user.nameIndustry=dataCompanies[j].industry;
					break;
				}
			}
			//console.log("VSE");
			break;
		}
	}
	return user;
}

	var tbody=app.children[0].children[0];
var thead=app.children[0].children[0].children[0];
window.onload = function() {
	function show(){
	var trID=[], trIDSort=[], userInfo=[],userInfoSort=[], ordDate=[], ordDateSort=[], ordAmount=[], ordAmountSort=[], cardType=[], cardTypeSort=[], loc=[], locSort=[]; 
	for (let i=1; i<tbody.children.length;i++){
		//console.log("11");
		for (let j=0;j<7;j++){
			switch(j){
				case 0:trID.push(tbody.children[i].children[j].innerHTML);break;
				case 1:userInfo.push(tbody.children[i].children[j].children[0].innerHTML.slice(4)); break;
				case 2:ordDate.push(tbody.children[i].children[j].innerHTML);break;
				case 3:ordAmount.push(tbody.children[i].children[j].innerHTML);break;
				case 5:cardType.push(tbody.children[i].children[j].innerHTML);break;
				case 6:loc.push(tbody.children[i].children[j].innerHTML);break;
			}
		}
	}
	var trIDSort=trID.slice().sort(), userInfoSort=userInfo.slice().sort(), ordDateSort=ordDate.slice().sort(), ordAmountSort=ordAmount.slice().sort(), cardTypeSort=cardType.slice().sort(), locSort=loc.slice().sort(); 
	for (let i=0;i<userInfoSort.length;i++){
		for (let j=i+1;j<userInfoSort.length;j++)
		if(userInfoSort[i]==userInfoSort[j]){
			userInfoSort.splice(j,1);
			j--;
		}
	}
	for (let i=0;i<cardTypeSort.length;i++){
		for (let j=i+1;j<cardTypeSort.length;j++)
		if(cardTypeSort[i]==cardTypeSort[j]){
			cardTypeSort.splice(j,1);
			j--;
		}
	}
	var tmp;
	for (let i=0;i<ordAmountSort.length;i++){
		for (let j=i+1;j<ordAmountSort.length;j++){
			if(Number(ordAmountSort[i])>Number(ordAmountSort[j])){//console.log(Number(ordAmountSort[i]));console.log(Number(ordAmountSort[j]));
			tmp=Number(ordAmountSort[i]);
			ordAmountSort[i]=Number(ordAmountSort[j]);
			ordAmountSort[j]=tmp;	
			//console.log(Number(ordAmountSort[i]));		
		    }
		}
	}

	for (let i=0;i<ordDateSort.length;i++){
		for (let j=i+1;j<ordDateSort.length;j++){
			//console.log(String(ordDateSort[i]).slice(6,10));
			if(Number(String(ordDateSort[i]).slice(6,10))>Number(String(ordDateSort[j]).slice(6,10))){//console.log(Number(ordAmountSort[i]));console.log(Number(ordAmountSort[j]));
			//console.log("11");
			tmp=ordDateSort[i];
			ordDateSort[i]=ordDateSort[j];
			ordDateSort[j]=tmp;	
			//console.log(Number(ordAmountSort[i]));		
		    }else if(Number(String(ordDateSort[i]).slice(6,10))==Number(String(ordDateSort[j]).slice(6,10))){
		    	if(Number(String(ordDateSort[i]).slice(3,5))>Number(String(ordDateSort[j]).slice(3,5))){
		    	tmp=ordDateSort[i];
			    ordDateSort[i]=ordDateSort[j];
			    ordDateSort[j]=tmp;	
			    }else if (Number(String(ordDateSort[i]).slice(3,5))==Number(String(ordDateSort[j]).slice(3,5))){
				    if (Number(String(ordDateSort[i]).slice(0,2))>Number(String(ordDateSort[j]).slice(0,2))){
					    tmp=ordDateSort[i];
			            ordDateSort[i]=ordDateSort[j];
			            ordDateSort[j]=tmp;	
				    }else if (Number(String(ordDateSort[i]).slice(0,2))==Number(String(ordDateSort[j]).slice(0,2))){
				    	//console.log(String(ordDateSort[j]).slice(21));
				    	if (String(ordDateSort[i]).slice(21)=="AM"&&String(ordDateSort[j]).slice(21)=="PM"){
				    		//console.log(String(ordDateSort[i]).slice(21));
				    		tmp=ordDateSort[i];
			                ordDateSort[i]=ordDateSort[j];
			                ordDateSort[j]=tmp;	
				    	}else if(String(ordDateSort[i]).slice(21)==String(ordDateSort[j]).slice(21)){
				    		//console.log("eded")
				    		if (Number(String(ordDateSort[i]).slice(12, 14))>Number(String(ordDateSort[j]).slice(12, 14))){
				    			tmp=ordDateSort[i];
			                    ordDateSort[i]=ordDateSort[j];
			                    ordDateSort[j]=tmp;	
				    		}
				    	}
				    }
			    }
		    }
		}
	}
//console.log(locSort);


	tbody.children[0].children[0].addEventListener('click',function(){
		if(this.children.length==0){
			for (let i=0;i<tbody.children[1].children.length;i++){
				if(tbody.children[1].children[i].children.length!=0)tbody.children[1].children[i].removeChild(tbody.children[1].children[i].children[0]);
			}
			let span=document.createElement("span");span.innerHTML="&#8595;"; this.appendChild(span);
			for (let i=0; i<trIDSort.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length;j++){
					if(tbody.children[j].children[0].innerHTML==trIDSort[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}else{
			this.removeChild(this.children[0]);
			for (let i=0; i<trID.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[0].innerHTML==trID[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}
	});

	tbody.children[0].children[1].addEventListener('click',function(){
		var flag=0;
		if(this.children.length==0){
			for (let i=0;i<tbody.children[1].children.length;i++){
				if(tbody.children[1].children[i].children.length!=0)tbody.children[1].children[i].removeChild(tbody.children[1].children[i].children[0]);
			}
			let span=document.createElement("span");span.innerHTML="&#8595;"; this.appendChild(span);

			for (let i=0; i<userInfoSort.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					//console.log(tbody.children[j].children[1].children[0].innerHTML);
					if(tbody.children[j].children[1].children[0].innerHTML.slice(4)==userInfoSort[i]){tbody.insertBefore(tbody.children[j], tbody.children[flag+2]);flag++}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}else{
			this.removeChild(this.children[0]);
			for (let i=0; i<trID.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[0].innerHTML==trID[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}

				}
			}
		}
	});

		tbody.children[0].children[2].addEventListener('click',function(){
		if(this.children.length==0){
			for (let i=0;i<tbody.children[1].children.length;i++){
				if(tbody.children[1].children[i].children.length!=0)tbody.children[1].children[i].removeChild(tbody.children[1].children[i].children[0]);
			}
			let span=document.createElement("span");span.innerHTML="&#8595;"; this.appendChild(span);
			for (let i=0; i<ordDateSort.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[2].innerHTML==ordDateSort[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}else{
			this.removeChild(this.children[0]);
			for (let i=0; i<trID.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[0].innerHTML==trID[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}
	});

	tbody.children[0].children[3].addEventListener('click',function(){
		if(this.children.length==0){
			for (let i=0;i<tbody.children[1].children.length;i++){
				if(tbody.children[1].children[i].children.length!=0)tbody.children[1].children[i].removeChild(tbody.children[1].children[i].children[0]);
			}
			//console.log(ordAmountSort);
			let span=document.createElement("span");span.innerHTML="&#8595;"; this.appendChild(span);
			for (let i=0; i<ordAmountSort.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[3].innerHTML==ordAmountSort[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
				}
			}
		}else{
			this.removeChild(this.children[0]);
			for (let i=0; i<trID.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[0].innerHTML==trID[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
				}
			}
		}
	});

tbody.children[0].children[5].addEventListener('click',function(){
		var flag=0;
		if(this.children.length==0){
			for (let i=0;i<tbody.children[1].children.length;i++){
				if(tbody.children[1].children[i].children.length!=0)tbody.children[1].children[i].removeChild(tbody.children[1].children[i].children[0]);
			}
			let span=document.createElement("span");span.innerHTML="&#8595;"; this.appendChild(span);

			for (let i=0; i<cardTypeSort.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					//console.log(tbody.children[j].children[1].children[0].innerHTML);
					if(tbody.children[j].children[5].innerHTML==cardTypeSort[i]){tbody.insertBefore(tbody.children[j], tbody.children[flag+2]);flag++}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}else{
			this.removeChild(this.children[0]);
			for (let i=0; i<trID.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[0].innerHTML==trID[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}
	});

tbody.children[0].children[6].addEventListener('click',function(){
		if(this.children.length==0){
			for (let i=0;i<tbody.children[1].children.length;i++){
				if(tbody.children[1].children[i].children.length!=0)tbody.children[1].children[i].removeChild(tbody.children[1].children[i].children[0]);
			}
			//console.log(tbody.children[1].children[6].children);
			let span=document.createElement("span");span.innerHTML="&#8595;"; this.appendChild(span);
			for (let i=0; i<locSort.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[6].innerHTML==locSort[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}else{
			this.removeChild(this.children[0]);
			for (let i=0; i<trID.length;i++){
				//console.log("11");
				for (let j=2; j<tbody.children.length-6;j++){
					if(tbody.children[j].children[0].innerHTML==trID[i]){tbody.insertBefore(tbody.children[j], tbody.children[i+2]);  break;}
					//console.log(tbody.children[j].children[0].innerHTML);
					//console.log("11");
				}
			}
		}
	});


var trSearch, thNameSearch, thInput, inputSearch, numOrder=0, ordersTotal=0, trOrdersTotal, trOrder, tdNameOrder, tdNumOrder;
for (let i=1;i<tbody.children.length;i++){
	numOrder++;
	//console.log(tbody.children[i].children[3].innerHTML);
	ordersTotal=ordersTotal+Number(tbody.children[i].children[3].innerHTML);
}

trSearch=document.createElement("tr");
thNameSearch=document.createElement("th");
thNameSearch.innerHTML="Search:";
thNameSearch.setAttribute("colspan", "4");
thInput=document.createElement("th");
thInput.setAttribute("colspan", "3");
inputSearch=document.createElement("input");
inputSearch.setAttribute("type", "text");
inputSearch.setAttribute("id", "search");
thInput.appendChild(inputSearch);
trSearch.appendChild(thNameSearch);
trSearch.appendChild(thInput);
tbody.insertBefore(trSearch, tbody.children[0]);
search.addEventListener("keyup", function(){
	var fl=0;
	//if(search.value.length==0)loadData();
	trID=[], userInfo=[], ordDate=[], ordAmount=[], cardType=[], loc=[];
		for (let i=2; i<tbody.children.length-6;i++){

		//console.log(tbody.children[i]);
		for (let j=0;j<7;j++){
			//console.log(String(tbody.children[i].children[j].innerHTML));
			switch(j){
				case 0:if(String(tbody.children[i].children[j].innerHTML).includes(String(search.value)))trID.push(tbody.children[i].children[j].innerHTML);break;
				case 1:if(String(tbody.children[i].children[j].children[0].innerHTML.slice(4)).includes(String(search.value)))userInfo.push(tbody.children[i].children[j].children[0].innerHTML.slice(4)); console.log(tbody.children[i].children[j].children[0].innerHTML.slice(4)); break;
				case 2:if(String(tbody.children[i].children[j].innerHTML).includes(String(search.value)))ordDate.push(tbody.children[i].children[j].innerHTML);break;
				case 3:if(String(tbody.children[i].children[j].innerHTML).includes(String(search.value)))ordAmount.push(tbody.children[i].children[j].innerHTML);break;
				case 5:if(String(tbody.children[i].children[j].innerHTML).includes(String(search.value)))cardType.push(tbody.children[i].children[j].innerHTML);break;
				case 6:if(String(tbody.children[i].children[j].innerHTML).includes(String(search.value)))loc.push(tbody.children[i].children[j].innerHTML);break;
			}
		}
	}
	//console.log(trID);console.log(userInfo);console.log(ordDate);console.log(ordAmount);console.log(cardType);console.log(loc);
	for (let j=0;j<7;j++){
		for (let i=2; i<tbody.children.length-6;i++){
			switch(j){
				case 0:if(String(tbody.children[i].children[j].innerHTML)==trID[j])tbody.insertBefore(tbody.children[i], tbody.children[3+fl]); fl++; break;
				case 1:if(tbody.children[i].children[j].children[0].innerHTML.slice(4)==userInfo[j])tbody.insertBefore(tbody.children[i], tbody.children[3+fl]); fl++;  console.log(tbody.children[i].children[j].children[0].innerHTML.slice(4));break;
				case 2:if(String(tbody.children[i].children[j].innerHTML)==ordDate[j])tbody.insertBefore(tbody.children[i], tbody.children[3+fl]); fl++; break;
				case 3:if(String(tbody.children[i].children[j].innerHTML)==ordAmount[j])tbody.insertBefore(tbody.children[i], tbody.children[3+fl]); fl++; break;
				case 5:if(String(tbody.children[i].children[j].innerHTML)==cardType[j])tbody.insertBefore(tbody.children[i], tbody.children[3+fl]); fl++; break;
				case 6:if(String(tbody.children[i].children[j].innerHTML)==loc[j])tbody.insertBefore(tbody.children[i], tbody.children[3+fl]); fl++; break;
			}
		}
	//console.log(trID);
}
})
let trMedian, trCheck, trAmountMale, trAmountFemale;
trOrder=document.createElement("tr");
tdNameOrder=document.createElement("td");
tdNameOrder.innerHTML="Orders Count";
tdNameOrder.setAttribute("colspan", "3");
tdNumOrder=document.createElement("td");
tdNumOrder.innerHTML=`${numOrder}`;
tdNumOrder.setAttribute("colspan", "4");
tbody.appendChild(trOrder);
trOrder.appendChild(tdNameOrder);
trOrder.appendChild(tdNumOrder);
trOrder=document.createElement("tr");
tdNameOrder=document.createElement("td");
tdNameOrder.innerHTML="Orders Total";
tdNameOrder.setAttribute("colspan", "3");
tdNumOrder=document.createElement("td");
tdNumOrder.innerHTML=`${ordersTotal}`;
tdNumOrder.setAttribute("colspan", "4");
tbody.appendChild(trOrder);
trOrder.appendChild(tdNameOrder);
trOrder.appendChild(tdNumOrder);
trMedian=document.createElement("tr");
tdNameOrder=document.createElement("td");
tdNameOrder.innerHTML="Median Value";
tdNameOrder.setAttribute("colspan", "3");
tdNumOrder=document.createElement("td");
//tdNumOrder.innerHTML=`${numOrder}`;
let orderAmount=[];
for (let i=2; i<tbody.children.length-2;i++){
	orderAmount.push(Number(tbody.children[i].children[3].innerHTML));
}

for (let i=0;i<orderAmount.length;i++){
	for (let j=i+1;j<orderAmount.length;j++){
		if(Number(orderAmount[i])>Number(orderAmount[j])){//console.log(Number(ordAmountSort[i]));console.log(Number(ordAmountSort[j]));
		tmp=Number(orderAmount[i]);
		orderAmount[i]=Number(orderAmount[j]);
		orderAmount[j]=tmp;	
		//console.log(Number(ordAmountSort[i]));		
		}
	}
}
if(orderAmount.length%2==0)tdNumOrder.innerHTML=(orderAmount[orderAmount.length/2-1]+orderAmount[orderAmount.length/2])/2;
else tdNumOrder.innerHTML=orderAmount[Math.floor(orderAmount.length/2)];
tdNumOrder.setAttribute("colspan", "4");
tbody.appendChild(trMedian);
trMedian.appendChild(tdNameOrder);
trMedian.appendChild(tdNumOrder);

trCheck=document.createElement("tr");
tdNameOrder=document.createElement("td");
tdNameOrder.innerHTML="Average Check";
tdNameOrder.setAttribute("colspan", "3");
tdNumOrder=document.createElement("td");
tdNumOrder.innerHTML=ordersTotal/orderAmount.length;
tdNumOrder.setAttribute("colspan", "4");
tbody.appendChild(trCheck);
trCheck.appendChild(tdNameOrder);
trCheck.appendChild(tdNumOrder);
let flagFemale=0, flagMale=0, amountFemale=0, amountMale=0;
for (let i=2; i<tbody.children.length-4;i++){
	//console.log(tbody.children[i].children[1].children[0]);
	if(tbody.children[i].children[1].children[0].innerHTML.slice(1,2)=="r"){flagMale++;
        amountMale=amountMale+Number(tbody.children[i].children[3].innerHTML);
	}else {flagFemale++;
        amountFemale=amountFemale+Number(tbody.children[i].children[3].innerHTML);}
}
console.log(amountMale);

trAmountFemale=document.createElement("tr");
tdNameOrder=document.createElement("td");
tdNameOrder.innerHTML="Average Check (Female)";
tdNameOrder.setAttribute("colspan", "3");
tdNumOrder=document.createElement("td");
tdNumOrder.innerHTML=amountFemale/flagFemale;
tdNumOrder.setAttribute("colspan", "4");
tbody.appendChild(trAmountFemale);
trAmountFemale.appendChild(tdNameOrder);
trAmountFemale.appendChild(tdNumOrder);

trAmountMale=document.createElement("tr");
tdNameOrder=document.createElement("td");
tdNameOrder.innerHTML="Average Check (Male)";
tdNameOrder.setAttribute("colspan", "3");
tdNumOrder=document.createElement("td");
tdNumOrder.innerHTML=amountMale/flagMale;
tdNumOrder.setAttribute("colspan", "4");
tbody.appendChild(trAmountMale);
trAmountMale.appendChild(tdNameOrder);
trAmountMale.appendChild(tdNumOrder);

}
setTimeout(show,0);
};