import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateRestaurantDto } from './dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  @Query((returns) => [Restaurant])
  restaurants(@Args('isPizza') isPizza: boolean): Restaurant[] {
    return [];
  }

  @Mutation((returns) => String)
  createRestaurant(@Args() createRestaurantDto: CreateRestaurantDto): string {
    console.log(createRestaurantDto);
    return 'successfuly Submited';
  }
}
