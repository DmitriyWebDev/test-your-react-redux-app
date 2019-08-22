export function isFormDataValid(data = {}) {
  if (!data || !Object.keys(data).length) return false;

  const { firstName, lastName, position } = data;

  return Boolean(firstName && firstName.length && lastName && lastName.length && position && position.length);
}
