// import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

// @Module({
//   imports: [],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfigService } from './database-config.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Importez le module ConfigModule
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfigService, // Utilisez le service de configuration pour TypeORM
    }),
  ],
  controllers: [AppController],
  providers: [AppService, DatabaseConfigService], // Ajoutez le service DatabaseConfigService
})
export class AppModule {}
