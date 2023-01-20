import { GraphQLList } from "graphql";
import { database } from "../../../modules";
import { student } from "../../typeDefs/student";

export const ALL_STUDENTS = {
  type: new GraphQLList(student),
  async resolve(parent: any, args: any, context: any) {
    try {
      const data = await database.student.findAll();
      if (data?.length < 1) {
        return {
          result_code: "002",
          message: "Student not found!",
        };
      }

      return data;
    } catch (error: any) {
      return {
        result_code: "002",
        message: `Failed! ${error?.message}`,
      };
    }
  },
};
