export async function script ({ scope, utils }) {
  await utils.prompts(scope, [
    {
      type: 'select',
      name: 'css',
      message: 'Pick your CSS preprocessor:',
      initial: 0,
      choices: [
        { title: 'Sass with SCSS syntax', value: 'scss' },
        { title: 'Sass with indented syntax', value: 'sass' },
        { title: 'None (the others will still be available)', value: 'css' }
      ]
    },
    {
      type: 'multiselect',
      name: 'preset',
      message: 'Check the features needed for your project:',
      choices: [
        { title: 'ESLint', value: 'lint', description: 'recommended', selected: true },
        { title: 'State Management (Pinia)', value: 'pinia', description: 'https://pinia.vuejs.org' },
        { title: 'State Management (Vuex) [DEPRECATED by Vue Team]', value: 'vuex', description: 'See https://vuejs.org/guide/scaling-up/state-management.html#pinia' },
        { title: 'Axios', value: 'axios' },
        { title: 'Vue-i18n', value: 'i18n' }
      ],
      format: values => {
        let result = values

        if (values.includes('vuex') && values.includes('pinia')) {
          console.log()
          utils.logger.warn('Only one state management package can be used. Picking the recommended Pinia and dropping Vuex.')
          console.log()

          result = values.filter(entry => entry !== 'vuex')
        }

        return utils.convertArrayToObject(result)
      }
    },
    {
      type: (_, { preset }) => (preset.lint ? 'select' : null),
      name: 'lintConfig',
      message: 'Pick an ESLint preset:',
      choices: [
        { title: 'Prettier', value: 'prettier', description: 'https://github.com/prettier/prettier' },
        { title: 'Standard', value: 'standard', description: 'https://github.com/standard/standard' },
        { title: 'Airbnb', value: 'airbnb', description: 'https://github.com/airbnb/javascript' }
      ]
    }
  ])

  utils.createTargetDir(scope)
  utils.renderTemplate(utils.join(import.meta.url, 'BASE'), scope)
  utils.renderTemplate(utils.join(import.meta.url, scope.css), scope)

  if (scope.preset.axios) utils.renderTemplate(utils.join(import.meta.url, 'axios'), scope)
  if (scope.preset.i18n) utils.renderTemplate(utils.join(import.meta.url, 'i18n'), scope)
  if (scope.preset.lint) utils.renderTemplate(utils.join(import.meta.url, 'lint'), scope)

  if (scope.preset.pinia) utils.renderTemplate(utils.join(import.meta.url, 'pinia'), scope)
  else if (scope.preset.vuex) utils.renderTemplate(utils.join(import.meta.url, 'vuex'), scope)
}
