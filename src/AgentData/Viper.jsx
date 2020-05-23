export const Viper = {
  type: 'Controller',
  name: 'Viper',
  description:
    "Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy's vision. If the toxins don't kill her prey, her mindgames surely will.",
  c: {
    name: 'Snakebite',
    description:
      'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
    cost: '100',
    uses: '2 Uses',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  q: {
    name: 'Poison Cloud',
    description:
      'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.',
    cost: '200',
    uses: '1 Use',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  e: {
    name: 'Toxic Screen',
    description:
      'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.',
    cost: 'Free',
    uses: '1 Use',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
  x: {
    name: "Viper's Pit",
    description:
      'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.',
    cost: '7 Charges',
    uses: '',
    damage: '',
    cooldown: '',
    other: '',
    effect: '',
  },
};
