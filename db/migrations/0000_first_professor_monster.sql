CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text(64),
	`last_name` text(64),
	`email` text NOT NULL,
	`password` text(32) NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);