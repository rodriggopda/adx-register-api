export const acceptedFormarts = ["png", "jpg", "jpeg", "webp"];

export function validateImageBase64(
  base64ImageValue: string,
  filename: string,
) {
  const base64ImagePattern = /^data:image\/(png|jpg|jpeg|webp);base64,/;
  const base64Splited = base64ImageValue.split(base64ImagePattern);

  if (
    !base64ImageValue.match(base64ImagePattern) ||
    !acceptedFormarts.find((ext) => base64Splited[1] == ext)
  ) {
    return null;
  }

  return base64ImageValue;
}
