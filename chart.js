var data={
    Childproverty:{
	PuertoRico:60.21025641,
	Mississippi:36.26463415,
	Georgia:31.76163522,
	SouthCarolina:31.73695652,
	Alabama:31.66865672,
	Arkansas:31.41066667,
	Louisiana:30.9703125,
	Kentucky:30.12166667,
	Arizona:29.74,
	NorthCarolina:28.65
    },
    Income:{
	New_Jersey:73014.09524,
	Connecticut:71184.125,
	District_of_Columbia:70848,
	Maryland:69200.375,
	Massachusetts:65974.42857,
	Rhode_Island:65783.4,
	Hawaii:64879,
	Alaska:64197.10345,
	New_Hampshire:60648.9,
	Delaware:58067.66667
    },
    Population:{
	  California:38421464,
	  Texas:26538614,
	  NewYork:19673174,
	  Florida:19645772,
	  Illinois:12873761,
	  Pennsylvania:12779559,
	  Ohio:11575977,
	  Georgia:10006693,
	  Michigan:9900571,
	  NorthCarolina:9845333
    },
	State_Proverty:{
	PuertoRico:49.37435897,
	Mississippi:25.72317073,
	Georgia:22.19811321,
	Louisiana:21.95625,
	Kentucky:21.8275,
	Alabama:21.76268657,
	Arkansas:21.552,
	Arizona:21.3,
	SouthCarolina:21.21304348,
	NewMexico:21.12121212
	},
	Unemployment:{
	PuertoRico:19.37051282,
	Mississippi:12.02439024,
	Arizona:11.96666667,
	SouthCarolina:11.33043478,
	Alabama:11.31044776,
	California:10.8,
	Nevada:10.47647059,
	NorthCarolina:10.452,
	Florida:10.38358209,
	Georgia:9.974213836
	},
	Hispanic:{
	Puerto_Rico:99.05,
	New_Mexico:46.64545455,
	Texas:33.75511811,
	Arizona:30.43333333,
	California:29.51896552,
	Colorado:19.703125,
	Nevada:16.87647059,
	New_Jersey:16.31904762,
	Washington:13.58717949,
	Florida:13.25522388
	},
	Asian:{
	Hawaii:28.9,
	California:6.898275862,
	New_Jersey:6.847619048,
	Alaska:5.951724138,
	Massachusetts:3.835714286,
	District_of_Columbia:3.6,
	Connecticut:3.425,
	Maryland:3.208333333,
	Delaware:2.733333333,
	New_York:2.709677419
	},
	White:{
	Maine:94.6375,
	West_Virginia:94.58,
	Vermont:94.50714286,
	New_Hampshire:93.31,
	Kentucky:92.09666667,
	Iowa:92.01818182,
	Indiana:91.20108696,
	Missouri:90.86956522,
	Ohio:90.61931818,
	Nebraska:90.1516129
	},
	Black:{
	District_of_Columbia:48,
	Mississippi:41.04512195,
	South_Carolina:35.74565217,
	Louisiana:31.725,
	Alabama:28.47164179,
	Georgia:27.99245283,
	North_Carolina:20.234,
	Delaware:19.8,
	Maryland:19.7875,
	Virginia:18.5962406
	},
	Pacific:{
	Hawaii1:4.74,
	Alaska:0.64137931,
	California:0.343103448,
	Utah:0.324137931,
	Washington:0.292307692,
	Nevada:0.282352941,
	Oregon:0.219444444,
	Arizona:0.12,
	Colorado:0.115625,
	Oklahoma:0.096103896
	},
	IncomePerCap:{
	District_of_Columbia:47675,
	Connecticut:37025.125,
	New_Jersey:36084.52381,
	Rhode_Island:35670.6,
	Massachusetts:35554.42857,
	Maryland:33073.20833,
	North_Dakota:31900.50943,
	Hawaii:31892.6,
	New_Hampshire:31810.4,
	Alaska:30332.96552
	},
	Professional:{
	District_of_Columbia:60.9,
	Rhode_Island:41.08,
	Massachusetts:40.63571429,
	Connecticut:40.6,
	New_Jersey:39.5047619,
	Maryland:39.05,
	Vermont:37.7,
	New_Hampshire:37.61,
	South_Dakota:37.4030303,
	Montana:36.42321429
	},
	Service:{
	Hawaii:25.08,
	New_Mexico:22.59090909,
	Arizona:22.04,
	Puerto_Rico:21.91666667,
	Florida:21.61044776,
	Nevada:20.92352941,
	California:20.57758621,
	Michigan:19.88072289,
	New_York:19.72580645,
	Louisiana:19.6546875
	},
	Office:{
	Puerto_Rico:25.52692308,
	Florida:25.18358209,
	New_Jersey:24.50952381,
	Delaware:23.83333333,
	Hawaii:23.66,
	South_Carolina:23.59782609,
	Rhode_Island:23.48,
	Arizona:23.42666667,
	New_Hampshire:23.4,
	Virginia:23.2112782
	},
	Construction:{
	Nevada:17.92941176,
	Wyoming:17.12608696,
	Idaho:16.47727273,
	Montana:16.3,
	Texas:16.02125984,
	North_Dakota:15.78301887,
	Alaska:15.11034483,
	Louisiana:14.9078125,
	West_Virginia:14.78545455,
	Nebraska:14.56666667
	},
	Production:{
	Indiana:22.7923913,
	Alabama:20.84179104,
	Ohio:20.425,
	Tennessee:20.19157895,
	Kentucky:19.83166667,
	Mississippi:19.34146341,
	Arkansas:19.23866667,
	Wisconsin:19.125,
	Iowa:19.06363636,
	South_Carolina:18.94130435
	},
	PrivateWork:{
	Indiana:82.95869565,
	Pennsylvania:81.62985075,
	Ohio:81.20454545,
	New_Jersey:80.25238095,
	Rhode_Island:79.92,
	Michigan:79.67710843,
	Delaware:78.9,
	Wisconsin:78.89583333,
	Connecticut:78.8125,
	Illinois:78.60196078
	},
	PublicWork:{
	Alaska:32.63448276,
	Hawaii:27.42,
	New_Mexico:26.73939394,
	Puerto_Rico:25.99871795,
	District_of_Columbia:25.4,
	Arizona:22.92666667,
	Nevada:22.41176471,
	Wyoming:21.37391304,
	Maryland:21.20833333,
	Washington:21.18205128
	}
  };

  var x ;
  var finaldata;
