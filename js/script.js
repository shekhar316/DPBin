// Array of bins 
var dustbins = [];

// number of bins or set size
var totalBins = 0;

// timer 
var timer = 0;

// time scale
var timeScale = 1;

// days
var days = 0;


// Random Interger Between Range
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Random Float Between Range
function randomFloatFromInterval(min, max) {
    return Math.random() * (max - min) + min;
}



function createBins(){
    let n = prompt("Enter the number of bins: ");
    let t = prompt("Enter time scale x (1 hour = x seconds): ");
    totalBins = n;
    timeScale = t;

    for(i = 0; i < n; i++){
        // creating object bin
        var bin = {
            id : i+1,
            filledLevel: 0,
            odorLevel: 0,
            importanceOfLocation: 0,
            lastService: -1,
            averageGarbageGenerationRate: 0,
            priortyIndex: 0,
            sim_frequency: 0,
            sim_total_services: 0,
            sim_rateForGarbage: 0,
            sim_rateForOdor: 0,
            sim_locationLabel: randomIntFromInterval(1,3),
            locationFactors : {
                 livingStandard : 0,
                 populationDensity : 0,
                 isPremiumPlace : 0,
                 isMarket : 0,
                 isIndustry : 0,
            },
        }

        dustbins.push(bin);
    }

    console.log(dustbins);
    setLocationImportanceRandomly();
    loadTable();
}


function setLocationImportanceRandomly(){
    var values = [0,10,20];

    for (var i = 0; i < totalBins; i++) {
         var v1 = values[randomIntFromInterval(0,2)];
         var v2 = values[randomIntFromInterval(0,2)];
         var v3 = values[randomIntFromInterval(0,2)];
         var v4 = values[randomIntFromInterval(0,2)];
         var v5 = values[randomIntFromInterval(0,2)];
         dustbins[i].locationFactors.livingStandard = v1;
         dustbins[i].locationFactors.populationDensity = v2;
         dustbins[i].locationFactors.isPremiumPlace = v3;
         dustbins[i].locationFactors.isMarket = v4;
         dustbins[i].locationFactors.isIndustry = v5;
         dustbins[i].importanceOfLocation = v1 + v2 + v3 + v4 + v5;
    }
}



function loadTable(){
    var html = "";
    rowID = 1;
       for (var i = 0; i < totalBins; i++) {
           
               html+="<tr id = row" + rowID + " >";
               html+="<td id = '" + rowID + "col1' >"+dustbins[i].id+"</td>";
               html+="<td id = '" + rowID + "col2' >"+Math.floor(dustbins[i].filledLevel)+"</td>";
               html+="<td id = '" + rowID + "col3' >"+Math.floor(dustbins[i].odorLevel)+"</td>";
               html+="<td id = '" + rowID + "col4' >"+dustbins[i].lastService+"</td>";
               html+="<td id = '" + rowID + "col5' >"+dustbins[i].sim_total_services+"</td>";
               html+="<td id = '" + rowID + "col6' >"+dustbins[i].importanceOfLocation+"</td>";
               html+="<td id = '" + rowID + "col7' >"+dustbins[i].priortyIndex.toFixed(2)+"</td>";

           rowID++;
           html+="</tr>";
       }
       html += "";

       document.getElementById("dataBox").innerHTML = html;

       document.getElementById("clock").innerText = "Time: " + timer + " Hours\n" + "Days: " + days;
       
}



function loadData(){
    rowID = 1;
       for (var i = 0; i < totalBins; i++) {
           if(dustbins[i].priortyIndex >= 50){
               var id1 = rowID + "col1";
               var id2 = rowID + "col2";
               var id3 = rowID + "col3";
               var id4 = rowID + "col4";
               var id5 = rowID + "col5";
               var id6 = rowID + "col6";
               var id7 = rowID + "col7";
               document.getElementById('row' + rowID).classList.add("table-danger");
               document.getElementById(id1).innerText = dustbins[i].id;
               document.getElementById(id2).innerText = Math.floor(dustbins[i].filledLevel);
               document.getElementById(id3).innerText = Math.floor(dustbins[i].odorLevel);
               document.getElementById(id4).innerText = dustbins[i].lastService;
               document.getElementById(id5).innerText = dustbins[i].sim_total_services;
               document.getElementById(id6).innerText = dustbins[i].importanceOfLocation;
               document.getElementById(id7).innerText = dustbins[i].priortyIndex.toFixed(2);

           }else if(dustbins[i].priortyIndex >= 40){
            var id1 = rowID + "col1";
            var id2 = rowID + "col2";
            var id3 = rowID + "col3";
            var id4 = rowID + "col4";
            var id5 = rowID + "col5";
            var id6 = rowID + "col6";
            var id7 = rowID + "col7";
            document.getElementById('row' + rowID).classList.add("table-warning");
            document.getElementById(id1).innerText = dustbins[i].id;
            document.getElementById(id2).innerText = Math.floor(dustbins[i].filledLevel);
            document.getElementById(id3).innerText = Math.floor(dustbins[i].odorLevel);
            document.getElementById(id4).innerText = dustbins[i].lastService;
            document.getElementById(id5).innerText = dustbins[i].sim_total_services;
               document.getElementById(id6).innerText = dustbins[i].importanceOfLocation;
               document.getElementById(id7).innerText = dustbins[i].priortyIndex.toFixed(2);


           }else{
            document.getElementById('row' + rowID).classList.remove("table-warning");
            document.getElementById('row' + rowID).classList.remove("table-danger");

            var id1 = rowID + "col1";
            var id2 = rowID + "col2";
            var id3 = rowID + "col3";
            var id4 = rowID + "col4";
            var id5 = rowID + "col5";
            var id6 = rowID + "col6";
            var id7 = rowID + "col7";
            document.getElementById(id1).innerText = dustbins[i].id;
            document.getElementById(id2).innerText = Math.floor(dustbins[i].filledLevel);
            document.getElementById(id3).innerText = Math.floor(dustbins[i].odorLevel);
            document.getElementById(id4).innerText = dustbins[i].lastService;
            document.getElementById(id5).innerText = dustbins[i].sim_total_services;
            document.getElementById(id6).innerText = dustbins[i].importanceOfLocation;
            document.getElementById(id7).innerText = dustbins[i].priortyIndex.toFixed(2);

           }
           rowID++;
       }
       
       document.getElementById("clock").innerText = "Time: " + timer + " Hours\n" + "Days: " + days;
    //    destroyDatatable();
    //    datatable();

       
}

