let countryList = [
    {
        country: "Україна",
        capital:"Київ",
        count: 40000000,
    },
    {
        country: "Грузія",
        capital:"Тбілісі",
        count: 10000000
    },
    {
        country: "Великобританія",
        capital:"Лондон",
        count: 100000000

    },
    {
        country: "США",
        capital:"Вашингтон",
        count: 300000000
    }
    ];

function listOfCountry(arr) {

	for (let i = 0; i < arr.length; i++) {

		let ol = document.createElement("ol");

	    for (let key in arr[i]) {

		    let li = document.createElement("li");
		    let property = key;
		    let value = arr[i][key];
		    let million = 1000000;

			if (Number.isInteger(arr[i][key])) {
			      value = arr[i][key] / million + " млн";
			    }

	        li.innerHTML = `${property} - ${value}`;

	        if (arr[i][key] == "Україна") {
		     	li.style.color = "blue";
		    }
		    if (arr[i][key] == "Київ") {
		     	li.style.color = "yellow";
		    }
		    
	        ol.appendChild(li);
	    }  	
	    document.body.appendChild(ol);
	}
}

listOfCountry(countryList);

