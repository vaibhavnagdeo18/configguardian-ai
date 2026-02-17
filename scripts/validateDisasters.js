
const data = require('../database/disasters.json');

const REQUIRED_FIELDS = [
  'incident_id',
  'priority',
  'name',
  'config_type',
  'trigger',
  'outcome',
  'lessons_learned'
];

data.incidents.forEach((incident, index) => {
  REQUIRED_FIELDS.forEach(field => {
    if (!incident[field]) {
      throw new Error(`Incident ${index + 1} missing field: ${field}`);
    }
  });
});

console.log('✅ disasters.json validated successfully');
