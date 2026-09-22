import { Injectable } from "@nestjs/common";

import { IUserRepository, IUserWithPhoneRepository } from "@domain/user";

import { UserMemoryRepository } from "@repository/user.memory.repository";

@Injectable()
export class UserMemoryInjectableRepository extends UserMemoryRepository implements IUserRepository, IUserWithPhoneRepository { }