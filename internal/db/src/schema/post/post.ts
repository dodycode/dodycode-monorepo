import { pgTable } from "drizzle-orm/pg-core";

import { lifecycleDates } from "../../utils/lifecycle-dates";

export const Post = pgTable("post", (t) => ({
  id: t.uuid().notNull().primaryKey().defaultRandom(),
  title: t.varchar({ length: 256 }).notNull(),
  content: t.text().notNull(),
  ...lifecycleDates,
}));
