import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { expect, describe, it, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymUseCase

describe('Create Gym Use Case', () => {
    beforeEach(() => {
      gymsRepository = new InMemoryGymsRepository()
      sut = new CreateGymUseCase(gymsRepository)
    })

  it('should be able to create gym', async () => {

    const { gym } = await sut.execute({
      title: 'JS Gym',
      description: null,
      phone: null,
      latitude: -27.4887454,
      longitude: -48.6689706,
    })

      expect(gym.id).toEqual(expect.any(String))
  })
})