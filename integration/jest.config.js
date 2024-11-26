// module.exports = {
//     preset: 'jest-puppeteer',
//     testRegex: './*\\.test\\.js$',
//     setupFilesAfterEnv: ['./setupTests.js']
// };

module.exports = {
    testEnvironment: 'jest-environment-puppeteer', // Указание на окружение Puppeteer
    testEnvironmentOptions: {
      // Если нужно, можно задать дополнительные опции для Puppeteer
      // Например, чтобы использовать другой браузер:
      // 'PUPPETEER_EXECUTABLE_PATH': '/path/to/your/chrome'
    },
    testRegex: './*\\.test\\.js$', // Ваши тестовые файлы
    // Дополнительные настройки, которые могут понадобиться
    setupFilesAfterEnv: ['./setupTests.js'] // если нужно настроить дополнительные шаги перед запуском тестов
  };