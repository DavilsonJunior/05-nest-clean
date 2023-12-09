import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import { Env } from './env'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: false,
  })
  const configureService = app.get<ConfigService<Env, true>>(ConfigService)
  const port = configureService.get('PORT', { infer: true })

  await app.listen(port)
}
bootstrap()
