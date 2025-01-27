import "server-only";

import { eq, schema } from "@dodycode/db";
import { db } from "@dodycode/db/client";

class UserRepository {
  async findByEmail(email: string) {
    try {
      const user = await db.query.User.findFirst({
        where: (table) => eq(table.email, email),
        columns: {
          id: true,
          name: true,
          email: true,
          emailVerified: true,
          image: true,
          password: true,
        },
      });
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to find user by email");
    }
  }

  async create(values: schema.NewUserSchema) {
    try {
      const user = await db.insert(schema.User).values(values).returning();
      return user[0];
    } catch (error) {
      console.error(error);
      throw new Error("Failed to create user");
    }
  }

  async update(id: string, values: schema.UpdateUserSchema) {
    try {
      const user = await db
        .update(schema.User)
        .set(values)
        .where(eq(schema.User.id, id));
      return user;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to update user");
    }
  }
}

export const userRepository = new UserRepository();
