const interpretError = (message: Error['message']): Error['message'] => {
  const pos = message.search('{');

  if (pos > 0) {
    const errorWithoutParse = message.substr(pos);
    const errorParse = JSON.parse(errorWithoutParse).error as Error;
    message = errorParse.message;
  }

  return message;
}

export default interpretError;
