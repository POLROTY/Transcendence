// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// import { Logger } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import { TypeOrmModule } from '@nestjs/typeorm';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(3000);
// }

// bootstrap();



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Configuration de TypeORM pour la connexion à la base de données PostgreSQL
  const typeOrmConfig = configService.get('database');

  // Vérification de la connexion à la base de données
  try {
    await TypeOrmModule.forRoot(typeOrmConfig);
    Logger.log('Connexion réussie à la base de données PostgreSQL', 'Database');
  } catch (error) {
    Logger.error('Erreur lors de la connexion à la base de données', error, 'Database');
  }

  // Démarrage du serveur Nest.js
  await app.listen(3000);
  Logger.log('Application démarrée avec succès', 'Bootstrap');
}
bootstrap();
