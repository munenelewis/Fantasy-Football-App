import { atom, selector } from 'recoil'

import { Player } from '../types'

const position = ['FWD', 'MID', 'DEF', 'GCK'] as Position

export const MyFormationState = atom({
  key: 'MyFormationState',
  default: {
    FWD: 3,
    MID: 3,
    DEF: 4,
    GCK: 1,
  },
})

export const myPlayersState = atom({
  key: 'myPlayersState',
  default: [] as Player[],
})

export const myPlayersByPosition = selector({
  key: 'myPlayersByPosition',
  get: ({ get }) => {
    const players = get(myPlayersState)
    const fomations = get(MyFormationState)

    const groupedPlayers = {}

    position.forEach((position) => {
      groupedPlayers[position] = players.filter((p) => p.position === position)
      for (
        let i = groupedPlayers[position].length;
        i < fomations[position];
        i++
      ) {
        groupedPlayers[position].push(null)
      }
    })
    return groupedPlayers
  },
})

export const noOfPlayers = selector({
  key: 'noOfPlayers',
  get: ({ get }) => {
    return get(myPlayersState).length
  },
})

export const totalValue = selector({
  key: 'totalValue',
  get: ({ get }) => {
    return get(myPlayersState).reduce((acc, player) => acc + player.price, 0)
  },
})
