# -*- coding: utf-8 -*-
{
    'name': 'email_validation_widget',
    'version': '1.0',
    'summary': "Email validation widget",
    'sequence': 10,
    'author': "Anand Shah",
    'description': """
Adding validation functionality in Email widget 
""",
    'category': 'Custom/widget',
    'depends': ['base','web','contacts','web_editor'],
    'data': [
        'views/partner.xml',
    ],
    'installable': True,
    'application': False,
    'license': 'LGPL-3',
    'assets':{
        'web.assets_backend':['email_validation_widget/static/src/js/email_widget.js',
                              'email_validation_widget/static/src/xml/email_widget.xml',
                              'email_validation_widget/static/src/js/username_field.js',
                              'email_validation_widget/static/src/xml/username_field.xml',
                              'email_validation_widget/static/src/js/range_field.js',
                              'email_validation_widget/static/src/xml/range_field.xml'],
    }
}
