import { annotate } from '../src'

const input = `01234
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
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input,
  }).message
)

print(
  annotate({
    message,
    index: input.length,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input,
    linesAfter: 5,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input,
    linesAfter: 100,
  }).message
)

print(
  annotate({
    message,
    index: input.length,
    linesBefore: 5,
    input,
  }).message
)

print(
  annotate({
    message,
    index: input.length,
    linesBefore: 100,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 7,
    linesAfter: 100,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 5,
    linesBefore: 2,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    linesAfter: 1,
    input,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    linesAfter: 1,
    input: `12345`,
  }).message
)

print(
  annotate({
    message,
    index: 0,
    input: ``,
  }).message
)

print(
  annotate({
    message,
    index: 1,
    input: ``,
  }).message
)

print(
  annotate({
    message,
    index: -1,
    input: `abc`,
  }).message
)
