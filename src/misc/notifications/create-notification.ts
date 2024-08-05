import { INotification } from './notification.type.js';

export function createNotification<GName extends string, GValue>(
  name: GName,
  value: GValue,
): INotification<GName, GValue> {
  return {
    name,
    value,
  };
}
