import { annotate } from '../src'

const code = `01234
6789 and a 2
line 3
and 4
another 5
error should be here 6
and 7
more 8
lines 9
`

const message = 'some error message'

let i = 0
const print = (m: string) => {
  console.log(++i + ' -------------------------------------')
  console.log(m)
}

print(
  annotate({
    message,
    index: 48,
    size: 6,
    code,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    code,
  }).message
)

print(
  annotate({
    message,
    index: code.length,
    code,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    code,
    linesAfter: 5,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    code,
    linesAfter: 100,
  }).message
)

print(
  annotate({
    message,
    index: code.length,
    linesBefore: 5,
    code,
  }).message
)

print(
  annotate({
    message,
    index: code.length,
    linesBefore: 100,
    code,
  }).message
)

print(
  annotate({
    message,
    index: 7,
    linesAfter: 100,
    code,
  }).message
)

print(
  annotate({
    message,
    index: 5,
    linesBefore: 2,
    code,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    linesAfter: 1,
    code,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    linesAfter: 1,
    code: `12345`,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    code: ``,
  }).message
)

print(
  annotate({
    message,
    index: 1,
    code: ``,
  }).message
)

print(
  annotate({
    message,
    index: -1,
    code: `abc`,
  }).message
)
