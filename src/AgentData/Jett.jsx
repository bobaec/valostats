export const Jett = {
  type: 'Duelist',
  name: 'Jett',
  description:
    "Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies up before they even know what hit them.",
  cSkill: {
    name: 'Cloudburst',
    description:
      'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
    cost: '100',
    uses: '3',
  },
  qSkill: { name: 'Updraft', description: 'INSTANTLY propel Jett high in the air.', cost: '100', uses: '2' },
  eSkill: {
    name: 'Tailwind',
    description:
      'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward. RESETS after 2 kills',
    cost: 'Free',
    uses: '1',
  },
  xSkill: {
    name: 'Blade Storm',
    description:
      'EQUIP a set of highly accurate throwing knives that recharge on killing an opponent. FIRE to throw a single knive at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
    cost: '6 Charges',
    uses: '',
  },
};
