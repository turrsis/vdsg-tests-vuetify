export default {
    key: 'vdsg-tests-vuetify',
    label: 'vuetify tests',
    tests: {
        uiSpecsPath: '.designer-tests/.spec',
    },
    routesEntryPoint: 'src/main.js',
    originhost: 'http://localhost:8080',
    server: {
        host: 'localhost',
        port: 8086,
    }
}