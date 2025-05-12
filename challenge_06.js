function inBox(box) {
  if (box[0].includes("*") || box[box.length - 1].includes("*")) return false;
  const length = box[0].length;
  let res = false;
  box.map((line) => {
    if (line.includes("*")) {
      if (line[0] === "#" && line[length - 1] === "#") res = true;
    }
  });
  return res;
}
