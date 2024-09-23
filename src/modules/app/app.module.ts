import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from '../registration/register.module';

const uri = '<your-string-connection>';

@Module({
  imports: [MongooseModule.forRoot(uri), RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
