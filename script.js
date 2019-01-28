function drawbubble(id,PrivateWork,PublicWork,selfEmployed,FamilyWork){
	
	var salesData=[
	{label:"Basic", color:"#3366CC", value: PrivateWork},
	{label:"Plus", color:"#DC3912",value :PublicWork},
	{label:"Lite", color:"#FF9900", value:selfEmployed},
	{label:"Elite", color:"#109618",value:FamilyWork}
];

var svg = d3.select("#det2").append("svg").attr("width",600).attr("height",300);

svg.selectAll("g").remove();

svg.append("g").attr("id","salesDonut");


Donut3D.draw("salesDonut", randomData(), 100, 100, 100, 100, 30,0.3);
	

function randomData(){
	return salesData.map(function(d){ 
		return {label:d.label, value:d.value, color:d.color};});
}
	
}



function drawcommute(id,drive,carpool,transit,walk,othertransport){
       var pieObjects=[
            {
                key: "drive",
                value: drive,

            },
            {
                key: "carpool",
                value: carpool,
            },
						{
								key: "transit",
								value: transit,
						},
						{
								key: "walk",
								value: walk,
						},
						{
								key: "othertransport",
								value: othertransport,
						}];
        for(i=0;i<pieObjects.length;i++){
            if (isNaN(pieObjects.value))
                pieObjects.value=0;
              }


        var outerWidth = 300;
        var outerHeight = 300;
        var margin = { left: 10, top: 10, right: 10, bottom: 10 };
        var innerWidth  = outerWidth  - margin.left - margin.right;
        var innerHeight = outerHeight - margin.top  - margin.bottom;

        var radius = Math.min(innerHeight, innerWidth) /2;

        var colorScale = d3.scale.ordinal()
                    .range(["lightseagreen","khaki","lightsalmon","lightskyblue","lightpink",]);



        // select SVG element on the DOM
        var svg1 = d3.select("#det4")
            .attr("width", outerWidth)
            .attr("height", outerHeight);

						var arc = d3.svg.arc()
		            .outerRadius(radius * 0.8)
		            .innerRadius(radius * 0.5);

		        var labelArc = d3.svg.arc()
		            .outerRadius(radius - 50)
		            .innerRadius(radius - 50);

		        var pie = d3.layout.pie()
		            .sort(null)
		            .value(function (d) {
		                return d.value;
		            });

        svg1.selectAll("g").remove();

        // add group
        var group=svg1.append("g").attr("transform", "translate("+outerWidth/2+","+ outerHeight/2+")");;

        var slice =group.selectAll(".arc")
            .data(pie(pieObjects))
            .enter().append("g")
            .attr("class", "arc").append("path")
						.style("fill", function (d) {
							console.log(colorScale(d.data.key))
							return colorScale(d.data.key);
						}).attr("d",arc);

      //  slice




        var div = d3.select("body").append("div").attr("class", "toolTip");
        slice
            .on("mousemove", function(d){
                div.style("left", d3.event.pageX+10+"px");
                div.style("top", d3.event.pageY-25+"px");
                div.style("display", "inline-block");
                div.html((d.data.key)+"<br>"+(d3.format(".2s")(d.data.value))+"%");
            });
        slice
            .on("mouseout", function(d){
                div.style("display", "none");
            });

        var legendRectSize = radius * 0.05;
        var legendSpacing =  radius * 0.05;

        var legend = group.selectAll('.legend')
            .data(colorScale.domain())
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function(d, i) {
                var height = legendRectSize + legendSpacing;
                var offset =  height * colorScale.domain().length / 2;
                var horz = -8 * legendRectSize;
                var vert = i * height - offset;
                return 'translate(' + horz + ',' + vert + ')';
            });

        legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
						.attr('x', 5+legendRectSize + legendSpacing)
            .attr('y',(legendRectSize - legendSpacing+legendRectSize/2)-8)
            .style('fill', colorScale)
            .style('stroke', colorScale);

        legend.append('text')
            .attr('x', 15+legendRectSize + legendSpacing)
            .attr('y', legendRectSize - legendSpacing+legendRectSize/2)
            .attr('class', 'legendText')
            .text(function(d) { return d; });



}
function drawIncomeToPovertyBarChart(id,professional,service,office,construction,production) {
	
  var professional = parseFloat(professional);
  var service = parseFloat(service);
  var office = parseFloat(office);
  var construction = parseFloat(construction);
  var production = parseFloat(production);

  var total = professional+service+office+construction+production;
        var barObjects = [
            {
                key: "professional",
                value: professional,
                percent:professional/total

            },
            {
                key: "service",
                value: service,
                percent: service/total

            },
            {
                key: "office",
                value:office,
                percent:office/ total

            },
            {
                key: "construction",
                value: construction,
                percent: construction / total

            },
            {
                key: "production",
                value: production,
                percent:production/ total

            }];

        for(i=0;i<barObjects.length;i++){
            if (isNaN(barObjects.value))
                barObjects.value=0;
        }





        /* BEFORE DATA */
        // chart size
        var outerWidth = 300;
        var outerHeight = 300;
        var margin = { left: 30, top: 30, right: 20, bottom: 90 };
        var innerWidth  = outerWidth  - margin.left - margin.right;
        var innerHeight = outerHeight - margin.top  - margin.bottom;
        var innerHeightOffset = innerHeight+1;

        var xAxisLabelText = "Employment Stream";
        var xAxisLabelOffset = 35;

        var yAxisLabelText = "% of People";
        var yAxisLabelOffset = 10;

/*		var tip = d3.tip()
				.attr('class', 'd3-tip')
				.offset([-10, 0])
				.html(function(d) {
				return "<strong>Frequency:</strong> <span style='color:red'>" + d.value + "</span>";
  })*/


        // Select SVG element on the DOM
        var SVG = d3.select("#det1").attr("width",outerWidth).attr("height",outerHeight);
        // Remove previous line charts
        SVG.selectAll("g").remove();
        //  Bar chart group
        var group=SVG.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        //  xAxis Group
        var xAxisG=group.append("g").attr('class', 'axis').attr('transform', "translate(0," + innerHeightOffset + ")");
        // yAxis Group
        var yAxisG= group.append("g").attr('class', 'axis').attr('transform', 'translate(-2,0)');

        var xAxisLabel = xAxisG.append("text")
            .style("text-anchor", "middle")
            .attr("x", innerWidth/2)
            .attr("y", xAxisLabelOffset)
            .attr("class", "label")
            .attr("id","xlabel")
            .text(xAxisLabelText)

        var yAxisLabel = yAxisG.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + yAxisLabelOffset + "," + (innerHeight/4) + ") rotate(-90)")
            .attr("class", "label")
            .text(yAxisLabelText);


        // create axis scale: Pixel Space
        var xOrdinalScale =d3.scale.ordinal().rangeBands([0, innerWidth], 0.05);
        var yScale = d3.scale.linear().range([innerHeight, 0]);



        // define x and y axis
        var xAxis = d3.svg.axis().scale(xOrdinalScale).orient('bottom');
        var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format(".2s"))
            .outerTickSize(0);


        xOrdinalScale.domain(barObjects.map(function(d) {

		return d.key; }));
        yScale.domain([0, d3.max(barObjects, function(d) {

		return d.value; })]);


        xAxisG.call(xAxis).selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                return "rotate(-65)"
            });

        d3.select("#xlabel").style("text-anchor", "middle")
            .attr("x", innerWidth/2)
            .attr("y", 70)
            .attr("transform","rotate(1.5)");
           // .attr("transform", "translate(" + yAxisLabelOffset + "," + (innerHeight/4) + ") rotate(-90)")


        yAxisG.call(yAxis);

        // Bind Data
        var bars= group.selectAll("rect").data(barObjects);

        // Enter
        bars.enter().append('rect')
            .attr("class", "bar");


        // figure out the width of individual bars
        var barWidth = innerWidth / 5;

		//tip
		var div = d3.select("body").append("div").attr("class", "toolTip");
        // Update
        bars.attr("x", function(d, i) {  return i*barWidth})
            .attr("y", function(d, i) {  return yScale(d.value);})
            .attr("width", barWidth)
            .attr("height", function(d) { return innerHeight - yScale(d.value); });
		bars.on('mouseover',function(d){
				div.style("left", d3.event.pageX+10+"px");
                div.style("top", d3.event.pageY-25+"px");
                div.style("display", "inline-block");

                div.html((d.value)+"%");
			})
            .on('mouseout', function(d){
				div.style("display", "none");
			});

        // Exit
        bars.exit().remove();
       // console.log("data:"+ data);
}

