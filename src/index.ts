// colors
const isTTY = typeof process !== 'undefined' && process.stdout.isTTY
const BOLD = isTTY ? '\x1b[1m' : ''
const RED = isTTY ? BOLD + '\x1b[31m' : ''
const GREY = isTTY ? '\x1b[90m' : ''
const RESET = isTTY ? '\x1b[0m' : ''

// shapes
const BAR = ' │ '
const LF = GREY + '¬' + RESET
const EOF = GREY + '<EOF>' + RESET

const arrow = ({
  // line,
  col,
  message = '',
  pad = 0,
  size = 1,
}: {
  // line: number
  col: number
  message?: string
  pad?: number
  size?: number
}) =>
  BAR.padStart(pad, ' ') +
  RED +
  (('^'.repeat(size) + ' ').padStart(col + size, ' ') + message) +
  RESET

/**
 * Annotates a source code string given an index and a message.
 *
 * @param settings
 * @param settings.message The message to display
 * @param settings.code The code to annotate
 * @param settings.index The index position
 * @param settings.linesBefore How many lines before to show
 * @param settings.linesAfter How many lines after to show
 * @param settings.size The size of the arrows ^^^^
 * @param settings.showLineNumbers Whether to show line numbers
 * @returns { line, col, message }
 */
export const annotate = ({
  message,
  code,
  index,
  linesBefore = 3,
  linesAfter = 3,
  size = 1,
  showLineNumbers = true,
}: {
  message: string
  code: string
  index: number
  linesBefore?: number
  linesAfter?: number
  size?: number
  showLineNumbers?: boolean
}): {
  line?: number
  col?: number
  message: string
} => {
  if (index > code.length) {
    const pos = index.toLocaleString()
    const size = code.length.toLocaleString()
    return {
      message:
        RED +
        `index ${pos} past buffer of size ${size}: ${pos} > ${size}` +
        RESET,
    }
  }
  if (index < 0) {
    const pos = index.toLocaleString()
    const size = code.length.toLocaleString()
    return {
      message: RED + `index ${pos} behind buffer of size ${size}` + RESET,
    }
  }

  let c
  let targetLine = ''
  let col = 1

  // before the index to the start of the line
  let b = index - 1
  for (; b >= 0; b--, col++) {
    c = code.charAt(b)
    if (c === '\n') break
    targetLine = c + targetLine
  }

  // after the index to the end of the line
  let a = index
  for (; a <= code.length; a++) {
    c = code.charAt(a)
    if (a === code.length) targetLine += EOF
    else if (c === '\n') {
      targetLine += LF
      break
    } else targetLine += c
  }

  let line = 1
  for (let i = 0; i < index; i++) {
    if (code.charAt(i) === '\n') line++
  }

  // before lines
  const before = []
  let lb = b
  while (before.length < linesBefore && lb > 0) {
    lb = code.slice(0, b).lastIndexOf('\n')
    before.unshift(code.slice(lb + 1, b) + LF)
    if (lb < 0) break
    b = lb
  }

  // after lines
  const after = []
  let la = a
  while (a < code.length && after.length < linesAfter) {
    la = code.indexOf('\n', a + 1)
    if (la < 0) {
      if (after.length < linesAfter) {
        after.push(EOF)
      }
      break
    }
    after.push(code.slice(a + 1, la) + LF)
    a = la
  }

  // generate lines
  let lines = [...before, targetLine, ...after]
  let pad = 0
  if (showLineNumbers) {
    pad = (line + after.length).toString().length + 6
    lines = lines.map((s, i) => {
      const ln = i + (line - before.length)
      return (
        (ln === line ? RED : '') +
        ((ln === line ? '> ' : '') + ln + RESET + ' │ ').padStart(
          pad + RESET.length
        ) +
        s
      )
    })
  }

  // insert arrow ^^^^^
  lines.splice(before.length + 1, 0, arrow({ col, message, size, pad }))
  lines[before.length] = RED + lines[before.length] + RESET
  lines.splice(before.length, 0, BAR.padStart(pad))
  message = lines.join('\n')

  return { line, col, message }
}
