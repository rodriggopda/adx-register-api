import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from '../registration/register.module';

const uri =
  'mongodb+srv://rodriggopda:PFZU9UpjDL3P6szt@product-registration-cl.84bzn.mongodb.net/products_registered?retryWrites=true&w=majority&appName=product-registration-cluster-01';

@Module({
  imports: [MongooseModule.forRoot(uri), RegisterModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
