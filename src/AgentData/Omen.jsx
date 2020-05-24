export const Omen = {
  type: 'Controller',
  name: 'Omen',
  description:
    "Omen hunts in the shadows. He renders enemies blind, teleports across the field, then let's paranoia take hold as his foe scrambles to uncover where he might strike next.",
  c: {
    name: 'Shrouded Step',
    description:
      'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.',
    cost: '100',
    uses: '2 Uses',
    damage: '',
    cooldown: '',
    other: '1 second cast time, 0.75 second reform time',
    effect: 'Teleport up to 15m',
    duration: '',
  },
  q: {
    name: 'Paranoia',
    description:
      'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.',
    damage: '',
    effect: 'Throw Paranoia in from direction up to 35m',
    cost: '200',
    uses: '1 Use',
    cooldown: '',
    duration: '2 seconds',
    other: 'Nearsight Debuff - Can only see within 7m in any direction',
  },
  e: {
    name: 'Dark Cover',
    description:
      'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision for 15 seconds. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key while targeting to move the marker closer.',
    damage: '',
    effect: 'Throw a shadow orb (smoke) 0 - 80m from your direction',
    cost: 'Free',
    uses: '2 Uses',

    cooldown: '35 seconds',
    duration: '15 seconds',
    other: '',
  },
  x: {
    name: 'From the Shadows',
    description:
      'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a SHADE that can be destroyed by an enemy to cancel his teleport.',
    damage: '',
    effect: "Teleport anywhere on the map, while disrupting the enemies' map",
    cost: '7 Charges',
    uses: '',
    cooldown: '',
    duration: '4 seconds',
    other: '2.5 second shade form, 0.75 second reform time',
  },
};
