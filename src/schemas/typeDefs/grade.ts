import { GraphQLInputObjectType, GraphQLInt } from "graphql";

export const gradeInput = new GraphQLInputObjectType({
  name: "gradeInput",
  fields: () => ({
    grade: { type: GraphQLInt },
  }),
});
