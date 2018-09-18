import stringHash from 'string-hash';
export function getDestinationAdverb(title) {
  const adverbs = [
    'amazing',
    'stunning',
    'beautiful',
    'scenic',
    'spectacular',
    'astounding',
    'astonishing',
    'fantastic'
  ];
  const adverbIndex = stringHash(title) % adverbs.length;
  const adverb = adverbs[adverbIndex];
  return adverb;
}
