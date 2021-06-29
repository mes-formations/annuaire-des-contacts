/**
 * 
 * @param collection 
 * @param callback 
 * @returns 
 * Usage 
 * const normalized = mapKeys<string, IContact>(contacts, (norm, item) => {
    norm.set(item.id, item);
    });

 */

export function mapKeys<K, T>(
  collection: T[],
  callback: (map: Map<K, T>, item: T) => void
): Map<K, T> {
  const normalizedCollection = new Map<K, T>();
  for (let item of collection) {
    callback(normalizedCollection, item);
  }
  return normalizedCollection;
}
