export function validateId(id) {
  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("Invalid ID");
  }
  return true;
}

export function validateData(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Invalid data format");
  }
  return true;
}
