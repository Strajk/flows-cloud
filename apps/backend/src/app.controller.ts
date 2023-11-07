import { Body, Controller, Get, Post } from "@nestjs/common";
import { IsEmail, IsString } from "class-validator";

import { AppService } from "./app.service";

class CreateHelloDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createHello(@Body() body: CreateHelloDto): [string, unknown] {
    return ["Hello Created!", body];
  }
}
