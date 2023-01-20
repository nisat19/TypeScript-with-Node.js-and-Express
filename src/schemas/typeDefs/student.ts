import { GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";

export const student = new GraphQLObjectType({
  name: "studentInput",
  fields: () => ({
    name: { type: GraphQLString },
    gradeId: { type: GraphQLInt },
  }),
});
