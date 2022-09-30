import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserModule } from './user/user.module';
import { MessageModule } from './message/message.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'chemu',
      entities: [],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    MessageModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