function initiate(){
    createBins();
}

var changeDustID = 0;

function showImportanceData(){
    changeDustID = Number(document.getElementById("changeID").value);
    changeDustID = changeDustID - 1;
    loadImportanceData();
}


function loadImportanceData(){
    document.getElementById("livingStandardLabel").innerText = "Living Standard: " + dustbins[changeDustID].locationFactors.livingStandard;
    document.getElementById("populationDensityLabel").innerText = "population Density: " + dustbins[changeDustID].locationFactors.populationDensity;
    document.getElementById("isPremiumPlaceLabel").innerText = "Premium Place Score: " + dustbins[changeDustID].locationFactors.isPremiumPlace;
    document.getElementById("isMarketLabel").innerText = "Market Score: " + dustbins[changeDustID].locationFactors.isMarket;
    document.getElementById("isIndustryLabel").innerText = "Industry Score: " + dustbins[changeDustID].locationFactors.isIndustry;
    document.getElementById("importanceOfLocationLabel").innerHTML = "<b>Total Importance</b>: " + dustbins[changeDustID].importanceOfLocation;
}


function updateImportanceData(){
    var e = document.getElementById("i1");
    dustbins[changeDustID].locationFactors.livingStandard = e.value;
    e = document.getElementById("i2");
    dustbins[changeDustID].locationFactors.populationDensity = e.value;
    e = document.getElementById("i3");
    dustbins[changeDustID].locationFactors.isPremiumPlace = e.value;
    e = document.getElementById("i4");
    dustbins[changeDustID].locationFactors.isMarket = e.value;
    e = document.getElementById("i5");
    dustbins[changeDustID].locationFactors.isIndustry = e.value;

    var u1 = Number(dustbins[changeDustID].locationFactors.livingStandard);
    var u2 = Number(dustbins[changeDustID].locationFactors.populationDensity);
    var u3 = Number(dustbins[changeDustID].locationFactors.isPremiumPlace);
    var u4 = Number(dustbins[changeDustID].locationFactors.isMarket);
    var u5 = Number(dustbins[changeDustID].locationFactors.isIndustry);

    dustbins[changeDustID].importanceOfLocation = u1 + u2 + u3 + u4 + u5;
    loadImportanceData();
    loadData();
}





function simulate(){
    
    for(var i = 0; i < totalBins; i++){
         if(dustbins[i].sim_locationLabel == 1){
              dustbins[i].sim_rateForGarbage = randomFloatFromInterval(0,5);
              dustbins[i].sim_rateForOdor = randomFloatFromInterval(0,5);
         }else if(dustbins[i].sim_locationLabel == 2){
              if(timer > 6 && timer < 17){
                   dustbins[i].sim_rateForGarbage = randomFloatFromInterval(2,4);
                   dustbins[i].sim_rateForOdor = randomFloatFromInterval(2,4);
              }else{
                   dustbins[i].sim_rateForGarbage = randomFloatFromInterval(0,2);
                   dustbins[i].sim_rateForOdor = randomFloatFromInterval(0,2);
              }
         }else if(dustbins[i].sim_locationLabel == 3){
              if(timer > 5 && timer < 24){
                   dustbins[i].sim_rateForGarbage = randomFloatFromInterval(3,6);
                   dustbins[i].sim_rateForOdor = randomFloatFromInterval(3,6);
              }else{
                   dustbins[i].sim_rateForGarbage = randomFloatFromInterval(1,3);
                   dustbins[i].sim_rateForOdor = randomFloatFromInterval(1,3);
              }
         }

       dustbins[i].filledLevel = dustbins[i].filledLevel + ((100 * dustbins[i].sim_rateForGarbage)/100);
       dustbins[i].odorLevel = dustbins[i].odorLevel + ((100 * dustbins[i].sim_rateForOdor)/100);
       if(dustbins[i].filledLevel > 101){
           dustbins[i].filledLevel = 101;
       }
       if(dustbins[i].odorLevel > 100){
           dustbins[i].odorLevel = 100;
       }
       console.log("Rate: "+ dustbins[i].sim_rateForGarbage);
   }

   setPriority();
   timer += 1;
   if(timer > 24){
        timer = 0;
        days = days + 1;
   }

   loadData();
}

