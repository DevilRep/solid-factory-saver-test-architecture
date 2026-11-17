import { Module } from '@nestjs/common'

import { UserMemoryInjectableRepository } from './dependencies/user.memory.injectable.repository'

const repo = new UserMemoryInjectableRepository()

@Module({
    providers: [UserMemoryInjectableRepository],
    exports: [{
        provide: UserMemoryInjectableRepository,
        useValue: repo
    }]
})
export class UserRepositoryModule { }
