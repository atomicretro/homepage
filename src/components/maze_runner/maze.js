import Node from './node';

class Maze {
  constructor(mazeNodeLength, mazePixelLength) {
    this.mazeArray = [];
    this.mazeLength = mazeNodeLength;
    this.mazePixelLength = mazePixelLength;
    this.nodeSize = mazePixelLength / mazeNodeLength;
    this.count = 0
    this.wallThickness = 6;
  }

  setCanvas(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }

  generate() {
    // Set up outline
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.wallThickness, this.mazePixelLength);
    this.ctx.fillRect(0, 0, this.mazePixelLength, this.wallThickness);
    this.ctx.fillRect(this.mazePixelLength - this.wallThickness, 0, this.wallThickness, this.mazePixelLength);
    this.ctx.fillRect(0, this.mazePixelLength - this.wallThickness, this.mazePixelLength, this.wallThickness);
    this.ctx.fill();

    for (let vertIdx = 0; vertIdx < this.mazeLength; vertIdx++) {
      for (let horzIdx = 0; horzIdx < this.mazeLength; horzIdx++) {
        this._push(horzIdx, vertIdx);
      }
    }

    this._buildWalls(this.mazeArray, this.mazeLength, this.mazeLength);
  }

  _push(horzPos, vertPos) {
    // Create the node and add it to the maze array
    const currentNode = new Node(horzPos, vertPos, this.mazeArray.length);
    this.mazeArray.push(currentNode);

    this.ctx.font = '30px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(currentNode.nodeIdx, (currentNode.horzPos + 0.4) * 100, (currentNode.vertPos + 0.6) * 100);
  }

  _buildWalls(mazeArray, height, width) {
    if (height <= 1 || width <= 1) {
      return;
    }

    // Get wall indices for sub-maze
    const vertWallIdx = this.getRandomInt(0, width - 1);
    const horzWallIdx = this.getRandomInt(0, height - 1);
console.log('vertWallIdx', vertWallIdx)
console.log('horzWallIdx', horzWallIdx)
    // Get opening indices for sub-maze
    let vertOpening;
    let horzOpening;
    let randOpening;
    let randIsVertical = false;
    if (this.getRandomInt(0, 2) === 0) {
      // Two vertical openings
      vertOpening = this.getRandomInt(0, horzWallIdx + 1);
      randOpening = this.getRandomInt(horzWallIdx + 1, width);
      horzOpening = this.getRandomInt(0, height);
      randIsVertical = true;
    } else {
      // Two horizontal openings
      horzOpening = this.getRandomInt(0, vertWallIdx + 1);
      randOpening = this.getRandomInt(vertWallIdx + 1, height);
      vertOpening = this.getRandomInt(0, width);
    }

    const topLeft = [];
    const topRight = [];
    const bottomLeft = [];
    const bottomRight = [];
    for (const node of mazeArray) {
      const { nodeIdx } = node;
      const nodeRowIdx = Math.floor(nodeIdx / height);
      const nodeColumnIdx = nodeIdx % width;

      if (randIsVertical) {
        if (nodeColumnIdx === vertWallIdx && (nodeRowIdx !== vertOpening && nodeRowIdx !== randOpening)) {
          this.drawWall(node, 'vertical');
        }
        if (nodeRowIdx === horzWallIdx && nodeColumnIdx !== horzOpening) {
          this.drawWall(node, 'horizontal');
        }
      } else {
        if (nodeColumnIdx === vertWallIdx && nodeRowIdx !== vertOpening) {
          this.drawWall(node, 'vertical');
        }
        if (nodeRowIdx === horzWallIdx && (nodeColumnIdx !== horzOpening && nodeColumnIdx !== randOpening)) {
          this.drawWall(node, 'horizontal');
        }
      }


      if ((nodeColumnIdx < vertWallIdx + 1) && (nodeRowIdx <= horzWallIdx)) {
        topLeft.push(node);
      } else if (nodeColumnIdx < vertWallIdx + 1) {
        bottomLeft.push(node);
      } else if ((nodeColumnIdx >= vertWallIdx + 1) && (nodeRowIdx <= horzWallIdx)) {
        topRight.push(node);
      } else if (nodeColumnIdx >= vertWallIdx + 1) {
        bottomRight.push(node);
      }
    }

    console.log('topLeft', topLeft.map(n => n));
    console.log('topRight', topRight.map(n => n));
    console.log('bottomLeft', bottomLeft.map(n => n));
    console.log('bottomRight', bottomRight.map(n => n));

    this._buildWalls(topLeft, horzWallIdx + 1, vertWallIdx + 1);
    // NOTE:
    //  Recursion seems to be working (read: not infinite looping), BUT THERE'S STILL A PROBLEM.
    //  In the above you are using nodeIdx to sort nodes into diff quadrants.
    //  This works for the first func level, as the nodeIdxs are based on the indices of the nodes in the overall array.
    //  HOWEVER, once you start to step into smalelr quadrants, the indicies are off b/c they're still based on the 
    //    dimensions of the overall array.
    //  To fix this, you should be able to reversive engineer the index of each node in each sub array by the node's
    //    horzPos and vertPos and the sub array's dimensions.
    //  For example, for the overall array, nodeIdx = 20 === horzPos = 6 + (vertPos = 2 * height = 7)
  }

  drawWall(currentNode, orientation) {
    let horzPos = currentNode.horzPos * this.nodeSize;
    let vertPos = currentNode.vertPos * this.nodeSize;
    let horzLength = this.wallThickness;
    let vertLength = this.wallThickness;
    if (orientation === 'vertical') {
      horzPos += (100 - this.wallThickness);
      vertPos += this.wallThickness;
      vertLength = this.nodeSize;
    } else if (orientation === 'horizontal') {
      vertPos += (100 - this.wallThickness);
      horzPos += this.wallThickness;
      horzLength = this.nodeSize;
    }
    // console.log('horzPos', horzPos)
    // console.log('vertPos', vertPos)
    // console.log('horzLength', horzLength)
    // console.log('vertLength', vertLength)

    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(horzPos, vertPos, horzLength, vertLength);
    this.ctx.fill();
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }
}

