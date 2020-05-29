export const Phoenix = {
  type: 'Duelist',
  name: 'Phoenix',
  description:
    "Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he's got backup or not, he's rushing in to fight on his own terms.",
  c: {
    name: 'Blaze',
    description:
      'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that BLOCKS vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair. HEAL over time if you are standing in the area of effect.',
    damage: '40 DPS / 12 HPS',
    effect: '',
    cost: '200',
    uses: '1 Use',
    cooldown: '',
    duration: '6s',
    misc: '72 HP maximum heal',
    other: ' 3.75s to kill a fully armored target',
  },
  q: {
    name: 'Curveball',
    description:
      'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb.ALTERNATE FIRE to curve the flare orb to the right.',
    damage: '',
    effect: 'FLASHES all in sight',
    cost: '200',
    uses: '2 Uses',
    cooldown: '',
    duration: '0.05s - 0.8s',
    other: '0.5s wind up',
  },
  e: {
    name: 'Hot Hands',
    description:
      'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damage enemies. RESETS after 2 kills. HEAL over time if you are standing in the area of effect.',
    damage: '60 DPS / 12 HPS',
    effect: '',
    cost: 'Free',
    uses: '1 Use',
    cooldown: '',
    duration: '4s',
    misc: '48 HP maximum heal',
    other: ' 2.5s to kill a fully armored target',
  },
  x: {
    name: 'Run it Back',
    description:
      "INSTANTLY place a marker at Phoenix's location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health. SHIELDS are not restored on end of effect.",
    damage: '',
    effect: 'Teleports Phoenix back to the casted location after death',
    cost: '6 Charges',
    uses: '',
    cooldown: '',
    duration: '10s',
    other: '1s respawn animation.',
  },
};
