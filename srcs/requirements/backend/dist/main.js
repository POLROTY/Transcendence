"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const typeOrmConfig = configService.get('database');
    try {
        await typeorm_1.TypeOrmModule.forRoot(typeOrmConfig);
        common_1.Logger.log('Connexion réussie à la base de données PostgreSQL', 'Database');
    }
    catch (error) {
        common_1.Logger.error('Erreur lors de la connexion à la base de données', error, 'Database');
    }
    await app.listen(3000);
    common_1.Logger.log('Application démarrée avec succès', 'Bootstrap');
}
bootstrap();
//# sourceMappingURL=main.js.map