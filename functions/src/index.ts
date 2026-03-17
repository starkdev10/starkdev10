import { onSchedule } from "firebase-functions/v2/scheduler";
import { onDocumentWritten } from "firebase-functions/v2/firestore";
import * as logger from "firebase-functions/logger";

export const generateDailyTasks = onSchedule("every day 16:00", async () => {
  logger.info("generateDailyTasks triggered");
});

export const scheduleReviewTasks = onSchedule("every day 17:00", async () => {
  logger.info("scheduleReviewTasks triggered");
});

export const sendReminderNotifications = onSchedule("every day 18:00", async () => {
  logger.info("sendReminderNotifications triggered");
});

export const recalculateSubtopicStatus = onDocumentWritten("subtopics/{subtopicId}", async () => {
  logger.info("recalculateSubtopicStatus triggered");
});

export const seedStarterSubjects = onSchedule("every day 00:00", async () => {
  logger.info("seedStarterSubjects triggered");
});

export const calculateDashboardStats = onSchedule("every day 23:55", async () => {
  logger.info("calculateDashboardStats triggered");
});
