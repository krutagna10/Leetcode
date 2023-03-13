const largestAltitude = (gain) => {
  let maxAltitude = 0;
  let altitude = 0;
  for (let i = 0; i < gain.length; i++) {
    altitude = gain[i] + altitude;
    if (altitude > maxAltitude) {
      maxAltitude = altitude;
    }
  }
  return maxAltitude;
};

const gain = [-5, 1, 5, 0, -7];
console.log(largestAltitude(gain));
