export const Raze = {
  type: 'Duelist',
  name: 'Raze',
  description:
    'Raze loves explosives. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces, with a generous dose of "boom".',
  cSkill: {
    name: 'Boom Bot',
    description:
      'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
    cost: '200',
    uses: '1',
  },
  qSkill: {
    name: 'Blast Pack',
    description:
      'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit.',
    cost: '200',
    uses: '2',
  },
  eSkill: {
    name: 'Paint Shells',
    description:
      'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range. RESETS after 2 kills.',
    cost: '200',
    uses: '1',
  },
  xSkill: {
    name: 'Showstopper',
    description:
      'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
    cost: '6 Charges',
    uses: '',
  },
};
