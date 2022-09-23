import { courses } from "../../../src/routes";

export default async function getCourses(req, res) {
  if (req.method !== "GET") res.status(401).send("Unauthorized");

  try {
    return res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    return res.status(500).end();
  }
}
