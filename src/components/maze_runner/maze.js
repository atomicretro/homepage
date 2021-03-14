import Node from './node';

class Maze {
  constructor(maxNodeLength, mazePixelLength) {
    this.maze = [];
    this.maxLength = maxNodeLength;
    this.mazePixelLength = mazePixelLength;
    this.nodeExitDeltas = [1, maxNodeLength];
    this.count = 0
    this.wallThickness = 6;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  generate() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.wallThickness, this.mazePixelLength);
    this.ctx.fillRect(0, 0, this.mazePixelLength, this.wallThickness);
    this.ctx.fillRect(this.mazePixelLength - this.wallThickness, 0, this.wallThickness, this.mazePixelLength);
    this.ctx.fillRect(0, this.mazePixelLength - this.wallThickness, this.mazePixelLength, this.wallThickness);
    this.ctx.fill();

    for (let vertIdx = 0; vertIdx < 3; vertIdx++) {
      for (let horzIdx = 0; horzIdx < 3; horzIdx++) {
        this.push(horzIdx, vertIdx);
      }
    }
  }

  push(horzPos, vertPos) {
    // Create the node and add it to the maze array
    const currentNode = new Node(horzPos, vertPos, this.maze.length);
    this.maze.push(currentNode);

    // Determine exits
    for (const exitDelta of this.nodeExitDeltas) {
      // We're on the left edge of the maze; b/c Nodes are in an array idx - 1 wraps around to the right edge
      if (currentNode.nodeIdx % this.maxLength === 0 && exitDelta === 1) {
        continue;
      }

      const exitNode = this.maze[currentNode.nodeIdx - exitDelta];
      if (exitNode) {
        // Exit node has no exits; we must connect to it now so it's not orphaned
        if (exitNode.exits.length === 0) {
          currentNode.connectToNode(exitNode);
          continue;
        }

        // Exit node has at least 1 exit; determine if this node should connect to it
        if (Math.random() >= 0.5) {
          currentNode.connectToNode(exitNode);
          continue;
        }

        // No exit was created; draw a wall
        this.drawWall(currentNode, exitNode, exitDelta);
      }
    }

    this.ctx.font = '30px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(currentNode.nodeIdx, (currentNode.horzPos + 0.4) * 100, (currentNode.vertPos + 0.6) * 100);
  }

  drawWall(currentNode, exitNode, exitDelta) {
    let horzPos = currentNode.horzPos * 100;
    let vertPos = currentNode.vertPos * 100;
    let horzLength = this.wallThickness;
    let vertLength = this.wallThickness;
    if (exitDelta === 1) {
      horzPos = horzPos - (this.wallThickness / 2);
      vertLength = 100;
    } else {
      vertPos = vertPos - (this.wallThickness / 2);
      horzLength = 100;
    }

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(horzPos, vertPos, horzLength, vertLength);
    this.ctx.fill();
  }
}

export default Maze;
