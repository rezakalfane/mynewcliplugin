import {expect, test} from '@oclif/test'

describe('hello_plugin', () => {
  test
  .stdout()
  .command(['hello_plugin'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['hello_plugin', '--name', 'jeff'])
  .it('runs hello_plugin --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
