/**
 * Downloads file to device
 * @param content - file content
 * @param fileName - name of file
 * @param contentType - mime type of file
 */
const downloadToFile = (content: string, fileName: string, contentType: string) => {
  const a = document.createElement('a');
  const file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
  URL.revokeObjectURL(a.href);
};

export default downloadToFile;