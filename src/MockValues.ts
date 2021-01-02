import { Pillar, PillarSubmission, User } from './types';
import Chance from 'chance';

const chance = new Chance();

const color = () => chance.color({ format: 'hex' });

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

export const mockUser: User = {
  name: chance.name(),
  pillars: [mockPillar1, mockPillar2, mockPillar3]
}