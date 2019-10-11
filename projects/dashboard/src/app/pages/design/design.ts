export const formDesign = {
    'components': [
        {
            'label': 'Columns',
            'columns': [
                {
                    'components': [
                        {
                            'label': '组件名称',
                            'mask': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'select',
                            'input': true,
                            'key': 'componentId',
                            'validate': {
                                'required': true,
                                'pattern': '',
                                'customMessage': '',
                                'json': ''
                            },
                            'conditional': {
                                'show': '',
                                'when': '',
                                'json': ''
                            },
                            'data': {
                                'values': []
                            },
                            'valueProperty': 'value',
                            'customConditional': '',
                            'properties': {
                                'componentId': ''
                            },
                            'tags': []
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'components': [
                        {
                            'label': '可否缩放',
                            'mask': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'select',
                            'input': true,
                            'key': 'maxenable',
                            'validate': {
                                'required': true,
                                'pattern': '',
                                'customMessage': '',
                                'json': ''
                            },
                            'conditional': {
                                'show': '',
                                'when': '',
                                'json': ''
                            },
                            'data': {
                                'values': []
                            },
                            'valueProperty': 'value',
                            'customConditional': '',
                            'properties': {
                                'maxenable': ''
                            },
                            'tags': []
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
            ],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        },
        {
            'label': 'Columns',
            'columns': [
                {
                    'components': [],
                    'width': 2,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'components': [],
                    'width': 2,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'width': 2,
                    'components': []
                },
                {
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'width': 2,
                    'components': []
                },
                {
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'width': 2,
                    'components': [
                        {
                            'label': '取消',
                            'labelPosition': 'left-left',
                            'action': 'event',
                            'state': '',
                            'theme': 'success',
                            'shortcut': '',
                            'mask': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'button',
                            'input': true,
                            'key': '取消',
                            'showValidations': false,
                            'event': 'cancel',
                            'labelWidth': 10
                        }
                    ]
                },
                {
                    'width': 2,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'components': [
                        {
                            'label': '新增',
                            'labelPosition': 'right-right',
                            'state': '',
                            'theme': 'primary',
                            'shortcut': '',
                            'mask': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'button',
                            'input': true,
                            'key': 'submit',
                            'labelWidth': 10

                        }
                    ]
                }
            ],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        }
    ]
};
export const formLayout = {
    'components': [
        {
            'label': 'Columns',
            'columns': [
                {
                    'components': [
                        {
                            'label': '组件高度',
                            'allowMultipleMasks': false,
                            'showWordCount': false,
                            'showCharCount': false,
                            'tableView': true,
                            'disabled': true,
                            'alwaysEnabled': false,
                            'type': 'textfield',
                            'input': true,
                            'key': 'height',
                            'properties': {
                                'height': 'adsa'
                            },
                            'widget': {
                                'type': ''
                            }
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'components': [
                        {
                            'label': '组件宽度',
                            'disabled': true,
                            'allowMultipleMasks': false,
                            'showWordCount': false,
                            'showCharCount': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'textfield',
                            'input': true,
                            'key': 'width',
                            'widget': {
                                'type': ''
                            }
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                }
            ],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        },
        {
            'label': 'Columns',
            'columns': [
                {
                    'components': [
                        {
                            'label': '组件x轴位置',
                            'disabled': true,
                            'allowMultipleMasks': false,
                            'showWordCount': false,
                            'showCharCount': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'textfield',
                            'input': true,
                            'key': 'x',
                            'widget': {
                                'type': ''
                            }
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'components': [
                        {
                            'label': '组件y轴位置',
                            'disabled': true,
                            'allowMultipleMasks': false,
                            'showWordCount': false,
                            'showCharCount': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'textfield',
                            'input': true,
                            'key': 'y',
                            'widget': {
                                'type': ''
                            }
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                }
            ],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        },
        {
            'label': 'Columns',
            'columns': [
                {
                    'components': [
                        {
                            'label': '能否放大',
                            'disabled': true,
                            'allowMultipleMasks': false,
                            'showWordCount': false,
                            'showCharCount': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'textfield',
                            'input': true,
                            'key': 'maxenable',
                            'widget': {
                                'type': ''
                            }
                        }
                    ],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'components': [],
                    'width': 6,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                }
            ],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        }
    ]
};
export const formSave = {
    'components': [
        {
            'label': 'Columns',
            'columns': [],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        },
        {
            'label': 'Columns',
            'columns': [
                {
                    'components': [],
                    'width': 2,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'components': [],
                    'width': 2,
                    'offset': 0,
                    'push': 0,
                    'pull': 0,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': ''
                },
                {
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'width': 2,
                    'components': []
                },
                {
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'width': 2,
                    'components': []
                },
                {
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'width': 2,
                    'components': [
                        {
                            'label': '取消',
                            'labelPosition': 'left-left',
                            'action': 'event',
                            'state': '',
                            'theme': 'success',
                            'shortcut': '',
                            'mask': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'button',
                            'input': true,
                            'key': '取消',
                            'showValidations': false,
                            'event': 'cancel',
                            'labelWidth': 10
                        }
                    ]
                },
                {
                    'width': 2,
                    'type': 'column',
                    'hideOnChildrenHidden': false,
                    'input': true,
                    'key': '',
                    'tableView': true,
                    'label': '',
                    'components': [
                        {
                            'label': '保存',
                            'labelPosition': 'right-right',
                            'state': '',
                            'theme': 'primary',
                            'shortcut': '',
                            'mask': false,
                            'tableView': true,
                            'alwaysEnabled': false,
                            'type': 'button',
                            'input': true,
                            'key': 'submit',
                            'labelWidth': 10

                        }
                    ]
                }
            ],
            'mask': false,
            'tableView': false,
            'alwaysEnabled': false,
            'type': 'columns',
            'input': false,
            'key': 'columns'
        }
    ]
};
