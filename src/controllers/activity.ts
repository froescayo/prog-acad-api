import { Request, Response } from "express";
import { DuplicatedEntityError, NotFoundError, ServerError, ValidationError } from "../helpers/apiError";
import { ActivityInput, KnexError } from "../types";
import { activityValidator } from "../validators";

export async function createActivity(req: Request, res: Response) {
  const activityInput: ActivityInput = req.body;

  const { error } = activityValidator.validate(activityInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  try {
    const dbField = await req.db.FieldRepository.get(activityInput.fieldId);

    if (!dbField) {
      throw new NotFoundError("It was not possible to find the required field");
    }

    const dbActivity = await req.db.ActivityRepository.findOneBy({
      atividade: activityInput.atividade,
      fieldId: activityInput.fieldId,
    });

    if (dbActivity) {
      throw new DuplicatedEntityError("There is already an activity with its name in this field");
    }

    const newActivity = await req.db.ActivityRepository.insert(activityInput);

    return res.status(200).send(newActivity);
  } catch (error) {
    console.log("Error on Creating Activity: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}

export async function getActivitiesFromField(req: Request, res: Response) {
  const { id: fieldId } = req.params;

  try {
    const dbField = await req.db.FieldRepository.get(fieldId);

    if (!dbField) {
      throw new NotFoundError("It was not possible to find the required field");
    }

    const dbActivities = await req.db.ActivityRepository.findBy({ fieldId });

    return res.status(200).send(dbActivities);
  } catch (error) {
    console.log("Error on Getting Activities: ", error);
    throw new ServerError((error as KnexError).detail);
  }
}
