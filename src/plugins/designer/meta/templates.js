module.exports = {
    groups: {
        'grid': {
            elements: ['v-col']
        },
    },
    elements: {
        'v-btn': {
            label: 'button',
            templates: [{
                label: 'icon #3',
                template: {
                    tag: { name: 'v-btn' },
                    props: { icon:'' },
                    children: [{
                        tag: { name: 'v-icon' },
                        props: { icon: 'mdi-numeric-3-circle-outline' },
                    }]
                }
            }]
        },
        'v-col': {
            label: 'column',
            templates: [{
                label: 'v-col custom',
                template: {
                    tag: { name: 'v-col' },
                    props: { cols: '12' },
                    children: ['col xxx']
                }
            }]
        },
    }
}