import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Getintouch} from '../models';
import {GetintouchRepository} from '../repositories';

export class GetintouchController {
  constructor(
    @repository(GetintouchRepository)
    public getintouchRepository : GetintouchRepository,
  ) {}

  @post('/guest')
  @response(200, {
    description: 'Getintouch model instance',
    content: {'application/json': {schema: getModelSchemaRef(Getintouch)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Getintouch, {
            title: 'NewGetintouch',
            exclude: ['email'],
          }),
        },
      },
    })
    getintouch: Omit<Getintouch, 'email'>,
  ): Promise<Getintouch> {
    return this.getintouchRepository.create(getintouch);
  }

  @get('/guest/count')
  @response(200, {
    description: 'Getintouch model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    
  ): Promise<Count> {
    return this.getintouchRepository.count();
  }

  @get('/guest')
  @response(200, {
    description: 'Array of Getintouch model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Getintouch, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Getintouch) filter?: Filter<Getintouch>,
  ): Promise<Getintouch[]> {
    return this.getintouchRepository.find(filter);
  }

  @patch('/guest')
  @response(200, {
    description: 'Getintouch PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Getintouch, {partial: true}),
        },
      },
    })
    getintouch: Getintouch,
    @param.where(Getintouch) where?: Where<Getintouch>,
  ): Promise<Count> {
    return this.getintouchRepository.updateAll(getintouch, where);
  }

  @get('/guest/{id}')
  @response(200, {
    description: 'Getintouch model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Getintouch, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Getintouch, {exclude: 'where'}) filter?: FilterExcludingWhere<Getintouch>
  ): Promise<Getintouch> {
    return this.getintouchRepository.findById(id, filter);
  }

  @patch('/guest/{id}')
  @response(204, {
    description: 'Getintouch PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Getintouch, {partial: true}),
        },
      },
    })
    getintouch: Getintouch,
  ): Promise<void> {
    await this.getintouchRepository.updateById(id, getintouch);
  }

  @put('/guest/{id}')
  @response(204, {
    description: 'Getintouch PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() getintouch: Getintouch,
  ): Promise<void> {
    await this.getintouchRepository.replaceById(id, getintouch);
  }

  @del('/guest/{id}')
  @response(204, {
    description: 'Getintouch DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.getintouchRepository.deleteById(id);
  }
}