function valueFormat(d) {
    if (d > 1000000000) {
      return Math.round(d / 1000000000 * 10) / 10 + "B";
    } else if (d > 1000000) {
      return Math.round(d / 1000000 * 10) / 10 + "M";
    } else if (d > 1000) {
      return Math.round(d / 1000 * 10) / 10 + "K";
    } else {
      return d;
    }
  }
function drawAllMaps(stateid,state,male,female){
       var total = parseInt(male)+parseInt(female)
       var pieObjects=[
            {
                key: "Male",
                value: male,
                percent: parseInt(male)/total

            },
            {
                key: "Female",
                value: female,
                percent: parseInt(female) /total

            }];
        for(i=0;i<pieObjects.length;i++){
            if (isNaN(pieObjects.value))
                pieObjects.value=0;
              }


        var outerWidth = 300;
        var outerHeight = 300;
        var margin = { left: 10, top: 10, right: 10, bottom: 10 };
        var innerWidth  = outerWidth  - margin.left - margin.right;
        var innerHeight = outerHeight - margin.top  - margin.bottom;

        var radius = Math.min(innerHeight, innerWidth) /2;

        var colorScale = d3.scale.ordinal()
                    .range(["darkslateblue","Hotpink"]);



        // select SVG element on the DOM
        var svg1 = d3.select("#det5")
            .attr("width", outerWidth)
            .attr("height", outerHeight);

						var arc = d3.svg.arc()
		            .outerRadius(radius * 0.8)
		            .innerRadius(radius * 0.5);

		        var labelArc = d3.svg.arc()
		            .outerRadius(radius - 50)
		            .innerRadius(radius - 50);

		        var pie = d3.layout.pie()
		            .sort(null)
		            .value(function (d) {
		                return d.value;
		            });

        svg1.selectAll("g").remove();

        // add group
        var group=svg1.append("g").attr("transform", "translate("+outerWidth/2+","+ outerHeight/2+")");;

        var slice =group.selectAll(".arc")
            .data(pie(pieObjects))
            .enter().append("g")
            .attr("class", "arc").append("path")
						.style("fill", function (d) {
							console.log(colorScale(d.data.key))
							return colorScale(d.data.key);
						}).attr("d",arc);

      //  slice




        var div = d3.select("body").append("div").attr("class", "toolTip");
        slice
            .on("mousemove", function(d){
                div.style("left", d3.event.pageX+10+"px");
                div.style("top", d3.event.pageY-25+"px");
                div.style("display", "inline-block");
                div.html((d.data.key)+"<br>"+(d3.format(".2s")(d.data.value))+"("+(d3.format(",.1%")(d.data.percent))+")");
            });
        slice
            .on("mouseout", function(d){
                div.style("display", "none");
            });

        var legendRectSize = radius * 0.05;
        var legendSpacing =  radius * 0.05;

        var legend = group.selectAll('.legend')
            .data(colorScale.domain())
            .enter()
            .append('g')
            .attr('class', 'legend')
            .attr('transform', function(d, i) {
                var height = legendRectSize + legendSpacing;
                var offset =  height * colorScale.domain().length / 2;
                var horz = -8 * legendRectSize;
                var vert = i * height - offset;
                return 'translate(' + horz + ',' + vert + ')';
            });

        legend.append('rect')
            .attr('width', legendRectSize)
            .attr('height', legendRectSize)
						.attr('x', 10+legendRectSize + legendSpacing)
						.attr('y', (5+legendRectSize - legendSpacing+legendRectSize/2) - 7)
						.style('fill', colorScale)
            .style('stroke', colorScale);

        legend.append('text')
            .attr('x', 25+legendRectSize + legendSpacing)
            .attr('y', 5+legendRectSize - legendSpacing+legendRectSize/2)
            .attr('class', 'legendText')
            .text(function(d) { return d; });



}
//Width and height of map
var width = 768;
var height = 500;

