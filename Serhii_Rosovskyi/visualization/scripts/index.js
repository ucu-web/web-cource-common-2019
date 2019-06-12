const dataset = [];

const request = new XMLHttpRequest();
request.open("GET",'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json',true);
request.send();
request.onload = () => {
    let json=JSON.parse(request.responseText);
    let html = json.data;

    html.forEach(function(item){
        dataset.push([item[0].substr(0,4), item[1],item[0]]);
    });

    const width = 800;
    const height = 400;
    const barWidth = width/dataset.length ;

    const xScale = d3.scaleLinear()
        .domain([d3.min(dataset, (d) => d[0]), d3.max(dataset, (d) => d[0])])
        .range([0, width]);

    const yScale = d3.scaleLinear()
        .domain([d3.min(dataset, (d) => d[1]), d3.max(dataset, (d) => d[1])])
        .range([height, (d3.min(dataset, (d) => d[1])/d3.max(dataset, (d) => d[1]))*height]);

    const tooltip = d3.select(".svgArea").append("div")
        .attr("id", "tooltip")
        .style('font-size', '20px');

    const svg = d3.select(".svgArea")
        .append("svg")
        .attr("class", "block")
        .attr("width", width)
        .attr("height", height);

    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("data-date", d => d[2])
        .attr("data-gdp", d => d[1])
        .attr("x", (d, i) => (i*barWidth))
        .attr("y",d => (yScale(d[1])))
        .attr("width", barWidth)
        .attr("height", d => d[1])
        .attr("fill", "gold")
        .on('mouseover', function(d) {
            let format = d3.format("$,");
            tooltip.text("Year:"+[d[2], " Amount:"+format(d[1])+" "+json.description.substr(6,8)])
                .attr('data-date', d[2])
        });

    const xAxis = d3.axisTop(xScale).tickFormat(d3.format("d"));
    svg.append("g")
        .attr("transform", "translate(0, 400)")
        .call(xAxis);

    const yAxis = d3.axisRight(yScale).tickFormat(d3.format("d"));
    svg.append("g")
        .attr("transform", "translate(-0.4,0)")
        .call(yAxis);

};