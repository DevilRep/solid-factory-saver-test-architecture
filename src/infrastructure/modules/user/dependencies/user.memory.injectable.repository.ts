import { Injectable } from "@nestjs/common";

import { IUserRepository, IUserWithPhoneRepository } from "@domain/user";

import { UserV2MemoryRepository } from "@repository/user-v2.memory.repository";

@Injectable()
export class UserMemoryInjectableRepository extends UserV2MemoryRepository implements IUserRepository, IUserWithPhoneRepository { }