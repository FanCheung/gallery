import { Module } from "@nestjs/common";

import { AppController } from "./app.controller";
import { HealthController } from "./health/health.controller";

@Module({
  controllers: [AppController, HealthController],
})
export class AppModule {}
