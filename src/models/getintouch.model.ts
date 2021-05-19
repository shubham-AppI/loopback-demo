import {Entity, model, property} from '@loopback/repository';

@model()
export class Getintouch extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'number',
    required: true,
  })
  zip: number;

  @property({
    type: 'string',
    required: true,
  })
  message: string;


  constructor(data?: Partial<Getintouch>) {
    super(data);
  }
}

export interface GetintouchRelations {
  // describe navigational properties here
}

export type GetintouchWithRelations = Getintouch & GetintouchRelations;
