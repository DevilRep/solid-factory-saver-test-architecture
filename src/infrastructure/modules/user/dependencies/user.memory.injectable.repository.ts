import { Injectable } from "@nestjs/common";

import { IUserRepository, IUserWithPhoneRepository } from "@domain/user";

import { UserV3MemoryRepository } from "@repository/user-v3.memory.repository";

@Injectable()
export class UserMemoryInjectableRepository extends UserV3MemoryRepository implements IUserRepository, IUserWithPhoneRepository { }