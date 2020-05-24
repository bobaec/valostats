export const Jett = {
  type: 'Duelist',
  name: 'Jett',
  description:
    "Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
  c: {
    name: 'Cloudburst',
    description:
      'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
    damage: '',
    effect: 'Blocks line of sight',
    cost: '100',
    uses: '3 Uses',
    cooldown: '',
    duration: '3.25s',
    other: '',
  },
  q: {
    name: 'Updraft',
    description: 'INSTANTLY propel Jett high in the air.',
    damage: '',
    effect: 'Jump 5m in the air',
    cost: '100',
    uses: '2 Uses',
    cooldown: '',
    duration: '',
    other: '0.75s recovery time',
  },
  e: {
    name: 'Tailwind',
    description:
      'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward. RESETS after 2 kills',
    damage: '',
    effect: 'Dash 15m using directional keys',
    cost: 'Free',
    uses: '1 Uses',

    cooldown: '',
    duration: '',
    other: '0.75s recovery time. Can be used after Updraft',
  },
  x: {
    name: 'Blade Storm',
    description:
      'EQUIP a set of highly accurate throwing knives that recharge on killing an opponent. FIRE to throw a single knive at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
    damage: '50 - 150',
    effect: '',
    cost: '6 Charges',
    uses: '',
    cooldown: '',
    duration: 'Until all knives are spent or end of round',
    other: 'Accurate while in the air. 150 damage to head, 50 damage to body / legs',
  },
};
