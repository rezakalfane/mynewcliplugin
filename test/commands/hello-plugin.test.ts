import {expect, test} from '@oclif/test'

describe('hello-plugin', () => {
  test
  .stdout()
  .command(['hello-plugin'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['hello-plugin', '--name', 'jeff'])
  .it('runs hello-plugin --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