function myFunction() {
    x= document.getElementById("mySelect").value;
	if(x!="select"){
	for (item in data) {
	if(item==x)
	{
	finaldata=data[x];
	}

}
drawIncomeToPovertyBarChart1(finaldata,x);
}
}
function myFunction2() {
    x= document.getElementById("mySelect2").value;
	if(x!="select"){
	for (item in data) {
	if(item==x)
	{
	finaldata=data[x];
	}

}
drawIncomeToPovertyBarChart1(finaldata,x);
}
}
function myFunction1() {
    x= document.getElementById("mySelect1").value;
	if(x!="select"){
	for (item in data) {
	if(item==x)
	{
	finaldata=data[x];
	}

}
drawIncomeToPovertyBarChart1(finaldata,x);
}
}

function drawIncomeToPovertyBarChart1(fdata,xname) {
    var barObjects=[];
	var z=0;
	for(var items in fdata ){
	barObjects.push({
	key: items,
	value:fdata[items]
	});

	}


        for(i=0;i<barObjects.length;i++){
            if (isNaN(barObjects.value))
                barObjects.value=0;
        }




        /* BEFORE DATA */
        // chart size
        var outerWidth = 612;
        var outerHeight = 510;
        var margin = { left: 50, top: 16, right: 30, bottom: 100 };
        var innerWidth  = outerWidth  - margin.left - margin.right;
        var innerHeight = outerHeight - margin.top  - margin.bottom;
        var innerHeightOffset = innerHeight+1;
        var xAxisLabelText = xname;
        var xAxisLabelOffset = 35;

        var yAxisLabelText = "";
        var yAxisLabelOffset = 10;

        // Select SVG element on the DOM
        var SVG = d3.select("#sample").attr("width",outerWidth).attr("height",outerHeight);;
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
			.style("font-size", "18px")
            .attr("id","xlabel")
            .text(xAxisLabelText)

        var yAxisLabel = yAxisG.append("text")
            .style("text-anchor", "middle")
            .attr("transform", "translate(" + yAxisLabelOffset + "," + (innerHeight/4) + ") rotate(-90)")
            .attr("class", "label")
            .text(yAxisLabelText);


        // create axis scale: Pixel Space
        var xOrdinalScale =d3.scale.ordinal().rangeBands([0, innerWidth],0.5);
        var yScale = d3.scale.linear().range([innerHeight, 0]);



        // define x and y axis
        var xAxis = d3.svg.axis().scale(xOrdinalScale).orient('bottom');
        var yAxis = d3.svg.axis().scale(yScale).orient('left').tickFormat(d3.format(".2s"))
            .outerTickSize(0);


        xOrdinalScale.domain(barObjects.map(function(d) {
		console.log(d)
		return d.key; }));
        yScale.domain([0, d3.max(barObjects, function(d) {
		console.log(d)
		return d.value; })]);


        xAxisG.call(xAxis).selectAll("text")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", function(d) {
                return "rotate(-45)"
            });

        d3.select("#xlabel").style("text-anchor", "middle")
            .attr("x", innerWidth/2)
            .attr("y", 70)
            .attr("transform","rotate(1.5)");
           // .attr("transform", "translate(" + yAxisLabelOffset + "," + (innerHeight/4) + ") rotate(-90)")


        yAxisG.call(yAxis);

		//color
		var color1 = ["#56c950","#666666","#506ac9","#c050c9","#c4c950","#cc263c","#787887","#2660cc","#26cc97","#a226cc"];
        // Bind Data
        var bars= group.selectAll("rect").data(barObjects);

        // Enter
        bars.enter().append('rect')
            .attr("class", "bar1");


        // figure out the width of individual bars
        var barWidth = innerWidth / 10;
		var i=-1;
		//tip
		var div = d3.select("body").append("div").attr("class", "toolTip");
        // Update
        bars.attr("x", function(d, i) {  return i*barWidth})
            .attr("y", function(d, i) {  return yScale(d.value);})
            .attr("width", (barWidth-5))
            .attr("height", function(d) { return innerHeight - yScale(d.value); })
			.attr("fill",function(d) {i++; return color1[i];})
			.style("margin-right",function(d){return "10px";});
		bars.on('mouseover',function(d){
				div.style("left", d3.event.pageX+10+"px");
                div.style("top", d3.event.pageY-25+"px");
                div.style("display", "inline-block");
				console.log(d)
                div.html((d.value));
			})
            .on('mouseout', function(d){
				div.style("display", "none");
			});

        // Exit
        bars.exit().remove();
       // console.log("data:"+ data);
}
