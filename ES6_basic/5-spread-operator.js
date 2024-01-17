export default function concatArrays(array1, array2, string) {
  let array3 = string.split('')
  const concatArray = [...array1, ...array2, ...array3]
	return concatArray
}
