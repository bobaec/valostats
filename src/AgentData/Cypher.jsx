export const Cypher = {
  type: 'Sentinel',
  name: 'Cypher',
  description:
    "Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.",
  c: {
    name: 'Trapwire',
    description:
      'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location, creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.',
    damage: '',
    effect: 'Tethers and REVEALS enemies, then DAZES for 3 seconds and deals 5 damage',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    duration: 'Until picked up or round end',
    other: 'Daze Debuff - 85% slow, 80% reduced rate of fire, 50% reduced aim recovery. Gradually recovers over time',
  },
  q: {
    name: 'Cyber Cage',
    description:
      'EQUIP a cyber cage. FIRE to toss the cyber cage in front of Cypher. ACTIVATE to create a zone that blocks vision.',
    damage: '',
    effect: 'Creates a cylindrical smoke',
    cost: '100',
    uses: '2 Uses',
    cooldown: '',
    duration: '6 seconds',
    other: '0.75 second activation time',
  },
  e: {
    name: 'Spycam',
    description:
      "EQUIP a spycam. FIRE to place the spycam at the targeted location for 45 seconds. RE-USE this ability to take control of the camera's view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.",
    damage: '',
    effect: 'Landing the dart pings the enemy location every 2 seconds until removed.',
    cost: 'Free',
    uses: '1 Use',
    cooldown: '45 seconds',
    duration: 'Until destroyed or round end',
    other: '1.5 second channel to remove dart',
  },
  x: {
    name: 'Neural Theft',
    description:
      'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
    damage: '',
    effect: 'Reveal all enemies after 2 seconds',
    cost: '7 Charges',
    uses: '',
    cooldown: '',
    duration: '2 seconds',
    other: '12m cast range',
  },
};
