export const Phoenix = {
  type: 'Duelist',
  name: 'Phoenix',
  description:
    "Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he's rushing in to fight on his own terms.",
  c: {
    name: 'Blaze',
    description:
      'EQUIP a flame wall.FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
    damage: '40 DPS / 12 HPS',
    effect: '',
    cost: '200',
    uses: '1 Use',
    cooldown: '',
    duration: '6 seconds',
    other: '72 HP maximum heal',
  },
  q: {
    name: 'Curveball',
    description:
      'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb.ALTERNATE FIRE to curve the flare orb to the right.',
    damage: '',
    effect: 'Flashes all in sight',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    duration: '0.05 - 0.8 seconds',
    other: '0.5 seconds wind up',
  },
  e: {
    name: 'Hot Hands',
    description:
      'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damage enemies. RESETS after 2 kills',
    damage: '',
    effect: '60 DPS / 12 HPS',
    cost: 'Free',
    uses: '1 Use',
    cooldown: '',
    duration: '4 seconds',
    other: '48 HP maximum heal',
  },
  x: {
    name: 'Run it Back',
    description:
      "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.",
    damage: '',
    effect: 'Teleports Phoenix back to the marker without shields',
    cost: '6 Charges',
    uses: '',
    cooldown: '',
    duration: '10 seconds',
    other: '1 second respawn animation',
  },
};
