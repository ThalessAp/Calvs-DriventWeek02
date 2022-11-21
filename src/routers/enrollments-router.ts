import { Router } from "express";
import { authenticateToken, validateBody } from "@/middlewares";
import { getEnrollmentByUser, postCreateOrUpdateEnrollment, getAddressFromCEP, getTickesType, getTickesOfUser } from "@/controllers";
import { createEnrollmentSchema } from "@/schemas";

const enrollmentsRouter = Router();

enrollmentsRouter
  .get("/cep", getAddressFromCEP)
  .all("/*", authenticateToken)
  .get("/", getEnrollmentByUser)
  .post("/", validateBody(createEnrollmentSchema), postCreateOrUpdateEnrollment)
  .get("/tickets/types", authenticateToken, getTickesType)
  .get("/tickets", authenticateToken, getTickesOfUser);

//.get("/payments?ticketId=1", );

export { enrollmentsRouter };
