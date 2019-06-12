let width = 480,
    height = 500,
    outerRadius = Math.min(width, height) / 2 - 4,
    innerRadius = outerRadius - 20;

let format = d3.format(",.3r");

// Square matrices, asynchronously loaded; credits is the transpose of debits.
let abusers = [], abused = [];

// The chord layout, for computing the angles of chords and groups.
let layout = d3.layout.chord()
    .sortGroups(d3.descending)
    .sortSubgroups(d3.descending)
    .sortChords(d3.descending)
    .padding(.04);

let fill = d3.scale.ordinal()
    .domain([0, 1, 2])
    .range(["#e84393", "#fab1a0", "#0984e3", "#00b894"]);

// The arc generator, for the groups.
let arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);

// The chord generator (quadratic Bézier), for the chords.
let chord = d3.svg.chord()
    .radius(innerRadius);

// Add an SVG element for each diagram, and translate the origin to the center.
let svg = d3.select("body").selectAll("div")
    .data([abusers, abused])
    .enter().append("div")
    .style("display", "inline-block")
    .style("width", width + "px")
    .style("height", height + "px")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


// Load  data file…
d3.csv("pokemon3.csv", type, function (error, data) {
    if (error) throw error;

    let pokemonByName = d3.map(),
        pokemonIndex = -1,
        pokemonByIndex = [];

    data.forEach(function(d) {
        if (pokemonByName.has(d.abuser)) d.abuser = pokemonByName.get(d.abuser);
        else pokemonByName.set(d.abuser, d.abuser = {name: d.abuser, index: ++pokemonIndex});
        if (pokemonByName.has(d.abused)) d.abused = pokemonByName.get(d.abused);
        else pokemonByName.set(d.abused, d.abused = {name: d.abused, index: ++pokemonIndex});
        d.abused.power = d.power;
    });

    for (let i = 0; i <= pokemonIndex; i++) {
        abusers[i] = Array.apply(null, new Array(10)).map(Number.prototype.valueOf,0);
        abused[i] = Array.apply(null, new Array(10)).map(Number.prototype.valueOf,0);
    }

    data.forEach(function(d) {
        abused[d.abuser.index][d.abused.index] = d;
        abusers[d.abused.index][d.abuser.index] = d;
        pokemonByIndex[d.abuser.index] = d.abuser;
        pokemonByIndex[d.abused.index] = d.abused;
    });

    svg.each(function (matrix, j) {
        let svg = d3.select(this);
        layout.matrix(matrix);
        svg.selectAll(".chord")
            .data(layout.chords)
            .enter().append("path")
            .attr("class", "chord")
            .style("fill", d => d.source.value.power)
            .style("stroke", function (d) {
                return d3.rgb(fill(d.source.value.power)).darker();
            })
            .attr("d", chord)
            .append("title")
            .text(function (d) {
                return d.source.value.abused.name + " " + (j ? "abuses " : "is abused by ") + d.source.value.abuser.name + format(d.source.value);

                // return d.source.value.abused.name + " abuses " + d.source.value.abuser.name + " for " + format(d.source.value);
            });

        let g = svg.selectAll(".group")
            .data(layout.groups)
            .enter().append("g")
            .attr("class", "group");

        g.append("path")
            .style("fill", function (d) {
                return fill(pokemonByIndex[d.index].power);
            })
            .attr("id", function (d, i) {
                return "group" + d.index + "-" + j;
            })
            .attr("d", arc)
            .append("title")
            .text(function (d) {
                return pokemonByIndex[d.index].name + " " + (j ? "abuses" : "is abused") + " by " + format(d.value);
            });

        g.append("text")
            .attr("x", 6)
            .attr("dy", 15)
            .append("textPath")
            .attr("xlink:href", function (d) {
                return "#group" + d.index + "-" + j;
            })
            .text(function (d) {
                return pokemonByIndex[d.index].name;
            });
    });
});

function type(d) {
    // d.amount = +d.amount;
    d.power = +d.power;
    d.valueOf = value; // for chord layout
    return d;
}

function value() {
    return this.power;
}
