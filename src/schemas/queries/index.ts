import { GraphQLObjectType } from "graphql";
import { ALL_STUDENTS } from "./studentQueries/allStudents";

const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: {
    allStudents: ALL_STUDENTS,
  },
});

export default RootQuery;
