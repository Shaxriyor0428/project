import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function start() {
  const PORT = process.env.PORT || 3030;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
}
start();
