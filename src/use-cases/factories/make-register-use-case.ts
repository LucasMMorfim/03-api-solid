import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { RegisterUseCase } from "../register"

export function makeRegisterUseCase() {
  const UsersRepository = new PrismaUsersRepository()
  const registerUseCase = new RegisterUseCase(UsersRepository)

  return registerUseCase
}