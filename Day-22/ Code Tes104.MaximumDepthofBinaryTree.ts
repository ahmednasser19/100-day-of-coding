/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
  //we can implment a BFS to get the level and that level is the depth
  if (!root) return 0;

  const queue: TreeNode[] = [];
  queue.push(root);
  let depth = 0;

  while (queue.length > 0) {
    let temp = queue.length;
    depth++;
    while (temp > 0) {
      const curr = queue.shift();
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
      temp--;
    }
  }

  return depth;
}
