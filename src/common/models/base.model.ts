import { Field, ObjectType, ID } from '@nestjs/graphql';

// If isAbstract is set to true, type will not get resgistered in the schema
@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;
  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;
  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;
}
