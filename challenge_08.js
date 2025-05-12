function drawRace(indices, length) {
  let res = [];
  for (let i = 0; i < indices.length; i++) {
    let iso = new Array(indices.length - i - 1).fill(" ").join("");
    let pos =
      indices[i] == 0 ? -1 : indices[i] > 0 ? indices[i] : length + indices[i];
    let track = new Array(length).fill("~");
    track[pos] = "r";
    track.push(" /" + (i + 1));
    track = track.join("");
    track = iso + track;
    res.push(track);
  }
  return res.join("\n");
}

drawRace([0, 5, -3], 10);

/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/
