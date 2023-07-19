export function convertEnum(status: string | undefined): string {
  if(!status) return '-'
  const lowercaseValue = status.toLowerCase();
  
  if (lowercaseValue.includes('_')) {
    const words = lowercaseValue.split('_');
    const sentenceCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
    const sentenceCaseValue = sentenceCaseWords.join(' ');
    return sentenceCaseValue;
  }

  const sentenceCaseValue = lowercaseValue.charAt(0).toUpperCase() + lowercaseValue.slice(1);
  return sentenceCaseValue;
}