import { MultiValue, SingleValue } from 'react-select'

export const isMultiValue = <T>(
  value: MultiValue<T> | SingleValue<T>
): value is MultiValue<T> => {
  return Array.isArray(value)
}
