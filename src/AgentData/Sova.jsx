export const Sova = {
  type: 'Initiator',
  name: 'Sova',
  description:
    'Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.',
  c: {
    name: 'Owl Drone',
    description:
      'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
    damage: '',
    effect: 'While in control, shoot a dart that lasts 5s and reveals enemies 3 times every 1.2s',
    cost: '300',
    uses: '1 Use',
    cooldown: '',
    duration: '10s',
    other: 'Owl Drone has 120 HP',
  },
  q: {
    name: 'Shock Bolt',
    description:
      'EQUIP a bow with a shock bolt. FIRE to send the explosive bolt forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
    damage: '10 - 90',
    effect: '',
    cost: '100',
    uses: '2 Uses',
    cooldown: '',
    duration: '',
    other: '',
  },
  e: {
    name: 'Recon Bolt',
    description:
      'EQUIP a bow with recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt (enemies can destroy this bolt). HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
    damage: '',
    effect: 'Reveals enemies for 1s on sight every pulse',
    cost: 'Free',
    uses: '1 Use',
    cooldown: '35s',
    duration: '5.625s',
    other: 'Pulses every 1.875s',
  },
  x: {
    name: "Hunter's Fury",
    description:
      'EQUIP a bow with three long-range, wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
    damage: '80',
    effect: '',
    cost: '7 Charges',
    uses: '',

    cooldown: '',
    duration: '',
    other: 'Effects enemies up to 66m. Reveals enemies to Sova for 1.2s',
  },
};
