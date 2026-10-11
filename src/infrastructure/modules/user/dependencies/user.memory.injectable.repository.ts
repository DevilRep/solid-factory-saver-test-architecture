import { Injectable } from "@nestjs/common";

import { IUserWithFullNameAndPhoneRepository, IUserWithFullNameRepository, IUserWithFullNameSaver } from "@domain/user";

import { UserV3MemoryRepository } from "@repository/user-v3.memory.repository";

@Injectable()
export class UserMemoryInjectableRepository extends UserV3MemoryRepository implements IUserWithFullNameRepository, IUserWithFullNameSaver, IUserWithFullNameAndPhoneRepository { }