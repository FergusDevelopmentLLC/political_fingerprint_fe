let svg = d3.select("#map-container").append("svg").attr('class', 'svg-map').attr('viewBox', '15 0 945 595')
let path = d3.geoPath()
let color = d3.scaleLinear().domain([0, 99]).range(["#ff0000", "#0015bc"])

function callout(g, value) {

  if (!value) return g.style("display", "none");

  g.style("display", null)
    .style("pointer-events", "none")
    .style("font", "10px sans-serif");

  var path = g
    .selectAll("path")
    .data([null])
    .join("path")
    .attr("fill", "white")
    .attr("stroke", "black");

  //.data((value['tooltipMessage'] + "").split("/\n/"))
  var text = g
    .selectAll("text")
    .data([null])
    .join("text")
    .call(function (text) {
      text.selectAll("tspan")
        .data((value['tooltipMessage'] + "").split("|"))//TODO: lame, see comment above
        .join("tspan")
        .attr("x", 0)
        .attr("y", function (d, i) {
          return i * 1.1 + "em";
        })
        .style("font-weight", function (_, i) {
          return i ? null : "bold";
        })
        .text(function (d) {
          return d;
        });
    });

  var x = text.node().getBBox().x;
  var y = text.node().getBBox().y;
  var w = text.node().getBBox().width;
  var h = text.node().getBBox().height;

  text.attr(
    "transform",
    "translate(" + -w / 2 + "," + (15 - y) + ")"
  );
  path.attr(
    "d",
    "M" +
    (-w / 2 - 10) +
    ",5H-5l5,-5l5,5H" +
    (w / 2 + 10) +
    "v" +
    (h + 20) +
    "h-" +
    (w + 20) +
    "z"
  );
}

d3.json("mapData/d3/counties-albers-10m.json").then(function (topo_data) {

  d3.json(`${dataUrl}`).then(function (data) {
    return data.map(function (d) {
      let o = {}
      o.geoid = d.geoid
      o.economic = +d.economic
      o.diplomatic = +d.diplomatic
      o.civil = +d.civil
      o.societal = +d.societal
      o.name = d.name
      o.state_abbrev = d.state_abbrev
      o.state_name = d.state_name
      o.tooltipMessage = `${o.name}, ${o.state_abbrev}|econ: ${o.economic}|dipl: ${o.diplomatic}|civil: ${o.civil}|societal: ${o.societal}`
      return o
    })
  })
  .then(function (objects) {
    svg.append("g")
      .attr("id", "map")
      .selectAll("path")
      .data(
        topojson.feature(
          topo_data,
          topo_data.objects.counties
        ).features
      )
      .join("path")
      .attr("class", "county")
      .attr("fill", function (d) {

        let match = objects.filter(obj => {
          // console.log('obj', obj)
          return obj.geoid.toString() === d.id.toString()
        })

        if (match.length > 0) {

          let economic = match[0]['economic']
          let diplomatic = match[0]['diplomatic']
          let civil = match[0]['civil']
          let societal = match[0]['societal']
          let total = economic + diplomatic + civil + societal
          let avg = total / 4

          let c = color(avg)
          if (c) return c
        }
        else {
          return '#CCC'
        }
      })
      .attr("stroke", "#919191")
      .attr("stroke-width", ".1pt")
      .attr("d", path);

    //this adds white borders around states
    svg.select("#map")
      .append("path")
      .attr("fill", "none")
      .attr("stroke", "white")
      .attr(
        "d",
        path(
          topojson.mesh(
            topo_data,
            topo_data.objects.states,
            function (a, b) {
              return a !== b;
            }
          )
        )
      );


    // Create and customize tooltip
    var tooltip = svg.append("g");

    svg.selectAll(".county")
      .on("mouseover", function (d) {

        let tooltipMessage = `${d.properties.name}`

        let match = objects.filter(obj => {
          return obj.geoid.toString() === d.id.toString()
        })

        if (match.length > 0)
          tooltip.call(callout, match[0])
        else {
          //TODO: this is lame, fix this
          let matchingCounties = counties.filter(obj => {
            return obj.id.toString() === d.id.toString()
          })
          tooltip.call(callout, { 'tooltipMessage': `${tooltipMessage} County, ${matchingCounties[0].state_abbrev}|No test results` })
        }
        d3.select(this)
          .attr("stroke", "red")
          .raise();
      })
      .on("mousemove", function () {
        tooltip.attr(
          "transform",
          "translate(" +
          d3.mouse(this)[0] +
          "," +
          d3.mouse(this)[1] +
          ")"
        );
      })
      .on("mouseout", function () {
        tooltip.call(callout, null);
        d3.select(this)
          .attr("stroke", null)
          .lower();
      });

  });
});