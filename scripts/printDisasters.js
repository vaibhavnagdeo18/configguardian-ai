const data = require('../database/disasters.json');

console.log("Total incidents:", data.incidents.length);

data.incidents.forEach(i => {
  console.log(
    `[${i.priority}] ${i.name} → ${i.config_type}`
  );
});
