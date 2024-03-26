import { CreateUserInput, LoginUserInput, createUserSchema, loginUserSchema } from '@/lib/user-schema';
import { protectedProcedure, pubicProcedure, t } from '@/utils/trpc-server';
import {
  loginHandler,
  logoutHandler,
  registerHandler,
} from './auth-controller';

const authRouter = t.router({
  registerUser: pubicProcedure
    .input(createUserSchema)
    .mutation(({ input } : {input:CreateUserInput}) => registerHandler({ input })),
  loginUser: pubicProcedure
    .input(loginUserSchema)
    .mutation(({ input } : {input:LoginUserInput}) => loginHandler({ input })),
  logoutUser: protectedProcedure.mutation(() => logoutHandler()),
});

export default authRouter;