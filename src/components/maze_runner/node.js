class Node {
  constructor(horzPos, vertPos, nodeIdx) {
    this.horzPos = horzPos;
    this.vertPos = vertPos;
    this.nodeIdx = nodeIdx;
    this.exits = [];
  }

  connectToNode(exitNode) {
    this.addExit(exitNode);
    exitNode.addExit(this);
  }

  addExit(exitNode) {
    this.exits.push(exitNode);
  }

  getExits() {
    
  }
}

export default Node;
