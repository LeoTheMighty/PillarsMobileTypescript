import { Pillar, PillarSubmission, User } from './types';
import Chance from 'chance';

const chance = new Chance();

const color = () => chance.color({ format: 'hex' });

const mockPillars = (num: number) => {
  const pillars = []
  for (let i = 0; i < num; i++) {
    pillars.push({
      color: color(),
      name: chance.word(),
      description: chance.sentence(),
      timeCreated: chance.timestamp().toString(),
      submissions: []
    })
  }
  return pillars;
}

export const mockPillar1: Pillar = {
  color: color(),
  name: chance.word(),
  description: chance.sentence(),
  timeCreated: chance.timestamp().toString(),
  submissions: []
}

export const mockPillar2: Pillar = {
  color: color(),
  name: chance.word(),
  description: chance.sentence(),
  timeCreated: chance.timestamp().toString(),
  submissions: []
}

export const mockPillar3: Pillar = {
  color: color(),
  name: chance.word(),
  description: chance.sentence(),
  timeCreated: chance.timestamp().toString(),
  submissions: []
}

export const makeMockUser = (numPillars: number = 3) => ({
  name: chance.name(),
  pillars: mockPillars(numPillars),
});

export const mockUser: User = {
  name: chance.name(),
  pillars: [mockPillar1, mockPillar2, mockPillar3]
}