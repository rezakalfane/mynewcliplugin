const Listr = require('listr')
const { Observable } = require('rxjs')

const { Command, flags } = require('@oclif/command')

const timeout = ms => new Promise(res => setTimeout(res, ms))

class AddCommand extends Command {
  async run() {
    const { flags } = this.parse(AddCommand)

    const tasks = new Listr([
      {
        title: '1. Validate Uni',
        task: (ctx, task) => {
          return new Listr([{
            title: 'Validating JSON Schema',
            task: () => {
              return new Observable(async observer => {
                observer.next('1. Check schema')

                await timeout(2000)
                observer.next('2. Diff schema')

                await timeout(2000)
                observer.complete()
              })
            }
          },
          {
            title: 'Verifying AWS Creds',
            task: async (ctx, task) => {
              await timeout(2000)
              return true
            }
          }], { concurrent: true })
        }
      },
      {
        title: '2. Creating Uni',
        task: async (ctx, task) => {
          await timeout(2000)
          return true
        },
      },
      {
        title: '3. Verifying Uni',
        task: async (ctx, task) => {
          return new Listr([{
            title: 'Validating JSON Schema',
            task: () => {
              return new Observable(async observer => {
                observer.next('1. Test schema')

                await timeout(2000)
                observer.next('2. Diff schema')

                await timeout(2000)
                observer.complete()
              })
            }
          }])
        },
      },
    ])

    tasks.run().catch(err => {
      console.error(err)
    })
  }
}

AddCommand.description = `Describe the command here
...
Extra documentation goes here
`

AddCommand.flags = {
  name: flags.string({
    char: 'n',
    description: 'name to print'
  }),
}

module.exports = AddCommand