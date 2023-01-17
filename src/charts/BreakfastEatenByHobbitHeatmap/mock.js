const generateData = (count, yrange) => {
  let i = 0;
  let series = [];
  while (i < count) {
    let x = (
      i + 1
    ).toString();
    let y =
      Math.floor(Math.random() * (
        yrange.max - yrange.min + 1
      )) + yrange.min;

    series.push({
      x: x,
      y: y
    });
    i++;
  }
  return series;
};

export const series = [
  { name: "Frodo Baggins", data: generateData(30, { min: 0, max: 8 }) },
  { name: "Samwise Gamgee", data: generateData(30, { min: 0, max: 8 }) },
  { name: "Peregrin Took", data: generateData(30, { min: 0, max: 8 }) },
  { name: "Meriadoc Brandybuck", data: generateData(30, { min: 0, max: 8 }) }
];

export const xaxis =
  ["Vol 1", "Vol 2", "Vol 3", "Vol 4", "Vol 5", "Vol 6"];