function setPriority(){
    for(var j = 0; j < totalBins; j++){
        var f1 = dustbins[j].filledLevel;
        var f2 = dustbins[j].odorLevel;
        var f3 = dustbins[j].importanceOfLocation;
        var f4 = dustbins[j].lastService;
        var f5 = dustbins[j].sim_rateForGarbage;
        dustbins[j].priortyIndex = ((f1 * 5) + (f2 * 4) + (f3 * 3) + (f4 * 5) + (f5 * 4))/ 15;
    }
}


function startEx(){
    st = setInterval("simulate()", timeScale * 1000);
}

function eventAtID(){
    var id = prompt("Enter the dustbin id: ");
    id = id - 1;
    dustbins[id].filledLevel += randomIntFromInterval(10,35);
    dustbins[id].odorLevel += randomIntFromInterval(10,35);

    if(dustbins[id].filledLevel >= 101){
        dustbins[id].filledLevel = 101;
    }
    if(dustbins[id].odorLevel >= 100){
        dustbins[id].odorLevel = randomIntFromInterval(90,100);
    }
}


function serviceDust(){
    var idS = prompt("Enter the dustbin id: ");
    idS = idS -1;
    dustbins[idS].filledLevel = randomIntFromInterval(0,2);
    dustbins[idS].odorLevel = randomIntFromInterval(1,5);
    dustbins[idS].sim_total_services += 1;
    dustbins[idS].lastService = days;
}


function serviceDustAll(){
    for(var i = 0; i < totalBins; i++){
    dustbins[i].filledLevel = randomIntFromInterval(0,2);
    dustbins[i].odorLevel = randomIntFromInterval(1,5);
    dustbins[i].sim_total_services += 1;
    dustbins[i].lastService = days;
    }
    
}

function serviceDustAll40(){
    for(var i = 0; i < totalBins; i++){
        if(dustbins[i].priortyIndex >= 40){
            dustbins[i].filledLevel = randomIntFromInterval(0,2);
            dustbins[i].odorLevel = randomIntFromInterval(1,5);
            dustbins[i].sim_total_services += 1;
            dustbins[i].lastService = days;
        }
    }
}

function serviceDustAll50(){
    for(var i = 0; i < totalBins; i++){
        if(dustbins[i].priortyIndex >= 50){
            dustbins[i].filledLevel = randomIntFromInterval(0,2);
            dustbins[i].odorLevel = randomIntFromInterval(1,5);
            dustbins[i].sim_total_services += 1;
            dustbins[i].lastService = days;
        }
    }
}

function costAt40(){
    var count = 0;
    for(var i = 0; i < totalBins; i++){
        if(dustbins[i].priortyIndex >= 40){
            count++;
        }
    }
    var reduction = 100 - ((count/totalBins) * 100);
    alert("The cost is reduced by " + reduction + "%. If cost of serving 1 dustbin is 1 unit and threshold is 40 for Priority Index.");
}



function countOverflow(){
    var countO = 0;
    for(var i = 0; i < totalBins; i++){
        if(dustbins[i].filledLevel == 101){
            countO++;
        }
    }
    alert("Total number of Overflown Dustbins: " + countO);
}


function count90plus(){
    var count90plus = 0;
    for(var i = 0; i < totalBins; i++){
        if(dustbins[i].filledLevel >= 90){
            count90plus++;
        }
    }
    alert("Total number of Dustbins filled more than 90%: " + count90plus);
}

function count50less(){
    var count50less = 0;
    for(var i = 0; i < totalBins; i++){
        if(dustbins[i].filledLevel < 50){
            count50less++;
        }
    }
    alert("Total number of Dustbins filled less than 50%: " + count50less);
}
// function costAt50(){
//     var count2 = 0;
//     for(var i = 0; i < totalBins; i++){
//         if(dustbins[i].priortyIndex > 50){
//             count2++;
//         }
//     }
//     var reduction = 100 - ((count2/totalBins) * 100);
//     alert("The cost is reduced by " + reduction + "%. If cost of serving 1 dustbin is 1 unit and threshold is 50 for Priority Index.");
// }

function datatable(){
    $('#myTable').DataTable({
       "lengthMenu": [ [10, 25, 50, 100, 250, 500, 1000, -1], [10, 25, 50, 100, 250, 500, 1000, "All"] ]
     });
}

function destroyDatatable(){
    clearInterval(st);
    $('#myTable').DataTable().destroy();
    loadData();
    datatable();
}