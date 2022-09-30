/*global d3*/
/*eslint no-undef: "error"*/
// alert("Hello");
// function dc execute khi window load xong
// calback
// () => anonymous function / error func

window.onload = () => {
  const numberSlider = document.querySelector("#number");

  numberSlider.addEventListener("input", handleInput);
  numberSlider.addEventListener("change", handleChange);
  observeContent();
};

function observeContent() {
  let options = {
    root: document.querySelector("#interactive-content"),
    rootMargin: "0px",
    threshold: 0.5,
  };
  let targets = document.querySelectorAll(".ob-test");

  let observer = new IntersectionObserver(IOHandler, options);

  function IOHandler(entries, observer) {
    //check all observed target
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) {
        //when a target is disappear
        if (entry.target.id === "para1") {
          renderImage();
        }
      } else {
        //when a target is appear
        if (entry.target.id === "number") {
          const numberSlider = document.querySelector("#number");
          render(numberSlider.value);
        }
      }
    });
  }
  targets.forEach(function (target) {
    observer.observe(target);
  });
}

function renderImage() {
  const display = document.querySelector(".interactive-svg");
  display.innerHTML = `
  <div style="margin: auto auto">
  <img src="assets/erd.png" />
  <p style="font-weight:lighter">
    <i>fig1 ⎯ Entity Relationship Diagram. By looking at this, we can
    understand, for example, which customer makes which order of which
    product and their review.</i>
  </p>
  </div>`;
}

function handleInput(e) {
  e.preventDefault();
  //select elements
  const currentNumber = document.querySelector("#currentNumber");
  //on input
  // slider update current number
  currentNumber.innerHTML = e.target.value;
}

function handleChange(e) {
  //prevent default
  e.preventDefault();
  // on change
  // render d3 with slider value
  render(e.target.value);
}

async function render(inputValue) {
  try {
    //fetch data from db
    var response = await fetch("./data/dice_data.json");
    var data = await response.json();

    // Filter data --- Get n most popular characters
    var newNodes = data["nodes"].slice(0, inputValue);
    var newChars = newNodes.map((d) => d.id);
    var newLinks = data["links"].filter(
      (d) => newChars.includes(d.source) && newChars.includes(d.target)
    );
    // format data in d3 forceGraph structure
    var newData = { nodes: newNodes, links: newLinks };

    // use ForceGraph to construct graph
    var chart = ForceGraph(newData, {
      nodeId: (d) => d.id,
      nodeGroup: (d) => d.group,
      nodeTitle: (d) => `${d.id}\n${d.group}`,
      linkStrokeWidth: (l) => Math.sqrt(l.value) * 2,
    });
  } catch (error) {
    console.log("D3 render error", error.message);
  }
}

