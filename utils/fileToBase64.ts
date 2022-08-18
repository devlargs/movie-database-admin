const fileToBase64 = (file: File): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (): PromiseLike<string> | void => resolve(reader.result?.toString() || '');
    reader.onerror = (error): unknown => reject(error);
  });
};

export default fileToBase64;
