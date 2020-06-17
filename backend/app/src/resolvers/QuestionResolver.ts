import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Repository, getRepository, getManager } from 'typeorm';
import { AddQuestion, Question } from '../entity/Question';

@Resolver(Question)
export class QuestionResolver {
  //---------------------------------------------
  // Querys
  //

  @Query(() => String)
  async questions(
  ) {
    return 'OK';
  }

  //---------------------------------------------
  // Mutations
  //

  @Mutation(() => String)
  async storeQuestion(
    @Arg('data') data?: AddQuestion,
  ) {
    let ret = 'NG';

    try {
      getRepository(Question).save(data);
      ret = 'OK';

    } catch (err) {
      console.log(err);

    }
    return ret;
  }

  //---------------------------------------------
  // Functions
  //
}