// D3 Projection
var projection = d3.geo.albersUsa()
				   .translate([width/2, height/2])    // translate to center of screen
				   .scale([1000]);          // scale things down so see entire US

// Define path generator
var path = d3.geo.path()               // path generator that will convert GeoJSON to SVG paths
		  	 .projection(projection);  // tell path generator to use albersUsa projection


// Define linear scale for output
var color = d3.scale.linear()
			  .range(["lightsteelblue","#00BFFF","lightsalmon","lightpink"]);

//Create SVG element and append map to the SVG
var svgContainer = d3.select('#map');

var svg = svgContainer.append("svg")
			.attr("width", width)
			.attr("height", height);

// Append Div for tooltip to SVG
var div =svgContainer.append("div")
    		.attr("class", "tooltip")
    		.style("opacity", 0);

// Load in my states data!
d3.csv("dataquery1.csv", function(data) {
color.domain([0,1,2,3]); // setting the range of the input data

// Load GeoJSON data and merge with states data
d3.json("usstates2.json", function(json) {

// Loop through each state data value in the .csv file
for (var i = 0; i < data.length; i++) {

	// Grab State Name
	var dataState = data[i].State;

	// Grab data value
	var dataValue = data[i].TotalPop;
	var dataIncome = data[i].Income;
	var Male = data[i].Men;
	var Female = data[i].Women;
  var dataValue = data[i].TotalPop;

var dataHispanic = data[i].Hispanic;
var dataWhite = data[i].White;
var dataBlack = data[i].Black;
var dataNative = data[i].Native;
var dataAsian = data[i].Asian;
var dataPacific = data[i].Pacific;
var dataIncomePerCap = data[i].IncomePerCap;
var dataPoverty = data[i].Poverty;
var dataProfessional = data[i].Professional;
var dataService = data[i].Service;
var dataOffice = data[i].Office;
var dataConstruction = data[i].Construction;
var dataProduction = data[i].Production;

var dataDrive = data[i].Drive;
var dataCarpool = data[i].Carpool;
var dataTransit = data[i].Transit;
var dataWalk = data[i].Walk;
var dataOtherTransport = data[i].OtherTransport;

var dataWorkAtHome = data[i].WorkAtHome;
var dataEmployment = data[i].Employment;
var dataPrivateWork = data[i].PrivateWork;
var dataPublicWork = data[i].PublicWork;
var dataselfEmployed = data[i].selfEmployed;
var dataFamilyWork = data[i].FamilyWork;
var dataUnemployment = data[i].Unemployment;
	var dummy= 0;
	//console.log(dataValue)

//3D


	// Find the corresponding state inside the GeoJSON
	for (var j = 0; j < json.features.length; j++)  {
		var jsonState = json.features[j].properties.name;

		if (dataState == jsonState) {


		// Copy the data value into the JSON
		json.features[j].properties.TotalPop = dataValue;
		json.features[j].properties.Income = dataIncome;
		json.features[j].properties.Male = Male;
		json.features[j].properties.Female = Female;
    json.features[j].properties.TotalPop = dataValue;

json.features[j].properties.Hispanic = dataHispanic;
json.features[j].properties.White = dataWhite;
json.features[j].properties.Black = dataBlack;
json.features[j].properties.Asian = dataAsian;
json.features[j].properties.Pacific = dataPacific;
json.features[j].properties.Native = dataNative;
json.features[j].properties.IncomePerCap = dataIncomePerCap;
json.features[j].properties.Poverty = dataPoverty;
json.features[j].properties.Professional = dataProfessional;
json.features[j].properties.Service = dataService;
json.features[j].properties.Construction = dataConstruction;
json.features[j].properties.Office = dataOffice;
json.features[j].properties.Production = dataProduction;
json.features[j].properties.Drive = dataDrive;
json.features[j].properties.Carpool = dataCarpool;
json.features[j].properties.Transit = dataTransit;
json.features[j].properties.Walk = dataWalk;
json.features[j].properties.OtherTransport = dataOtherTransport;
json.features[j].properties.WorkAtHome = dataWorkAtHome;
json.features[j].properties.Employment = dataEmployment;
json.features[j].properties.PrivateWork = dataPrivateWork;
json.features[j].properties.PublicWork = dataPublicWork;
json.features[j].properties.selfEmployed = dataselfEmployed;
json.features[j].properties.FamilyWork = dataFamilyWork;
json.features[j].properties.Unemployment = dataUnemployment;


		//console.log(json.features[j].properties.TotalPop)

		// Stop looking through the JSON
		break;
		}
	}
}

// Bind the data to the SVG and create one path per GeoJSON feature

svg.selectAll("path")
	.data(json.features)
	.enter()
	.append("path")
	.attr("d", path)
	.style("stroke", "#fff")
	.style("stroke-width", "1")
	.style("fill", function(d) {

	// Get data value
	var value = d.properties.TotalPop;
	//console.log(value)

	if (value) {
	//If value exists…
	return color(1);
	} else {
	//If value is undefined…
	return "rgb(213,222,217)";
	}


});
	queue()
		 .defer(d3.json, "usstates2.json")
		 .defer(d3.csv, "dataquery1.csv")
		 .await(ready);

		function ready(error, usstates2, dataquery) {
		 var pairRateWithId = {};
		 var pairNameWithId = {};
		 var pairIncomeWithId = {};
     var pairRateWithId = {};


var pairMaleWithId = {};
var pairFemaleWithId = {};
var pairAsianWithId = {};
var pairWhiteWithId = {};
var pairBlackWithId = {};
var pairNativeWithId = {};
var pairPacificWithId = {};
var pairHispanicWithId = {};
var pairIncomePerCapWithId = {};
var pairPovertyWithId = {};
var pairProfessionalWithId = {};
var pairServiceWithId = {};
var pairOfficeWithId = {};
var pairConstructionWithId = {};
var pairProductionWithId = {};

var pairCarpoolWithId = {};
var pairDriveWithId = {};
var pairWalkWithId = {};
var pairTransWithId = {};
var pairOtherTransportWithId = {};
var pairWorkAtHomeWithId = {};
var pairEmploymentWithId = {};
var pairUnemploymentWithId = {};
var pairPublicWorkWithId = {};
var pairPrivateWorkWithId = {};
var pairselfEmployedWithId = {};
var pairFamilyWorkWithId = {};

		//Moves selction to front
		d3.selection.prototype.moveToFront = function() {
  			return this.each(function(){
    		this.parentNode.appendChild(this);
  			});
		};

		//Moves selction to back
		d3.selection.prototype.moveToBack = function() {
    		return this.each(function() {
        	var firstChild = this.parentNode.firstChild;
        	if (firstChild) {
            	this.parentNode.insertBefore(this, firstChild);
        	}
    		});
		};
data.forEach(function(d) {

		 pairRateWithId[d.id] = +d.TotalPop;
		 pairNameWithId[d.id] = d.State;
		 pairIncomeWithId[d.id] = d.Income;
     pairRateWithId[d.id] = +d.TotalPop;

pairMaleWithId[d.id] = d.Male;
pairFemaleWithId[d.id] = d.Female;
pairAsianWithId[d.id] = d.Asian;
pairWhiteWithId[d.id] = d.White;
pairBlackWithId[d.id] = d.Black;
pairNativeWithId[d.id] = d.Native;
pairPacificWithId[d.id] = d.Pacific;
pairHispanicWithId[d.id] = d.Hispanic;
pairIncomePerCapWithId[d.id] = d.IncomePerCap;
pairPovertyWithId[d.id] = d.Poverty;
pairProfessionalWithId[d.id] = d.Professional;
pairServiceWithId[d.id] = d.Service;
pairOfficeWithId[d.id] = d.Office;
pairConstructionWithId[d.id] = d.Construction;
pairProductionWithId[d.id] = d.Production;
pairCarpoolWithId[d.id] = d.Carpool;
pairWalkWithId[d.id] = d.Walk;
pairDriveWithId[d.id] = d.Drive;
pairTransWithId[d.id] = d.Transit;
pairOtherTransportWithId[d.id] = d.OtherTransport;
pairWorkAtHomeWithId[d.id] = d.WorkAtHome;
pairEmploymentWithId[d.id] = d.Employment;
pairUnemploymentWithId[d.id] = d.Unemployment;
pairPublicWorkWithId[d.id] = d.PublicWork;
pairPrivateWorkWithId[d.id] = d.PrivateWork;
pairselfEmployedWithId[d.id] = d.selfEmployed;
pairFamilyWorkWithId[d.id] = d.FamilyWork;
		 //console.log(pairRateWithId[d.id])
		 });
		 svg.append("g")
//		 .attr("class", "county")
		 .selectAll("path")
		 .data(json.features)
		 .enter().append("path")
		 .attr("d", path)
		 .style ( "fill" , function (d) {
		 return color (1);
		 })
		 .style("opacity", 0.8)
		 .on("click", function (d) {
			 if(dummy==d.id)
			 {
				 window.location.reload();
			 }
			 dummy=d.id;
			 //pass id
			 drawAllMaps(d.id,d.properties.name,d.properties.Male,d.properties.Female);
			 drawcommute(d.id,d.properties.Drive,d.properties.Carpool,d.properties.Transit,d.properties.Walk,d.properties.OtherTransport);
       drawbubble(d.id,d.properties.PrivateWork,d.properties.PublicWork,d.properties.selfEmployed,d.properties.FamilyWork);
       drawIncomeToPovertyBarChart(d.id,d.properties.Professional,d.properties.Service,d.properties.Office,d.properties.Construction,d.properties.Production);

       d3.selectAll('path').each(function (d) {
						 //return color (1);
		});

		 })
		 .on("mouseover", function(d) {
		 	var sel = d3.select(this);
  			sel.moveToFront();
		 d3.select(this).style("fill","orange")
		 d3.select(this).transition().duration(300).style({'opacity': 1, 'stroke': 'black', 'stroke-width': 1.5});
		 div.transition().duration(300)
		 .style("opacity", 1)
		 div.text(pairNameWithId[d.id] + "\n" + "total population:" + valueFormat(pairRateWithId[d.id]) + "\n" + "Avg Income:" + valueFormat(pairIncomeWithId[d.id]))
		 .style("left", (d3.event.pageX -350) + "px")
		 .style("top", (d3.event.pageY -30) + "px");
		 })
		 .on("mouseout", function() {
		 	var sel = d3.select(this);
  			sel.moveToBack();
     d3.select(this).style("fill",function(d) {
    return color(1);
});
		 d3.select(this)
		 .transition().duration(300)
		 .style({'opacity': 0.8, 'stroke': 'white', 'stroke-width': 0});
		 div.transition().duration(300)
		 .style("opacity", 0);
		 })



// Modified Legend Code from Mike Bostock: http://bl.ocks.org/mbostock/3888852

	};

});
});
