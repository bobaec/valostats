export const Cypher = {
  type: 'Sentinel',
  name: 'Cypher',
  description:
    "Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
  cSkill: {
    name: 'Trapwire',
    description:
      'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.',
    cost: '200',
    uses: '2 Uses',
  },
  qSkill: {
    name: 'Cyber Cage',
    description:
      'EQUIP a cyber cage. FIRE to toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision.',
    cost: '100',
    uses: '2 Uses',
  },
  eSkill: {
    name: 'Spycam',
    description:
      "EQUIP a spycam. FIRE to place the spycam at the targeted location for 45 seconds. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
    cost: 'Free',
    uses: '1 Use',
    cooldown: '45 seconds',
  },
  xSkill: {
    name: 'Neural Theft',
    description:
      'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
    cost: '7 Charges',
    uses: '',
  },
};