export default Maze;

// push(horzPos, vertPos) {
//   // Create the node and add it to the maze array
//   const currentNode = new Node(horzPos, vertPos, this.maze.length);
//   this.maze.push(currentNode);
// 
//   // Determine exits
//   for (const exitDelta of this.nodeExitDeltas) {
//     // We're on the left edge of the maze; b/c Nodes are in an array idx - 1 wraps around to the right edge
//     if (currentNode.nodeIdx % this.mazeLength === 0 && exitDelta === 1) {
//       continue;
//     }
// 
//     const exitNode = this.maze[currentNode.nodeIdx - exitDelta];
//     if (exitNode) {
//       // Exit node has no exits; we must connect to it now so it's not orphaned
//       if (exitNode.exits.length === 0) {
//         currentNode.connectToNode(exitNode);
//         continue;
//       }
// 
//       // Exit node has at least 1 exit; determine if this node should connect to it
//       if (Math.random() >= 0.5) {
//         currentNode.connectToNode(exitNode);
//         continue;
//       }
// 
//       // No exit was created; draw a wall
//       this.drawWall(currentNode, exitNode, exitDelta);
//     }
//   }
// 
//   this.ctx.font = '30px Arial';
//   this.ctx.fillStyle = 'black';
//   this.ctx.fillText(currentNode.nodeIdx, (currentNode.horzPos + 0.4) * 100, (currentNode.vertPos + 0.6) * 100);
// }
// 
// drawWall(currentNode, exitNode, exitDelta) {
//   let horzPos = currentNode.horzPos * 100;
//   let vertPos = currentNode.vertPos * 100;
//   let horzLength = this.wallThickness;
//   let vertLength = this.wallThickness;
//   if (exitDelta === 1) {
//     horzPos = horzPos - (this.wallThickness / 2);
//     vertLength = 100;
//   } else {
//     vertPos = vertPos - (this.wallThickness / 2);
//     horzLength = 100;
//   }
// 
//   this.ctx.fillStyle = 'black';
//   this.ctx.fillRect(horzPos, vertPos, horzLength, vertLength);
//   this.ctx.fill();
// }