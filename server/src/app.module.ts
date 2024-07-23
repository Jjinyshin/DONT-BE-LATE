import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroupsModule } from './groups/groups.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { ParticipationsModule } from './participations/participations.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    GroupsModule,
    AppointmentsModule,
    ParticipationsModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
