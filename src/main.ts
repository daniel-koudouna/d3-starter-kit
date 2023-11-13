import "./style.css";

import * as d3 from "d3";

const img = d3.select("#app").append("img");

img
  .style("width", "100%")
  .style("height", "100%")
  .attr("src", "https://media.tenor.com/5E950S7t-TkAAAAi/hatsune-miku.gif");
