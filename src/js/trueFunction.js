export default function getHealthColor(person) {
  if (person.health > 50) {
    return "healthy"
  }
  if (person.health <= 50 && person.health >= 15) {
    return "wounded"
  }
  return "critical"
}

