import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  text,
  timestamp,
  uuid,AnyPgColumn,PgSchema
} from "drizzle-orm/pg-core";


export const rolesEnum =pgEnum("roles", ["guest", "user", "admin"]);
export const typeEnum = pgEnum("mediaType", ["video", "photo"]);

export const Users = pgTable("Users", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  name: text("name") ,
  uuid: text("uuid").unique(),
  role: rolesEnum("role").default("guest"),
  timestamp: timestamp("timestamp").defaultNow(),
});

export const posts = pgTable(
  "Posts",
  {
    id: uuid("id").primaryKey().defaultRandom(),
    UserPoster: integer("user_poster").references(() => Users.id),
    caption: text("caption"),
    mediaType: typeEnum("media_type"),
    uploadUrl: text("upload_url"),
    category: text("category"),
    timestamp: timestamp("timestamp").defaultNow(),
  },
  (table) => [
    index("cat_index").on(table.category),
    index("poster_index").on(table.UserPoster),
  ],
);

export const comments = pgTable("Comments", {
  id: integer("id").primaryKey().generatedByDefaultAsIdentity(),
  parentCommentId: integer("parent_comment_id").references(():AnyPgColumn => comments.id),
  commentor: integer("commentor").references(() => Users.id),
  actualComment: text("actual_comment"),
  postId: uuid("post_id").references(() => posts.id),
  updated: boolean("updated"),
  timestamp: timestamp("timestamp").defaultNow(),
});
