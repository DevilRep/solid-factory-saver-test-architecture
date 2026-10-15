import { NestFactory } from '@nestjs/core';
import { VersioningType } from '@nestjs/common';

import { AppModule } from '@infrastructure/modules';
import { CustomExceptionFilter } from '@infrastructure/filters/exception.filter';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new CustomExceptionFilter())

  app.enableVersioning({
    type: VersioningType.URI
  })

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
