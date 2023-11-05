# -*- coding: utf-8 -*-
{
    'name': 'Datetime Picker',
    'version': '15.0.1.0.0',
    'category': 'Extra Tools',
    'sequence': -1,
    'description': """Datetime Picker""",
    'depends': ["web"],
    'data': [
        'views/datetime_picker.xml',
    ],
    'assets': {
        'web.assets_qweb': [
            'datetime_picker/static/src/components/**/*.xml',
        ],
        'web.assets_backend': [
            'datetime_picker/static/src/components/**/*.js',
            'datetime_picker/static/src/components/**/*.css',
        ],
    },
    'installable': True,
    'application': False,
    'auto_install': False,
}
