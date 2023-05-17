import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository"
import { AuthenticateUseCase } from "../authenticate"

export function makeAuthenticateUseCase() {
  const UsersRepository = new PrismaUsersRepository()
  const authenticateUseCase = new AuthenticateUseCase(UsersRepository)

  return authenticateUseCase
}