export const Sova = {
  type: 'Initiator',
  name: 'Sova',
  description:
    'Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.',
  c: {
    name: 'Owl Drone',
    description:
      'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
    cost: '300',
    uses: '1 Use',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  q: {
    name: 'Shock Bolt',
    description:
      'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
    cost: '100',
    uses: '2 Uses',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  e: {
    name: 'Recon Bolt',
    description:
      'EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow. Enemies can destroy this bolt.',
    cost: 'Free',
    uses: '1 Use',
    damage: '',
    cooldown: '35 seconds',
    other: '',
    effect: '',
  },
  x: {
    name: "Hunter's Fury",
    description:
      'EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
    cost: '7 Charges',
    uses: '',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
};