function ForceGraph(
  {
    nodes, // an iterable of node objects (typically [{id}, …])
    links, // an iterable of link objects (typically [{source, target}, …])
  },
  {
    nodeId = (d) => d.id, // given d in nodes, returns a unique identifier (string)
    nodeGroup, // given d in nodes, returns an (ordinal) value for color
    nodeGroups, // an array of ordinal values representing the node groups
    nodeTitle, // given d in nodes, a title string
    nodeFill = "currentColor", // node stroke fill (if not using a group color encoding)
    nodeStroke = "#fff", // node stroke color
    nodeStrokeWidth = 1.5, // node stroke width, in pixels
    nodeStrokeOpacity = 1, // node stroke opacity
    nodeRadius = 5, // node radius, in pixels
    nodeStrength,
    linkSource = ({ source }) => source, // given d in links, returns a node identifier string
    linkTarget = ({ target }) => target, // given d in links, returns a node identifier string
    linkStroke = "#999", // link stroke color
    linkStrokeOpacity = 0.6, // link stroke opacity
    linkStrokeWidth = 0.5, // given d in links, returns a stroke width in pixels
    linkStrokeLinecap = "round", // link stroke linecap
    linkStrength,
    colors = d3.schemeTableau10, // an array of color strings, for the node groups
    width = 640, // outer width, in pixels
    height = 400, // outer height, in pixels
    invalidation, // when this promise resolves, stop the simulation
  } = {}
) {
  // Compute values.
  const N = d3.map(nodes, nodeId).map(intern);
  const LS = d3.map(links, linkSource).map(intern);
  const LT = d3.map(links, linkTarget).map(intern);
  if (nodeTitle === undefined) nodeTitle = (_, i) => N[i];
  const T = nodeTitle == null ? null : d3.map(nodes, nodeTitle);
  const G = nodeGroup == null ? null : d3.map(nodes, nodeGroup).map(intern);
  const W =
    typeof linkStrokeWidth !== "function"
      ? null
      : d3.map(links, linkStrokeWidth);
  const L = typeof linkStroke !== "function" ? null : d3.map(links, linkStroke);

  // Replace the input nodes and links with mutable objects for the simulation.
  nodes = d3.map(nodes, (_, i) => ({ id: N[i] }));
  links = d3.map(links, (_, i) => ({ source: LS[i], target: LT[i] }));

  // console.log(nodes)

  // Compute default domains.
  if (G && nodeGroups === undefined) nodeGroups = d3.sort(G);

  // Construct the scales.
  const color = nodeGroup == null ? null : d3.scaleOrdinal(nodeGroups, colors);

  // Construct the forces.
  const forceNode = d3.forceManyBody();
  const forceLink = d3.forceLink(links).id(({ index: i }) => N[i]);
  if (nodeStrength !== undefined) forceNode.strength(nodeStrength);
  if (linkStrength !== undefined) forceLink.strength(linkStrength);

  const simulation = d3
    .forceSimulation(nodes)
    .force("link", forceLink)
    .force("charge", forceNode)
    .force("center", d3.forceCenter())
    .on("tick", ticked);

  //clear dom
  document.querySelector(".interactive-svg").innerHTML = "";

  //remove d3 before create new svg
  d3.select("svg")?.remove();

  const svg = d3
    .select(".interactive-svg")
    .append("svg")
    .attr("width", window.innerWidth)
    .attr("height", window.innerHeight)
    .attr("viewBox", [-width / 2, -height / 2, width, height])
    .attr("style", "max-width: 100%; max-height: 100%;");

  const link = svg
    .append("g")
    .attr("stroke", typeof linkStroke !== "function" ? linkStroke : null)
    .attr("stroke-opacity", linkStrokeOpacity)
    .attr(
      "stroke-width",
      typeof linkStrokeWidth !== "function" ? linkStrokeWidth : null
    )
    .attr("stroke-linecap", linkStrokeLinecap)
    .selectAll("line")
    .data(links)
    .join("line");

  const node = svg
    .append("g")
    .attr("fill", nodeFill)
    .attr("stroke", nodeStroke)
    .attr("stroke-opacity", nodeStrokeOpacity)
    .attr("stroke-width", nodeStrokeWidth)
    .selectAll("circle")
    .data(nodes)
    .join("circle")
    .attr("r", nodeRadius)
    .call(drag(simulation));
  if (W) link.attr("stroke-width", ({ index: i }) => W[i]);
  if (L) link.attr("stroke", ({ index: i }) => L[i]);
  if (G) node.attr("fill", ({ index: i }) => color(G[i]));
  if (T) node.append("title").text(({ index: i }) => T[i]);
  if (invalidation != null) invalidation.then(() => simulation.stop());

  function intern(value) {
    return value !== null && typeof value === "object"
      ? value.valueOf()
      : value;
  }
  //distant between node
  const distant = 2;

  function ticked() {
    link
      .attr("x1", (d) => d.source.x * distant)
      .attr("y1", (d) => d.source.y * distant)
      .attr("x2", (d) => d.target.x * distant)
      .attr("y2", (d) => d.target.y * distant);
    node.attr("cx", (d) => d.x * distant).attr("cy", (d) => d.y * distant);
  }

  function drag(simulation) {
    function dragstarted(event) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return d3
      .drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  return Object.assign(svg.node(), { scales: { color } });
}